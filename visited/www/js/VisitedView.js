
var VisitedView = function (model) {
  this.model = model;
};

VisitedView.prototype = {

  init: function(){
    var model = this.model;
    if(window.location.hash){
      model.changeMap();
    }
    this.loadMap();
    this.loadCountryList();
    this.markCountries();
    this.loadSettings();
    this.updateBubbles();
  },

  loadMap: function(){
    $('#map').empty();
    $('#map').vectorMap(this.getMapParams());

    if(window.location.hash) {
      var code = window.location.hash.substring(1);
      if(code !== ""){
        $(".collapsing#" + getContinentIdOfHashCode(code)).collapsible("expand");
      }
    }
  },

  updateColors: function(){
    var model = this.model;
    var map = $('#map').vectorMap('get', 'mapObject');
    map.series.regions[0].clear();
    map.series.regions[0].setValues(model.getDataByMap());
  },

  resetScroll: function(){
    $(".collapsing").collapsible("collapse");
    $("#content").animate({
      scrollTop:0
    }, 100);
  },

  loadCountryList: function(){
    var model = this.model;
    model.getData(AFRICA_ID).forEach(function(country, i){
      addToList(country, $("#africaList"), i);
    });
    model.getData(ASIA_ID).forEach(function(country, i){
      addToList(country, $("#asiaList"), i);
    });
    model.getData(AUSTRALIA_ID).forEach(function(country, i){
      addToList(country, $("#australiaList"), i);
    });
    model.getData(EUROPE_ID).forEach(function(country, i){
      addToList(country, $("#europeList"), i);
    });
    model.getData(NAMERICA_ID).forEach(function(country, i){
      addToList(country, $("#namericaList"), i);
    });
    model.getData(SAMERICA_ID).forEach(function(country, i){
      addToList(country, $("#samericaList"), i);
    });
  },

  markCountries: function(){
    var model = this.model;
    model.getVisitedCountries().forEach(function(countryId){
      $('#' + countryId + '.ui-icon-check').toggleClass("ui-icon-check-on");
    });
    model.getWantedCountries().forEach(function(countryId){
      $('#' + countryId + '.ui-icon-heart').toggleClass("ui-icon-heart-on");
    });
  },

  clickVisited: function(countryId){
    var model = this.model;
    if($('#' + countryId + '.ui-icon-check').hasClass("ui-icon-check-on")){
      model.removeVisitedCountry(countryId);
    }
    else{
      model.addVisitedCountry(countryId);
    }
    $('#' + countryId + '.ui-icon-check').toggleClass("ui-icon-check-on");
    $('#' + countryId + '.ui-icon-heart').removeClass("ui-icon-heart-on");
    model.removeWantedCountry(countryId);
    this.updateColors();
    this.updateBubbles();
  },

  clickWanted: function(countryId){
    var model = this.model;
    if($('#' + countryId + '.ui-icon-heart').hasClass("ui-icon-heart-on")){
      model.removeWantedCountry(countryId);
    }
    else{
      model.addWantedCountry(countryId);
    }
    $('#' + countryId + '.ui-icon-heart').toggleClass("ui-icon-heart-on");
    $('#' + countryId + '.ui-icon-check').removeClass("ui-icon-check-on");
    model.removeVisitedCountry(countryId);
    this.updateColors();
    this.updateBubbles();
  },

  getMapParams: function(){
    var view = this;
    var model = this.model;
    var data = model.getDataByMap();
    return {
      map: model.getMapName(),
      regionLabelStyle: {
        initial: {'display': 'none'}
      },
      regionStyle: {
        selected: {
          fill: model.getVisitedColor()
        },
        hover: {
          "fill-opacity": 1.0
        }
      },
      series: {
        regions: [{
          scale: {
            '1': model.getVisitedColor(),
            '2': model.getWantedColor()
          },
          attribute: 'fill',
          values: data
        }]
      },
      backgroundColor: '#383f47',
      zoomMax: 40,
      regionsSelectable: true,
      onRegionClick: function(e, code){
        e.preventDefault();
        if(model.isVisitedCountry(code) || model.isWantedCountry(code)){
          view.clickWanted(code);
        }
        else{
          view.clickVisited(code);
        }
      }
    };
  },

  loadSettings: function(){
    var model = this.model;
    if(model.getNumberFormat() === 'fraction'){
      $('#radio-number-format-1a').attr("checked",true).checkboxradio("refresh");
    }
    else{
      $('#radio-number-format-1b').attr("checked",true).checkboxradio("refresh");

    }
  },

  updateBubbles: function(){
    $('#europeBubble').text(this.model.getBubbleText(EUROPE_ID));
    $('#asiaBubble').text(this.model.getBubbleText(ASIA_ID));
    $('#australiaBubble').text(this.model.getBubbleText(AUSTRALIA_ID));
    $('#namericaBubble').text(this.model.getBubbleText(NAMERICA_ID));
    $('#samericaBubble').text(this.model.getBubbleText(SAMERICA_ID));
    $('#africaBubble').text(this.model.getBubbleText(AFRICA_ID));
  }
}

function addToList(country, container, i){
  var template = document.getElementById('template').innerHTML;
  var myClass = i % 2 == 0 ? 'ui-collapsible-content-white' : 'ui-collapsible-content-gray';
  var renderedTemplate = Mustache.render(template, {code: country["code"], name: country["name"], class: myClass, display: hasDetailMap(country) ? 'inline' : 'none'});
  container.append(renderedTemplate);
}

function hasDetailMap(country){
  return FOCUS_COUNTRIES.indexOf(country['code']) >= 0
}

function getContinentIdOfHashCode(code){
  switch(code){
    case 'AF' : return AFRICA_ID;
    case 'AS' : return ASIA_ID;
    case 'EU' : return EUROPE_ID;
    case 'OC' : return AUSTRALIA_ID;
    case 'NA' : return NAMERICA_ID;
    case 'SA' : return SAMERICA_ID;
  }
}
