function addCountryToList(code){
  $("#countryList ul").append('<li id="' + code + '"> <a href="#">' + map.getRegionName(code) + '</a></li>').listview('refresh');
}
