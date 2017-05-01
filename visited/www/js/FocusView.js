
var FocusView = function (model) {
  this.model = model;
};

FocusView.prototype = {

  init: function(){
    var model = this.model;
    this.loadMap();

    $('#focusTitle').text(model.getCountryName(model.getDetailCountry()));
    $('#focusCountryImg').attr("src", "img/" + model.getDetailCountry() + ".png");
    updateBubbles(model);

    model.getData().forEach(function(country, i){
      addToList(country, $("#regionList"), i);
    });

    this.markRegions();
  },

  loadMap: function(){
    $('#map').empty();
    $('#map').vectorMap(this.getMapParams());
  },

  updateColors: function(){
    var model = this.model;
    var map = $('#map').vectorMap('get', 'mapObject');
    map.series.regions[0].clear();
    map.series.regions[0].setValues(model.getDetailMapData());
  },

  getMapParams: function(){
    var view = this;
    var model = this.model;
    var data = model.getDetailMapData();
    return {
      map: model.getDetailMapName(),
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
        if(model.isVisitedRegion(code) || model.isWantedRegion(code)){
          view.clickWanted(code);
        }
        else{
          view.clickVisited(code);
        }
      }
    };
  },

  markRegions: function(){
    var model = this.model;
    model.getVisitedRegions().forEach(function(regionId){
      $('#' + regionId + '.ui-icon-check').toggleClass("ui-icon-check-on");
    });
    model.getWantedRegions().forEach(function(regionId){
      $('#' + regionId + '.ui-icon-heart').toggleClass("ui-icon-heart-on");
    });
  },

  clickVisited: function(regionId){
    var model = this.model;
    if($('#' + regionId + '.ui-icon-check').hasClass("ui-icon-check-on")){
      model.removeVisitedRegion(regionId);
    }
    else{
      model.addVisitedRegion(regionId);
    }
    $('#' + regionId + '.ui-icon-check').toggleClass("ui-icon-check-on");
    $('#' + regionId + '.ui-icon-heart').removeClass("ui-icon-heart-on");
    model.removeWantedRegion(regionId);
    this.updateColors();
    updateBubbles(model);
  },

  clickWanted: function(regionId){
    var model = this.model;
    if($('#' + regionId + '.ui-icon-heart').hasClass("ui-icon-heart-on")){
      model.removeWantedRegion(regionId);
    }
    else{
      model.addWantedRegion(regionId);
    }
    $('#' + regionId + '.ui-icon-heart').toggleClass("ui-icon-heart-on");
    $('#' + regionId + '.ui-icon-check').removeClass("ui-icon-check-on");
    model.removeVisitedRegion(regionId);
    this.updateColors();
    updateBubbles(model);
  },
}

function addToList(state, container, i){
  var template = document.getElementById('template').innerHTML;
  var myClass = i % 2 == 0 ? 'ui-collapsible-content-white' : 'ui-collapsible-content-gray';
  var renderedTemplate = Mustache.render(template, {code: state["code"], name: state["name"], class: myClass});
  container.append(renderedTemplate);
}

function updateBubbles(model){
  $('#focusBubble').text(model.getDetailBubbleText());
}
