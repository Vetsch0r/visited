
var FocusView = function (model) {
  this.model = model;
};

FocusView.prototype = {

  init: function(){
    var model = this.model;
    this.loadMap();

    $('#focusTitle').text(model.getDetailCountry());
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
        regions: {
          scale: {
            '1': '#03a834',
            '2': '#a80303'
          },
          attribute: 'fill',
          values: data
        }
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
    this.loadMap();
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
