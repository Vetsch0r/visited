var ApplicationModel = function () {
  this.visistedCountries = [];
  this.init();
};

ApplicationModel.prototype = {

  init: function (){
    this.visistedCountries = JSON.parse( window.localStorage.getItem('visitedCountries') || '[]' );
  },

  addCountry: function (code, regionName) {
    var obj = {
      key: code,
      value: regionName
    };
    this.visistedCountries.push(obj);
    return obj;
  },

  getVisistedCountries: function () {
    return this.visistedCountries;
  },

  unselectCountry: function (code) {
    delete visitedCountries[code];
  }
}
