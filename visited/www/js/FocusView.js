
var FocusView = function (model) {
  this.model = model;
};

FocusView.prototype = {

  init: function(){
    var model = this.model;
    this.loadMap();

    model.getData().forEach(function(country){
      addToList(country, $("#regionList"), model.getDetailCountry());
    });

    this.markRegions();
  },

  loadMap: function(){
    $('#map').empty();
    $('#map').vectorMap(this.getMapParams());
  },

  getMapParams: function(){
    var model = this.model;
    var data = model.getDetailMapData();
    return {
      map: model.getDetailMapName(),
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
    this.loadMap();
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
    this.loadMap();
  },
}

function addToList(state, container, detailCountry){
  var template = document.getElementById('template').innerHTML;
  var renderedTemplate = Mustache.render(template, {code: state["code"], name: state["name"], country: detailCountry});
  container.append(renderedTemplate);
}
