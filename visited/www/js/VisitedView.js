
var VisitedView = function (model) {
  this.model = model;
};

VisitedView.prototype = {

  init: function(){
    var model = this.model;
    this.loadMap();

    this.loadCountryList();
    this.markCountries();

    updateBubbles(model);
  },

  loadMap: function(){
    $('#map').empty();
    $('#map').vectorMap(this.getMapParams());

    if(window.location.hash) {
      var code = window.location.hash.substring(1);
      if(code !== ""){
        $("#" + code).collapsible("expand");
      }
    }
  },

  resetScroll: function(){
    $(".collapsing").collapsible("collapse");
    $("#content").animate({
      scrollTop:0
    }, 100);
  },

  loadCountryList: function(){
    var model = this.model;
    model.getData(AFRICA_ID).forEach(function(country){
      addToList(country, $("#africaList"));
    });
    model.getData(ASIA_ID).forEach(function(country){
      addToList(country, $("#asiaList"));
    });
    model.getData(AUSTRALIA_ID).forEach(function(country){
      addToList(country, $("#australiaList"));
    });
    model.getData(EUROPE_ID).forEach(function(country){
      addToList(country, $("#europeList"));
    });
    model.getData(NAMERICA_ID).forEach(function(country){
      addToList(country, $("#namericaList"));
    });
    model.getData(SAMERICA_ID).forEach(function(country){
      addToList(country, $("#samericaList"));
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
    this.loadMap();
    updateBubbles(model);
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
    this.loadMap();
    updateBubbles(model);
  },

  getMapParams: function(){
    var model = this.model;
    var data = model.getDataByMap();
    return {
      map: model.getMapName(),
      regionLabelStyle: {
        initial: {'display': 'none'}
      },
      regionStyle: {
        selected: {
          fill: '#03a834'
        },
        hover: {
          "fill-opacity": 1.0
        }
      },
      series: {
        regions: [{
          scale: {
            '1': '#03a834',
            '2': '#a80303'
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
      }
    };
  },
}

function addToList(country, container){
  var template = document.getElementById('template').innerHTML;
  var renderedTemplate = Mustache.render(template, {code: country["code"], name: country["name"], display: hasDetailMap(country) ? 'inline' : 'none'});
  container.append(renderedTemplate);
}

function hasDetailMap(country){
  return country['code'] == 'CH';
}

function updateBubbles(model){
  $('#europeBubble').text(model.getBubbleText(EUROPE_ID));
  $('#asiaBubble').text(model.getBubbleText(ASIA_ID));
  $('#australiaBubble').text(model.getBubbleText(AUSTRALIA_ID));
  $('#namericaBubble').text(model.getBubbleText(NAMERICA_ID));
  $('#samericaBubble').text(model.getBubbleText(SAMERICA_ID));
  $('#africaBubble').text(model.getBubbleText(AFRICA_ID));
}
