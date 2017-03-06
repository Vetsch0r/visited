var EUROPE_ID = 'europe';
var EUROPE_COUNTRIES = [
  'BE',	'FR',	'BG',	'DK', 'HR',	'DE', 'BA', 'HU', 'JE', 'FI', 'BY', 'GR', 'RU', 'NL', 'PT',	'NO',
  'LI',	'LV',	'LT',	'LU',	'FO', 'PL',	'XK',	'CH',	'AD',	'EE',	'IS', 'AL',	'IT',	'GG', 'CZ', 'IM',
  'GB',	'AX',	'IE', 'ES',	'ME',	'MD',	'RO',	'RS',	'MK',	'SK',	'MT',	'SI',	'SM', 'UA', 'SE', 'AT'];

var ASIA_ID = 'asia';
var ASIA_COUNTRIES = ['RU'];

var SAMERICA_ID = 'samerica';
var SAMERICA_COUNTRIES = [];

var visitedCountries = [];

function getContinents(code){
  if(EUROPE_COUNTRIES.includes(code)){
   return EUROPE_ID;
  }
  if(ASIA_COUNTRIES.includes(code)){
    return ASIA_ID;
  }
  return 'undf';
}

function addCountryToList(code, map){
  var map = $('#map').vectorMap('get', 'mapObject');
  getContinents(code).forEach(function(continentId) {
    $("#" + continentId + " ul").append('<li id="' + code + '"> <a href="#">' + map.getRegionName(code) + ' ' + code + '</a></li>').listview('refresh');
  });
}

function loadMap(continent){
  $('#map').vectorMap({
    map: 'world_mill',
    backgroundColor: '#383f47',
    regionsSelectable: true,
    regionStyle: {
      selected: {
        fill: '#B8E186'
      }
    },
    onRegionClick: function(e, code){
      if(visitedCountries.includes(code)){
        $("#" + code).remove();
        visitedCountries.splice(visitedCountries.indexOf(code), 1);
      }
      else{
        addCountryToList(code, map);
        visitedCountries.push(code);
      }
      window.localStorage.setItem('visitedCountries', JSON.stringify(visitedCountries));
    }
  });

  var map = $('#map').vectorMap('get', 'mapObject');
  map.setSelectedRegions(JSON.parse( window.localStorage.getItem('visitedCountries') || '[]' ) );

  if (localStorage.getItem("visitedCountries") !== null) {
    visitedCountries = JSON.parse(window.localStorage.getItem('visitedCountries'));
  }
}

$(function() {
  loadMap('world');

  for (i in visitedCountries) {
    var code = visitedCountries[i];
    addCountryToList(visitedCountries[i], map);
  }
});
