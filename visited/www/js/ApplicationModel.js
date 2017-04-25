var WORLD_MAP = 'world_mill';
var EUROPE_MAP = 'europe_mill';
var ASIA_MAP = 'asia_mill';
var AFRICA_MAP = 'africa_mill';
var SAMERICA_MAP = 'south_america_mill';
var NAMERICA_MAP = 'north_america_mill';
var AUSTRALIA_MAP = 'oceania_mill';

var VISITED_DEFAULT_COLOR = "03a834";
var WANTED_DEFAULT_COLOR = "a80303";

var WORLD_COUNTRIES = [
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

var EUROPE_ID = 'europe';
var EUROPE_COUNTRIES = [
  'BE',	'FR',	'BG',	'DK', 'HR',	'DE', 'BA', 'HU', 'JE', 'FI', 'BY', 'GR', 'RU', 'NL', 'PT',	'NO',
  'LI',	'LV',	'LT',	'LU',	'FO', 'PL',	'XK',	'CH',	'AD',	'EE',	'IS', 'AL',	'IT',	'GG', 'CZ', 'IM',
  'GB',	'AX',	'IE', 'ES',	'ME',	'MD',	'RO',	'RS',	'MK',	'SK',	'MT',	'SI',	'SM', 'UA', 'SE', 'AT'];

var AFRICA_ID = 'africa';
var AFRICA_COUNTRIES = [
  'BF', 'DJ', 'BI', 'BJ', 'ZA', 'BW', 'DZ', 'ET', 'RW', 'TZ', 'GQ', 'NA', 'NE', 'NG', 'TN', 'LR',
  'LS', 'ZW', 'TG', 'TD', 'ER', 'LY', 'GW', 'ZM', 'CI', 'EH', 'CM', 'EG', 'SL', 'CG', 'CF', 'AO',
  'CD', 'GA', 'GN', 'GM', 'XS', 'CV', 'GH', 'SZ', 'MG', 'MA', 'KE', 'SS', 'ML', 'KM', 'ST', 'MW',
  'SO', 'SN', 'MR', 'UG', 'SD', 'MZ'];

var ASIA_ID = 'asia';
var ASIA_COUNTRIES = [
  'BD', 'MN', 'BN', 'BH', 'BT', 'HK', 'JO', 'PS', 'LB', 'LA', 'TW', 'TR', 'LK', 'TL', 'TM', 'TJ',
  'TH', 'XC', 'NP', 'PK', 'PH', 'AE', 'CN', 'AF', 'IQ', 'JP', 'IR', 'AM', 'SY', 'VN', 'GE', 'IL',
  'IN', 'AZ', 'ID', 'OM', 'KG', 'UZ', 'MM', 'SG', 'KH', 'CY', 'QA', 'KR', 'KP', 'KW', 'KZ', 'SA',
  'MY', 'YE'];

var SAMERICA_ID = 'samerica';
var SAMERICA_COUNTRIES = [
  'PY', 'CO', 'VE', 'CL', 'SR', 'BO', 'EC', 'AR', 'GY', 'BR', 'PE', 'UY', 'FK'];

var NAMERICA_ID = 'namerica';
var NAMERICA_COUNTRIES =  [
  'PR', 'DO', 'DM', 'LC', 'NI', 'PA', 'CA', 'SV', 'HT', 'TT', 'JM', 'GT', 'HN', 'BZ', 'BS', 'CR',
  'US', 'GL', 'MX', 'CU'];

var AUSTRALIA_ID = 'australia';
var AUSTRALIA_COUNTRIES = [
  'GU', 'PW', 'KI', 'NC', 'NU', 'NZ', 'AU', 'PG', 'SB', 'PF', 'FJ', 'FM', 'WS', 'VU'];

var FOCUS_COUNTRIES = ['CH', 'US', 'AR', 'CO', 'DE', 'ES', 'FR', 'IT'];

var SWISS_ID = 'CH';
var SWISS_REGIONS = [
  'CH-SO', 'CH-LU', 'CH-SH', 'CH-SG', 'CH-UR', 'CH-NE', 'CH-BS', 'CH-JU', 'CH-BL', 'CH-SZ',
  'CH-BE', 'CH-NW', 'CH-ZG', 'CH-FR', 'CH-ZH', 'CH-VS', 'CH-VD', 'CH-TI', 'CH-TG', 'CH-OW',
  'CH-AG', 'CH-GE', 'CH-AI', 'CH-GL', 'CH-GR', 'CH-AR'];

var UNITED_STATES_ID = 'US';
var UNITED_STATES_REGIONS = [
  'US-VA', 'US-PA', 'US-TN', 'US-WV', 'US-NV', 'US-TX', 'US-NH', 'US-NY', 'US-HI', 'US-VT',
  'US-NM', 'US-NC', 'US-ND', 'US-NE', 'US-LA', 'US-SD', 'US-DC', 'US-DE', 'US-FL', 'US-CT',
  'US-WA', 'US-KS', 'US-WI', 'US-OR', 'US-KY', 'US-ME', 'US-OH', 'US-OK', 'US-ID', 'US-WY',
  'US-UT', 'US-IN', 'US-IL', 'US-AK', 'US-NJ', 'US-CO', 'US-MD', 'US-MA', 'US-AL', 'US-MO',
  'US-MN', 'US-CA', 'US-IA', 'US-MI', 'US-GA', 'US-AZ', 'US-MT', 'US-MS', 'US-SC', 'US-RI',
  'US-AR'
];

var ARGENTINA_ID = 'AR';
var ARGENTINA_REGIONS = [
  'AR-Z', 'AR-X', 'AR-Y', 'AR-V', 'AR-W', 'AR-T', 'AR-U', 'AR-R', 'AR-S', 'AR-P',
  'AR-Q', 'AR-N', 'AR-L', 'AR-M', 'AR-J', 'AR-K', 'AR-H', 'AR-F', 'AR-G', 'AR-D',
  'AR-E', 'AR-B', 'AR-C', 'AR-A'
];

var COLOMBIA_ID = 'CO';
var COLOMBIA_REGIONS = [
  'CO-VAC', 'CO-BOY', 'CO-COR', 'CO-HUI', 'CO-VAU', 'CO-NSA', 'CO-RIS', 'CO-VID', 'CO-BOL', 'CO-CUN',
  'CO-GUV', 'CO-CAU', 'CO-CAS', 'CO-CAQ', 'CO-CES', 'CO-SAN', 'CO-ATL', 'CO-AMA', 'CO-MET', 'CO-MAG',
  'CO-ARA', 'CO-GUA', 'CO-SAP', 'CO-CAL', 'CO-QUI', 'CO-LAG', 'CO-TOL', 'CO-SUC', 'CO-PUT', 'CO-NAR',
  'CO-CHO', 'CO-DC', 'CO-ANT'
];

var GERMANY_ID = 'DE';
var GERMANY_REGIONS = [
  'DE-BE', 'DE-ST', 'DE-RP', 'DE-BB', 'DE-NI', 'DE-MV', 'DE-TH', 'DE-BW', 'DE-HH', 'DE-SH',
  'DE-NW', 'DE-SN', 'DE-HB', 'DE-SL', 'DE-BY', 'DE-HE'
];

var SPAIN_ID = 'ES';
var SPAIN_REGIONS = [
  'ES-NA', 'ES-B',  'ES-CS', 'ES-ZA', 'ES-O',  'ES-OR', 'ES-M',  'ES-L',  'ES-J',  'ES-H',
  'ES-CU', 'ES-T',  'ES-C',  'ES-AV', 'ES-A',  'ES-CR', 'ES-CO', 'ES-VA', 'ES-TF', 'ES-Z',
  'ES-MA', 'ES-AL', 'ES-CE', 'ES-PM', 'ES-VI', 'ES-S',  'ES-TE', 'ES-CC', 'ES-P',  'ES-PO',
  'ES-GC', 'ES-GI', 'ES-TO', 'ES-MU', 'ES-GR', 'ES-GU', 'ES-AB', 'ES-SO', 'ES-ML', 'ES-LU',
  'ES-SE', 'ES-CA', 'ES-SG', 'ES-BU', 'ES-SA', 'ES-V',  'ES-LE', 'ES-BI', 'ES-HU', 'ES-LO',
  'ES-SS', 'ES-BA'
];

var FRANCE_ID = 'FR';
var FRANCE_REGIONS = [
  'FR-28', 'FR-29', 'FR-22', 'FR-23', 'FR-21', 'FR-26', 'FR-27', 'FR-24', 'FR-25', 'FR-MQ',
  'FR-94', 'FR-93', 'FR-92', 'FR-91', 'FR-90', 'FR-17', 'FR-16', 'FR-15', 'FR-14', 'FR-13',
  'FR-12', 'FR-11', 'FR-10', 'FR-2B', 'FR-2A', 'FR-19', 'FR-18', 'FR-88', 'FR-89', 'FR-80',
  'FR-81', 'FR-82', 'FR-83', 'FR-84', 'FR-85', 'FR-86', 'FR-87', 'FR-01', 'FR-02', 'FR-03',
  'FR-04', 'FR-05', 'FR-06', 'FR-07', 'FR-08', 'FR-09', 'FR-RE', 'FR-75', 'FR-74', 'FR-77',
  'FR-76', 'FR-71', 'FR-70', 'FR-73', 'FR-72', 'FR-79', 'FR-78', 'FR-YT', 'FR-66', 'FR-67',
  'FR-64', 'FR-65', 'FR-62', 'FR-63', 'FR-60', 'FR-61', 'FR-68', 'FR-69', 'FR-53', 'FR-52',
  'FR-51', 'FR-50', 'FR-57', 'FR-56', 'FR-55', 'FR-54', 'FR-59', 'FR-58', 'FR-48', 'FR-49',
  'FR-44', 'FR-45', 'FR-46', 'FR-47', 'FR-40', 'FR-41', 'FR-42', 'FR-43', 'FR-95', 'FR-GF',
  'FR-GP', 'FR-39', 'FR-38', 'FR-31', 'FR-30', 'FR-33', 'FR-32', 'FR-35', 'FR-34', 'FR-37',
  'FR-36'
];

var ITALY_ID = "IT";
var ITALY_REGIONS = [
  'IT-BA', 'IT-BG', 'IT-BI', 'IT-BO', 'IT-BN', 'IT-BL', 'IT-BS', 'IT-BR', 'IT-BT', 'IT-BZ',
  'IT-RC', 'IT-RA', 'IT-RG', 'IT-RE', 'IT-RI', 'IT-RO', 'IT-RN', 'IT-RM', 'IT-AG', 'IT-AN',
  'IT-AO', 'IT-AL', 'IT-IS', 'IT-AV', 'IT-AT', 'IT-IM', 'IT-AR', 'IT-AP', 'IT-AQ', 'IT-VE',
  'IT-LC', 'IT-LE', 'IT-LI', 'IT-TP', 'IT-TS', 'IT-TR', 'IT-LO', 'IT-TV', 'IT-LU', 'IT-LT',
  'IT-TO', 'IT-TN', 'IT-TA', 'IT-TE', 'IT-CL', 'IT-CN', 'IT-CO', 'IT-CH', 'IT-CI', 'IT-CE',
  'IT-CA', 'IT-CB', 'IT-CZ', 'IT-CT', 'IT-CR', 'IT-CS', 'IT-SV', 'IT-SP', 'IT-SR', 'IT-SS',
  'IT-SO', 'IT-SI', 'IT-KR', 'IT-SA', 'IT-VR', 'IT-FR', 'IT-FG', 'IT-FE', 'IT-FC', 'IT-FM',
  'IT-FI', 'IT-NO', 'IT-NA', 'IT-NU', 'IT-EN', 'IT-MB', 'IT-MC', 'IT-ME', 'IT-MI', 'IT-MN',
  'IT-MO', 'IT-MS', 'IT-MT', 'IT-UD', 'IT-PU', 'IT-PT', 'IT-PV', 'IT-PR', 'IT-PZ', 'IT-PE',
  'IT-PD', 'IT-PG', 'IT-PA', 'IT-PC', 'IT-PO', 'IT-PN', 'IT-PI', 'IT-GR', 'IT-VC', 'IT-VB',
  'IT-VA', 'IT-VI', 'IT-VV', 'IT-VT', 'IT-VS', 'IT-GE', 'IT-GO', 'IT-OG', 'IT-OR', 'IT-OT'
];

var ApplicationModel = function () {
  this.visitedCountries = [];
  this.wantedCountries = [];
  this.visitedRegions = [];
  this.wantedRegions = [];
  this.mapName = WORLD_MAP;
  this.init();
};

ApplicationModel.prototype = {

  init: function (){
    this.visitedCountries = JSON.parse( window.localStorage.getItem('visitedCountries') || '[]' );
    this.wantedCountries = JSON.parse( window.localStorage.getItem('wantedCountries') || '[]' );
    this.visitedRegions = JSON.parse( window.localStorage.getItem('visitedRegions') || '[]' );
    this.wantedRegions = JSON.parse( window.localStorage.getItem('wantedRegions') || '[]' );
  },

  getData: function(searchId){
    if(searchId != undefined){
      return countries[searchId].sort(function(countryA, countryB){
        return countryA['name'].localeCompare(countryB['name']);
      });
    }
    else{
      return countries[getParameterByName("country")].sort(function(countryA, countryB){
        return countryA['name'].localeCompare(countryB['name']);
      });
    }
  },

  getDetailCountry: function(){
    return getParameterByName("country");
  },

  getVisitedCountries: function(){
    return this.visitedCountries;
  },

  addVisitedCountry: function (countryId) {
    if(!this.visitedCountries.indexOf(countryId) >= 0){
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
    if(!this.wantedCountries.indexOf(countryId) >= 0){
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

  getVisitedRegions: function(){
    return this.visitedRegions;
  },

  addVisitedRegion: function (regionId) {
    if(!this.visitedRegions.indexOf(regionId) >= 0){
      this.visitedRegions.push(regionId);
    }
    window.localStorage.setItem('visitedRegions', JSON.stringify(this.visitedRegions));
  },

  removeVisitedRegion: function (regionId) {
    for(i in this.visitedRegions){
      if(this.visitedRegions[i] === regionId){
        this.visitedRegions.splice(i, 1);
      }
    }
    window.localStorage.setItem('visitedRegions', JSON.stringify(this.visitedRegions));
  },

  getWantedRegions: function(){
    return this.wantedRegions;
  },

  addWantedRegion: function (regionId) {
    if(!this.wantedRegions.indexOf(regionId) >= 0){
      this.wantedRegions.push(regionId);
    }
    window.localStorage.setItem('wantedRegions', JSON.stringify(this.wantedRegions));
  },

  removeWantedRegion: function (regionId) {
    for(i in this.wantedRegions){
      if(this.wantedRegions[i] === regionId){
        this.wantedRegions.splice(i, 1);
      }
    }
    window.localStorage.setItem('wantedRegions', JSON.stringify(this.wantedRegions));
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
      if(countryList.indexOf(countryId) >= 0){
        dataObject[countryId] = 1;
      }
    });
    this.wantedCountries.forEach(function(countryId){
      if(countryList.indexOf(countryId) >= 0){
        dataObject[countryId] = 2;
      }
    });
    return dataObject;
  },

  getDetailMapData: function(){
    var regionsList;
    var dataObject = {};
    switch (this.getDetailCountry()) {
      case SWISS_ID: regionsList = SWISS_REGIONS; break;
      case UNITED_STATES_ID: regionsList = UNITED_STATES_REGIONS; break;
      case ARGENTINA_ID: regionsList = ARGENTINA_REGIONS; break;
      case COLOMBIA_ID: regionsList = COLOMBIA_REGIONS; break;
      case GERMANY_ID: regionsList = GERMANY_REGIONS; break;
      case SPAIN_ID: regionsList = SPAIN_REGIONS; break;
      case FRANCE_ID: regionsList = FRANCE_REGIONS; break;
      case ITALY_ID: regionsList = ITALY_REGIONS; break;
    }
    this.visitedRegions.forEach(function(regionId){
      if(regionsList.indexOf(regionId) >= 0){
        dataObject[regionId] = 1;
      }
    });
    this.wantedRegions.forEach(function(regionId){
      if(regionsList.indexOf(regionId) >= 0){
        dataObject[regionId] = 2;
      }
    });
    return dataObject;
  },

  changeMap: function(){
    if(window.location.hash) {
      var code = window.location.hash.substring(1);
      this.mapName = getMapOfId(code);
    }else{
      this.mapName = WORLD_MAP;
    }
  },

  getMapName: function(){
    return this.mapName;
  },

  getDetailMapName: function(){
    var detailCountry = getParameterByName("country");
    if(detailCountry === UNITED_STATES_ID){
      return detailCountry.toLowerCase() + "_aea";
    }
    else{
      return detailCountry.toLowerCase() + "_mill";
    }
  },

  getCountryName: function (countryId){
    var continentIds = [EUROPE_ID, ASIA_ID, AFRICA_ID, AUSTRALIA_ID, NAMERICA_ID, SAMERICA_ID];
    var countryName;
    continentIds.forEach(function(continentId){
      countries[continentId].forEach(function(country){
        if(countryId === country['code']){
          countryName = country['name'];
        }
      });
    });
    return countryName;
  },

  getVisitedColor: function(){
    var visitedColor = window.localStorage.getItem('visitedColor');
    if(visitedColor == undefined || visitedColor == null){
      return VISITED_DEFAULT_COLOR;
    }
    return visitedColor;
  },

  getWantedColor: function(){
    var wantedColor = window.localStorage.getItem('wantedColor');
    if(wantedColor == undefined  || wantedColor == null){
      return WANTED_DEFAULT_COLOR;
    }
    return wantedColor;
  },

  changeVisitedColor: function (color) {
    window.localStorage.setItem('visitedColor', color);
  },

  changeWantedColor: function (color) {
    window.localStorage.setItem('wantedColor', color);
  },

  getBubbleText: function (continentId){
    var count = 0;
    var total = getTotalCountries(continentId);

    this.visitedCountries.forEach(function(countryId){
      if(continentId === EUROPE_ID && EUROPE_COUNTRIES.indexOf(countryId) >= 0 ||
        continentId === ASIA_ID && ASIA_COUNTRIES.indexOf(countryId) >= 0 ||
        continentId === AUSTRALIA_ID && AUSTRALIA_COUNTRIES.indexOf(countryId) >= 0 ||
        continentId === NAMERICA_ID && NAMERICA_COUNTRIES.indexOf(countryId) >= 0 ||
        continentId === SAMERICA_ID && SAMERICA_COUNTRIES.indexOf(countryId) >= 0 ||
        continentId === AFRICA_ID && AFRICA_COUNTRIES.indexOf(countryId) >= 0){
        count++;
      }
    });
    return count + '/' + total;
  },

  getDetailBubbleText: function(){
    var countryId = getParameterByName('country');
    var count = 0;
    var total = getTotalRegions(countryId);

    if(countryId != null){
      this.visitedRegions.forEach(function(regionId){
        if(countryId === SWISS_ID && SWISS_REGIONS.indexOf(regionId) >= 0 ||
          countryId === ARGENTINA_ID && ARGENTINA_REGIONS.indexOf(regionId) >= 0 ||
          countryId === COLOMBIA_ID && COLOMBIA_REGIONS.indexOf(regionId) >= 0 ||
          countryId === GERMANY_ID && GERMANY_REGIONS.indexOf(regionId) >= 0 ||
          countryId === SPAIN_ID && SPAIN_REGIONS.indexOf(regionId) >= 0 ||
          countryId === FRANCE_ID && FRANCE_REGIONS.indexOf(regionId) >= 0 ||
          countryId === ITALY_ID && ITALY_REGIONS.indexOf(regionId) >= 0 ||
          countryId === UNITED_STATES_ID && UNITED_STATES_REGIONS.indexOf(regionId) >= 0){
          count++;
        }
      });
      return count + '/' + total;
    }
  }
}

function getTotalRegions(id){
  switch(id){
    case SWISS_ID: return SWISS_REGIONS.length;
    case ARGENTINA_ID: return ARGENTINA_REGIONS.length;
    case COLOMBIA_ID: return COLOMBIA_REGIONS.length;
    case GERMANY_ID: return GERMANY_REGIONS.length;
    case SPAIN_ID: return SPAIN_REGIONS.length;
    case FRANCE_ID: return FRANCE_REGIONS.length;
    case ITALY_ID: return ITALY_REGIONS.length;
    case UNITED_STATES_ID: return UNITED_STATES_REGIONS.length;
  }
}

function getTotalCountries(id){
  switch(id){
    case EUROPE_ID: return EUROPE_COUNTRIES.length;
    case ASIA_ID: return ASIA_COUNTRIES.length;
    case AUSTRALIA_ID: return AUSTRALIA_COUNTRIES.length;
    case NAMERICA_ID: return NAMERICA_COUNTRIES.length;
    case SAMERICA_ID: return SAMERICA_COUNTRIES.length;
    case AFRICA_ID: return AFRICA_COUNTRIES.length;
  }
}

function getMapOfId(code){
  switch(code){
    case 'EU': return EUROPE_MAP;
    case 'AS': return ASIA_MAP;
    case 'AF': return AFRICA_MAP;
    case 'OC': return AUSTRALIA_MAP;
    case 'NA': return NAMERICA_MAP;
    case 'SA': return SAMERICA_MAP;
  }
  return WORLD_MAP;
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
