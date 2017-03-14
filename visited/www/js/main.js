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

const CONTINENTS_MAP = 'continents_mill';
const EUROPE_MAP = 'europe_mill';
const ASIA_MAP = 'asia_mill';
const AFRICA_MAP = 'africa_mill';
const SAMERICA_MAP = 'south_america_mill';
const NAMERICA_MAP = 'north_america_mill';
const AUSTRALIA_MAP = 'oceania_mill';

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

function addCountryToList(code){
  var europeMap = $('#europeMap').vectorMap('get', 'mapObject');
  var asiaMap = $('#asiaMap').vectorMap('get', 'mapObject');
  var africaMap = $('#africaMap').vectorMap('get', 'mapObject');
  var northAmericaMap = $('#namericaMap').vectorMap('get', 'mapObject');
  var southAmericaMap = $('#samericaMap').vectorMap('get', 'mapObject');
  var australiaMap = $('#australiaMap').vectorMap('get', 'mapObject');

  var regionName = '';
  if(EUROPE_COUNTRIES.includes(code)){
    regionName = europeMap.getRegionName(code);
  }
  if(ASIA_COUNTRIES.includes(code)){
    regionName = asiaMap.getRegionName(code);
  }
  if(AFRICA_COUNTRIES.includes(code)){
    regionName =  africaMap.getRegionName(code);
  }
  if(NAMERICA_COUNTRIES.includes(code)){
    regionName = northAmericaMap.getRegionName(code);
  }
  if(SAMERICA_COUNTRIES.includes(code)){
    regionName = southAmericaMap.getRegionName(code);
  }
  if(AUSTRALIA_COUNTRIES.includes(code)){
    regionName = australiaMap.getRegionName(code);
  }
  var imgsrc = '<img src="img/' + code + '.png" alt="' + regionName + '" class="ui-li-icon countryIcon">';
  $('<li id="' + code + '">' + imgsrc +  regionName + '</li>').insertAfter("#" + getContinentId(code));
  $("#countries").listview('refresh');
}

function loadMap(mapName){
  var selectable = mapName !== CONTINENTS_MAP;
  $('#map').empty();
  $('#map').vectorMap({
    map: mapName,
    regionLabelStyle: {
      initial: {},
    },
    backgroundColor: '#383f47',
    zoomMax: 40,
    regionsSelectable: true,
    regionStyle: {
      selected: {
        fill: '#B8E186'
      }
    },
    onRegionClick: function(e, code){
      if(mapName !== CONTINENTS_MAP){
        if(visitedCountries.includes(code)){
          $("#" + code).remove();
          visitedCountries.splice(visitedCountries.indexOf(code), 1);
        }
        else{
          addCountryToList(code);
          visitedCountries.push(code);
        }
        window.localStorage.setItem('visitedCountries', JSON.stringify(visitedCountries));
        updateBubbles();
      }
      else{
        window.location.hash = code;
      }
    }
  });

  if(mapName !== CONTINENTS_MAP){
    var map = $('#map').vectorMap('get', 'mapObject');
    var allSelectedCountries = JSON.parse( window.localStorage.getItem('visitedCountries') || '[]' );
    map.setSelectedRegions(filterContinentCountries(allSelectedCountries, mapName));
  }

  if (localStorage.getItem("visitedCountries") !== null) {
    visitedCountries = JSON.parse(window.localStorage.getItem('visitedCountries'));
  }
}

function filterContinentCountries(selectedRegions, mapName){
  filteredCountries = [];
  selectedRegions.forEach(function(code){
    if(mapName === EUROPE_MAP && EUROPE_COUNTRIES.includes(code)){
      filteredCountries.push(code);
    }
    if(mapName === ASIA_MAP && ASIA_COUNTRIES.includes(code)){
      filteredCountries.push(code);
    }
    if(mapName === AFRICA_MAP && AFRICA_COUNTRIES.includes(code)){
      filteredCountries.push(code);
    }
    if(mapName === AUSTRALIA_MAP && AUSTRALIA_COUNTRIES.includes(code)){
      filteredCountries.push(code);
    }
    if(mapName === NAMERICA_MAP && NAMERICA_COUNTRIES.includes(code)){
      filteredCountries.push(code);
    }
    if(mapName === SAMERICA_MAP && SAMERICA_COUNTRIES.includes(code)){
      filteredCountries.push(code);
    }
  });
  return filteredCountries;
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

$(function() {
  $(window).bind('hashchange', function() {
    if(window.location.hash) {
      var continentCode = window.location.hash.substring(1);
      loadMap(getMapName(continentCode));
    }
    else{
      loadMap(CONTINENTS_MAP);
    }
  });

  $('#europeMap').vectorMap({map: EUROPE_MAP});
  $('#asiaMap').vectorMap({map: ASIA_MAP});
  $('#africaMap').vectorMap({map: AFRICA_MAP});
  $('#namericaMap').vectorMap({map: NAMERICA_MAP});
  $('#samericaMap').vectorMap({map: SAMERICA_MAP});
  $('#australiaMap').vectorMap({map: AUSTRALIA_MAP});

  loadMap(CONTINENTS_MAP);
  visitedCountries.forEach(function(code){
    addCountryToList(code);
  });
  updateBubbles();
});

function updateBubbles(){
  $('#europeBubble').text(getBubbleText(EUROPE_ID));
  $('#asiaBubble').text(getBubbleText(ASIA_ID));
  $('#australiaBubble').text(getBubbleText(AUSTRALIA_ID));
  $('#namericaBubble').text(getBubbleText(NAMERICA_ID));
  $('#samericaBubble').text(getBubbleText(SAMERICA_ID));
  $('#africaBubble').text(getBubbleText(AFRICA_ID));
}

function getBubbleText(continentId){
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
