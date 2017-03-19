const CONTINENTS_MAP = 'continents_mill';
const EUROPE_MAP = 'europe_mill';
const ASIA_MAP = 'asia_mill';
const AFRICA_MAP = 'africa_mill';
const SAMERICA_MAP = 'south_america_mill';
const NAMERICA_MAP = 'north_america_mill';
const AUSTRALIA_MAP = 'oceania_mill';

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

var ApplicationModel = function () {
  this.visitedCountries = [];
  this.mapName = CONTINENTS_MAP;
  this.init();
};

ApplicationModel.prototype = {

  init: function (){
    this.visitedCountries = JSON.parse( window.localStorage.getItem('visitedCountries') || '[]' );
  },

  addCountry: function (code, regionName) {
    var obj = {
      key: code,
      value: regionName,
      continent: getContinentId(code)
    };
    this.visitedCountries.push(obj);
    window.localStorage.setItem('visitedCountries', JSON.stringify(this.visitedCountries));
    return obj;
  },

  changeMap: function(){
    if(window.location.hash) {
      var code = window.location.hash.substring(1);
      this.mapName = getMapName(code);
    }else{
      this.mapName = CONTINENTS_MAP;
    }
  },

  getFilteredCountriesByMap: function(){
    var mapName = this.getMapName();
    filteredCountries = [];
    this.visitedCountries.forEach(function(country){
      var code = country['key'];
      if((mapName === EUROPE_MAP && EUROPE_COUNTRIES.includes(code)) ||
          (mapName === ASIA_MAP && ASIA_COUNTRIES.includes(code)) ||
          (mapName === AFRICA_MAP && AFRICA_COUNTRIES.includes(code)) ||
          (mapName === AUSTRALIA_MAP && AUSTRALIA_COUNTRIES.includes(code)) ||
          (mapName === NAMERICA_MAP && NAMERICA_COUNTRIES.includes(code)) ||
          (mapName === SAMERICA_MAP && SAMERICA_COUNTRIES.includes(code))){
        filteredCountries.push(code);
      }
    });
    return filteredCountries;
  },

  getMapName: function(){
    return this.mapName;
  },

  getVisitedCountries: function () {
    return this.visitedCountries.sort(function(countryA, countryB){
      return countryB['value'].localeCompare(countryA['value']);
    });
  },

  getVisitedCountriesOfContinent: function (continentId) {
    var visitedCountriesOfContinent = [];
    this.getVisitedCountries().forEach(function(country){
      if(country['continent'] === continentId){
        visitedCountriesOfContinent.push(country['key']);
      }
    });
    return visitedCountriesOfContinent.reverse();
  },

  unselectCountry: function (code) {
    for(i in this.visitedCountries){
      if(this.visitedCountries[i]['key'] === code){
        this.visitedCountries.splice(i, 1);
      }
    }
    window.localStorage.setItem('visitedCountries', JSON.stringify(this.visitedCountries));
  },

  getBubbleText: function (continentId){
    var count = 0;
    var total = getTotalCountries(continentId);

    this.visitedCountries.forEach(function(country){
      var code = country['key'];
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
