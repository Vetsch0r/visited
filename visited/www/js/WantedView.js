
var WantedView = function (model) {
  this.model = model;
};

WantedView.prototype = {

  init: function(){
    var model = this.model;
    this.load();

    model.getWantedCountries().forEach(function(country){
      addCountryToList(country);
    });
  },

  load: function(isVisited){
    $('#map').empty();
    $('#map').vectorMap(this.getMapParams());

    var model = this.model;
    if(model.getMapName() !== CONTINENTS_MAP){
      var map = $('#map').vectorMap('get', 'mapObject');
      map.setSelectedRegions(model.getFilteredWantedCountriesByMap());
    }
  },

  getMapParams: function(){
    var model = this.model;
    var selectable = model.getMapName() !== CONTINENTS_MAP;
    var selectColor = selectable ? '#3366ff' : '#FFFFFF';
    return {
      map: model.getMapName(),
      regionLabelStyle: {
        initial: {'display': 'none'},
      },
      backgroundColor: '#383f47',
      zoomMax: 40,
      regionsSelectable: true,
      regionStyle: {
        selected: {
          fill: selectColor,
        }
      },
      onRegionClick: function(e, code){
        var wantedCountries = model.getWantedCountries();
        if(model.getMapName() !== CONTINENTS_MAP){
          var alreadySelected = false;
          wantedCountries.forEach(function(country){
            if(country['key'] === code){
              alreadySelected = true;
            }
          });
          if(alreadySelected){
            $("#" + code).remove();
            model.unselectWantedCountry(code);
          }
          else{
            var map = $('#map').vectorMap('get', 'mapObject');
            var country = model.addWantedCountry(code, map.getRegionName(code));
            addCountryToList(country);
          }
        }
        else{
          window.location.hash = code;
        }
      }
    };
  },
}

function addCountryToList(country){
  var code = country['key'];
  var regionName = country['value'];
  $("#wantedCountries").append('<li id="' + code + '">' +  regionName + '</li>')
  $("#wantedCountries").listview('refresh');
}

function getMapName(code){
  switch(code){
    case 'EU': return EUROPE_MAP;
    case 'AS': return ASIA_MAP;
    case 'AF': return AFRICA_MAP;
    case 'OC': return AUSTRALIA_MAP;
    case 'NA': return NAMERICA_MAP;
    case 'SA': return SAMERICA_MAP;
  }
  return CONTINENTS_MAP;
}
