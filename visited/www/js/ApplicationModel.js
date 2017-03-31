const WORLD_MAP = 'world_mill';
const EUROPE_MAP = 'europe_mill';
const ASIA_MAP = 'asia_mill';
const AFRICA_MAP = 'africa_mill';
const SAMERICA_MAP = 'south_america_mill';
const NAMERICA_MAP = 'north_america_mill';
const AUSTRALIA_MAP = 'oceania_mill';

const WORLD_COUNTRIES = [
  'BD', 'BE', 'BF', 'BG', 'BA', 'BN', 'BO', 'JP', 'BI', 'BJ', 'BT', 'JM', 'BW', 'BR', 'BS',
  'BY', 'BZ', 'RU', 'RW', 'RS', 'TL', 'TM', 'TJ', 'RO', 'GW', 'GT', 'GR', 'GQ', 'GY', 'GE',
  'GB', 'GA', 'GN', 'GM', 'GL', 'GH', 'OM', 'TN', 'JO', 'HR', 'HT', 'HU', 'HN', 'PR', 'PS', 'PT',
  'PY', 'PA', 'PG', 'PE', 'PK', 'PH', 'PL', 'ZM', 'EH', 'EE', 'EG', 'ZA', 'EC', 'IT', 'VN', 'SB',
  'ET', 'SO', 'ZW', 'ES', 'ER', 'ME', 'MD', 'MG', 'MA', 'UZ', 'MM', 'ML', 'MN', 'MK', 'MW', 'MR',
  'UG', 'MY', 'MX', 'IL', 'FR', 'XS', 'FI', 'FJ', 'FK', 'NI', 'NL', 'NO', 'NA', 'VU', 'NC', 'NE',
  'NG', 'NZ', 'NP', 'XK', 'CI', 'CH', 'CO', 'CN', 'CM', 'CL', 'XC', 'CA', 'CG', 'CF', 'CD', 'CZ',
  'CY', 'CR', 'CU', 'SZ', 'SY', 'KG', 'KE', 'SS', 'SR', 'KH', 'SV', 'SK', 'KR', 'SI', 'KP', 'KW',
  'SN', 'SL', 'KZ', 'SA', 'SE', 'SD', 'DO', 'DJ', 'DK', 'DE', 'YE', 'DZ', 'US', 'UY', 'LB', 'LA',
  'TW', 'TT', 'TR', 'LK', 'LV', 'LT', 'LU', 'LR', 'LS', 'TH', 'TF', 'TG', 'TD', 'LY', 'AE', 'VE',
  'AF', 'IQ', 'IS', 'IR', 'AM', 'AL', 'AO', 'AR', 'AU', 'AT', 'IN', 'TZ', 'AZ', 'IE', 'ID', 'UA',
  'QA', 'MZ',
]

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
  this.wantedCountries = [];
  this.mapName = WORLD_MAP;
  this.init();
};

ApplicationModel.prototype = {

  init: function (){
    this.visitedCountries = JSON.parse( window.localStorage.getItem('visitedCountries') || '[]' );
    this.wantedCountries = JSON.parse( window.localStorage.getItem('wantedCountries') || '[]' );
  },

  getCountries: function(continentId){
    return countries[continentId].sort(function(countryA, countryB){
      return countryA['name'].localeCompare(countryB['name']);
    });
  },

  getVisitedCountries: function(){
    return this.visitedCountries;
  },

  addVisitedCountry: function (countryId) {
    if(!this.visitedCountries.includes(countryId)){
      this.visitedCountries.push(countryId);
    }
    window.localStorage.setItem('visitedCountries', JSON.stringify(this.visitedCountries));
  },

  removeVisitedCountry: function (countryId) {
    for(i in this.visitedCountries){
      if(this.visitedCountries[i] === countryId){
        this.visitedCountries.splice(i, 1);
      }
    }
    window.localStorage.setItem('visitedCountries', JSON.stringify(this.visitedCountries));
  },

  getWantedCountries: function(){
    return this.wantedCountries;
  },

  addWantedCountry: function (countryId) {
    if(!this.wantedCountries.includes(countryId)){
      this.wantedCountries.push(countryId);
    }
    window.localStorage.setItem('wantedCountries', JSON.stringify(this.wantedCountries));
  },

  removeWantedCountry: function (countryId) {
    for(i in this.wantedCountries){
      if(this.wantedCountries[i] === countryId){
        this.wantedCountries.splice(i, 1);
      }
    }
    window.localStorage.setItem('wantedCountries', JSON.stringify(this.wantedCountries));
  },

  getDataByMap: function(){
    var countryList;
    var dataObject = {};
    switch (this.getMapName()) {
      case WORLD_MAP: countryList = WORLD_COUNTRIES; break;
      case AFRICA_MAP: countryList = AFRICA_COUNTRIES; break;
      case ASIA_MAP: countryList = ASIA_COUNTRIES; break;
      case AUSTRALIA_MAP: countryList = AUSTRALIA_COUNTRIES; break;
      case EUROPE_MAP: countryList = EUROPE_COUNTRIES; break;
      case NAMERICA_MAP: countryList = NAMERICA_COUNTRIES; break;
      case SAMERICA_MAP: countryList = SAMERICA_COUNTRIES; break;
    }
    this.visitedCountries.forEach(function(countryId){
      if(countryList.includes(countryId)){
        dataObject[countryId] = 1;
      }
    });
    this.wantedCountries.forEach(function(countryId){
      if(countryList.includes(countryId)){
        dataObject[countryId] = 2;
      }
    });
    return dataObject;
  },

  changeMap: function(){
    if(window.location.hash) {
      var code = window.location.hash.substring(1);
      this.mapName = getMapName(code);
    }else{
      this.mapName = WORLD_MAP;
    }
  },

  getFilteredWantedCountriesByMap: function(){
    var mapName = this.getMapName();
    filteredCountries = [];
    this.wantedCountries.forEach(function(country){
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

  getVisitedCountriesOfContinent: function (continentId) {
    var visitedCountriesOfContinent = [];
    this.getVisitedCountries().forEach(function(country){
      if(country['continent'] === continentId){
        visitedCountriesOfContinent.push(country['key']);
      }
    });
    return visitedCountriesOfContinent.reverse();
  },

  getBubbleText: function (continentId){
    var count = 0;
    var total = getTotalCountries(continentId);

    this.visitedCountries.forEach(function(countryId){
      if(continentId === EUROPE_ID && EUROPE_COUNTRIES.includes(countryId) ||
        continentId === ASIA_ID && ASIA_COUNTRIES.includes(countryId) ||
        continentId === AUSTRALIA_ID && AUSTRALIA_COUNTRIES.includes(countryId) ||
        continentId === NAMERICA_ID && NAMERICA_COUNTRIES.includes(countryId) ||
        continentId === SAMERICA_ID && SAMERICA_COUNTRIES.includes(countryId) ||
        continentId === AFRICA_ID && AFRICA_COUNTRIES.includes(countryId)){
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
