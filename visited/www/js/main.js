const EUROPE_ID = 'europe';
const EUROPE_COUNTRIES = [
  'BE',	'FR',	'BG',	'DK', 'HR',	'DE', 'BA', 'HU', 'JE', 'FI', 'BY', 'GR', 'RU', 'NL', 'PT',	'NO',
  'LI',	'LV',	'LT',	'LU',	'FO', 'PL',	'XK',	'CH',	'AD',	'EE',	'IS', 'AL',	'IT',	'GG', 'CZ', 'IM',
  'GB',	'AX',	'IE', 'ES',	'ME',	'MD',	'RO',	'RS',	'MK',	'SK',	'MT',	'SI',	'SM', 'UA', 'SE', 'AT'];

const AFRICA_ID = 'africa';
const AFRICA_COUNTRIES = [
  'BF', 'DJ', 'BI', 'BJ', 'ZA', 'BW', 'DZ', 'ET', 'RW', 'TZ', 'GQ', 'NA', 'NE', 'NG', 'TN', 'LR',
  'LS', 'ZW', 'TG', 'TD', 'ER', 'LY', 'GW', 'ZM', 'CI', 'EH', 'CM', 'EG', 'SL', 'CG', 'CF', 'AO',
  'CD', 'GA', 'GN', 'GM', 'XS', 'CV', 'GH', 'SZ', 'MG', 'MA', 'KE', 'SS', 'ML', 'KM', 'ST', 'MW',
  'SO', 'SN', 'MR', 'UG', 'SD', 'MZ'];

const ASIA_ID = 'asia';
const ASIA_COUNTRIES = [
  'BD', 'MN', 'BN', 'BH', 'BT', 'HK', 'JO', 'PS', 'LB', 'LA', 'TW', 'TR', 'LK', 'TL', 'TM', 'TJ',
  'TH', 'XC', 'NP', 'PK', 'PH', 'AE', 'CN', 'AF', 'IQ', 'JP', 'IR', 'AM', 'SY', 'VN', 'GE', 'IL',
  'IN', 'AZ', 'ID', 'OM', 'KG', 'UZ', 'MM', 'SG', 'KH', 'CY', 'QA', 'KR', 'KP', 'KW', 'KZ', 'SA',
  'MY', 'YE'];

const SAMERICA_ID = 'samerica';
const SAMERICA_COUNTRIES = [
  'PY', 'CO', 'VE', 'CL', 'SR', 'BO', 'EC', 'AR', 'GY', 'BR', 'PE', 'UY', 'FK'];

const NAMERICA_ID = 'namerica';
const NAMERICA_COUNTRIES =  [
  'PR', 'DO', 'DM', 'LC', 'NI', 'PA', 'CA', 'SV', 'HT', 'TT', 'JM', 'GT', 'HN', 'BZ', 'BS', 'CR',
  'US', 'GL', 'MX', 'CU'];;

const AUSTRALIA_ID = 'australia';
const AUSTRALIA_COUNTRIES = [
  'GU', 'PW', 'KI', 'NC', 'NU', 'NZ', 'AU', 'PG', 'SB', 'PF', 'FJ', 'FM', 'WS', 'VU'];


var visitedCountries = [];

function getContinentId(code){
  if(EUROPE_COUNTRIES.includes(code)){
   return EUROPE_ID;
  }
  if(ASIA_COUNTRIES.includes(code)){
    return ASIA_ID;
  }
  if(AFRICA_COUNTRIES.includes(code)){
    return AFRICA_ID;
  }
  if(NAMERICA_COUNTRIES.includes(code)){
    return NAMERICA_ID;
  }
  if(SAMERICA_COUNTRIES.includes(code)){
    return SAMERICA_ID;
  }
  if(AUSTRALIA_COUNTRIES.includes(code)){
    return AUSTRALIA_ID;
  }
}

function addCountryToList(code, map){
  var regionName = $('#map').vectorMap('get', 'mapObject').getRegionName(code);
  var imgsrc = '<img src="img/' + code + '.png" alt="' + regionName + '" class="ui-li-icon countryIcon">';
  $('<li id="' + code + '">' + imgsrc +  regionName + '</li>').insertAfter("#" + getContinentId(code));
  $("#countries").listview('refresh');
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
      updateBubbles();
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

  updateBubbles();
});

function getTotalCountries(continentId){
  switch(continentId){
    case EUROPE_ID: return EUROPE_COUNTRIES.length;
    case ASIA_ID: return ASIA_COUNTRIES.length;
    case AUSTRALIA_ID: return AUSTRALIA_COUNTRIES.length;
    case NAMERICA_ID: return NAMERICA_COUNTRIES.length;
    case SAMERICA_ID: return SAMERICA_COUNTRIES.length;
    case AFRICA_ID: return AFRICA_COUNTRIES.length;
  }
}

function getContinentText(continentId){
  var count = 0;
  var total = getTotalCountries(continentId);

  visitedCountries.forEach(function(code){
    if(continentId === EUROPE_ID && EUROPE_COUNTRIES.includes(code) ||
      continentId === ASIA_ID && ASIA_COUNTRIES.includes(code) ||
      continentId === AUSTRALIA_ID && AUSTRALIA_COUNTRIES.includes(code) ||
      continentId === NAMERICA_ID && NAMERICA_COUNTRIES.includes(code) ||
      continentId === SAMERICA_ID && SAMERICA_COUNTRIES.includes(code) ||
      continentId === AFRICA_ID && AFRICA_COUNTRIES.includes(code)){
      count++;
    }
  });
  return count + '/' + total;
}

function updateBubbles(){
  $('#europeBubble').text(getContinentText(EUROPE_ID));
  $('#asiaBubble').text(getContinentText(ASIA_ID));
  $('#australiaBubble').text(getContinentText(AUSTRALIA_ID));
  $('#namericaBubble').text(getContinentText(NAMERICA_ID));
  $('#samericaBubble').text(getContinentText(SAMERICA_ID));
  $('#africaBubble').text(getContinentText(AFRICA_ID));
}
