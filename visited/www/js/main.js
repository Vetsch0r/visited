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

function getContinentId(code){
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
  $("#" + getContinentId(code) + " ul").append('<li id="' + code + '"> <a href="#">' + map.getRegionName(code) + '</a></li>').listview('refresh');

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
        visitedCountries.sort();
      }
      window.localStorage.setItem('visitedCountries', JSON.stringify(visitedCountries));
      updateTitles();
    }
  });

  var map = $('#map').vectorMap('get', 'mapObject');
  map.setSelectedRegions(JSON.parse( window.localStorage.getItem('visitedCountries') || '[]' ) );

  if (localStorage.getItem("visitedCountries") !== null) {
    visitedCountries = JSON.parse(window.localStorage.getItem('visitedCountries'));
    visitedCountries.sort();
  }
}

$(function() {
  loadMap('world');

  for (i in visitedCountries) {
    var code = visitedCountries[i];
    addCountryToList(visitedCountries[i], map);
  }

  updateTitles();
});

function getContinentText(continentId){
  var count = 0;
  if(continentId === EUROPE_ID){
    visitedCountries.forEach(function(code){
      if(EUROPE_COUNTRIES.includes(code)){
        count++;
      }
    });
    return 'Europe ' + count + '/' + EUROPE_COUNTRIES.length;
  }
}

function updateTitles(){
  $('#europeTitle a').text(getContinentText(EUROPE_ID));
}
