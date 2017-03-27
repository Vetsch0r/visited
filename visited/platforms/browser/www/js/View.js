
var View = function (model) {
  this.model = model;
};

View.prototype = {

  init: function(isVisited){
    var model = this.model;
    this.load(isVisited);
    if(isVisited){
      model.getVisitedCountries().forEach(function(country){
        addCountryToVisitedList(country);
      });
      updateBubbles(model);
    }
    else{
    }
  },

  changeSite: function(site) {
    window.location=site;
  },

  load: function(isVisited){
    $('#map').empty();
    $('#map').vectorMap(this.getMapParamsVisited());

    var model = this.model;
    if(model.getMapName() !== CONTINENTS_MAP){
      var map = $('#map').vectorMap('get', 'mapObject');
      map.setSelectedRegions(model.getFilteredCountriesByMap());
    }
  },

  getMapParamsWanted: function(){
    var model = this.model;
    var selectable = model.getMapName() !== CONTINENTS_MAP;
    var selectColor = selectable ? '#CCCCCC' : '#FFFFFF';
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
          alert(alreadySelected)
          if(alreadySelected){
            $("#" + code).remove();
            model.unselectWantedCountry(code);
          }
          else{
            var map = $('#map').vectorMap('get', 'mapObject');
            var country = model.addWantedCountry(code, map.getRegionName(code));
            addCountryToWantedList(country);
          }
        }
        else{
          window.location.hash = code;
        }
      }
    };
  },

  getMapParamsVisited: function(){
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
            model.unselectVisitedCountry(code);
          }
          else{
            var map = $('#map').vectorMap('get', 'mapObject');
            var country = model.addVisitedCountry(code, map.getRegionName(code));
            var keys = model.getVisitedCountriesOfContinent(country['continent']);
            var index = keys.indexOf(country['key']);
            if(keys.length > 1 && index != 0){
              addCountryToVisitedList(country, keys[index-1]);
            }else {
              addCountryToVisitedList(country);
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

function addCountryToVisitedList(country, indexCode){
  var code = country['key'];
  var afterId = indexCode === undefined ? country['continent'] : indexCode;
  var regionName = country['value'];
  var imgsrc = '<img src="img/' + code + '.png" alt="' + regionName + '" class="ui-li-icon countryIcon">';
  var link = '<a href="#"</a>';
  $('<li id="' + code + '">' + imgsrc +  regionName + '</li>').insertAfter("#" + afterId);
  $("#visitedCountries").listview('refresh');
}

function addCountryToWantedList(country){
  var code = country['key'];
  var regionName = country['value'];
  var imgsrc = '<img src="img/' + code + '.png" alt="' + regionName + '" class="ui-li-icon countryIcon">';
  $('<li id="' + code + '">' + imgsrc +  regionName + '</li>').insert("#wantedCountries");
  $("#wantedCountries").listview('refresh');
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
