
var View = function (model) {
  this.model = model;
};

View.prototype = {

  init: function(){
    var model = this.model;
    this.load();
    model.getVisitedCountries().forEach(function(country){
      addCountryToList(country);
    });

    updateBubbles(model);
  },

  load: function(){
    $('#map').empty();
    $('#map').vectorMap(this.getMapParams());
    var model = this.model;

    if(model.getMapName() !== CONTINENTS_MAP){
      var map = $('#map').vectorMap('get', 'mapObject');
      map.setSelectedRegions(model.getFilteredCountriesByMap());
    }
  },

  getMapParams: function(){
    var model = this.model;
    var selectable = model.getMapName() !== CONTINENTS_MAP;
    var selectColor = selectable ? '#B8E186' : '#FFFFFF';
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
        var visitedCountries = model.getVisitedCountries();
        if(model.getMapName() !== CONTINENTS_MAP){
          var alreadySelected = false;
          visitedCountries.forEach(function(country){
            if(country['key'] === code){
              alreadySelected = true;
            }
          });
          if(alreadySelected){
            $("#" + code).remove();
            model.unselectCountry(code);
          }
          else{
            var map = $('#map').vectorMap('get', 'mapObject');
            var country = model.addCountry(code, map.getRegionName(code));
            var keys = model.getVisitedCountriesOfContinent(country['continent']);
            var index = keys.indexOf(country['key']);
            if(keys.length > 1 && index != 0){
              addCountryToList(country, keys[index-1]);
            }else {
              addCountryToList(country);
            }
          }
          updateBubbles(model);
        }
        else{
          window.location.hash = code;
        }
      }
    };
  },
}



function addCountryToList(country, indexCode){
  var code = country['key'];
  var afterId = indexCode === undefined ? country['continent'] : indexCode;
  var regionName = country['value'];
  var imgsrc = '<img src="img/' + code + '.png" alt="' + regionName + '" class="ui-li-icon countryIcon">';
  $('<li id="' + code + '">' + imgsrc +  regionName + '</li>').insertAfter("#" + afterId);
  $("#countries").listview('refresh');
}

function updateBubbles(model){
  $('#europeBubble').text(model.getBubbleText(EUROPE_ID));
  $('#asiaBubble').text(model.getBubbleText(ASIA_ID));
  $('#australiaBubble').text(model.getBubbleText(AUSTRALIA_ID));
  $('#namericaBubble').text(model.getBubbleText(NAMERICA_ID));
  $('#samericaBubble').text(model.getBubbleText(SAMERICA_ID));
  $('#africaBubble').text(model.getBubbleText(AFRICA_ID));
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
