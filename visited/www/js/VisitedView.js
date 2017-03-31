
var VisitedView = function (model) {
  this.model = model;
};

VisitedView.prototype = {

  init: function(){
    var model = this.model;
    this.load();

    this.loadCountryList();
    this.markCountries();

    //init country list
    //model.getVisitedCountries().forEach(function(country){
      //addCountryToList(country);
    //});
    updateBubbles(model);
  },

  load: function(){
    $('#map').empty();
    $('#map').vectorMap(this.getMapParams());

    var model = this.model;

//    if(model.getMapName() !== CONTINENTS_MAP){
//      var map = $('#map').vectorMap('get', 'mapObject');
//      map.setSelectedRegions(model.getFilteredCountriesByMap());
//    }
  },

  loadCountryList: function(){
    var model = this.model;
    model.getCountries(AFRICA_ID).forEach(function(country){
      addToList(country, $("#africaList"));
    });
    model.getCountries(ASIA_ID).forEach(function(country){
      addToList(country, $("#asiaList"));
    });
    model.getCountries(AUSTRALIA_ID).forEach(function(country){
      addToList(country, $("#australiaList"));
    });
    model.getCountries(EUROPE_ID).forEach(function(country){
      addToList(country, $("#europeList"));
    });
    model.getCountries(NAMERICA_ID).forEach(function(country){
      addToList(country, $("#namericaList"));
    });
    model.getCountries(SAMERICA_ID).forEach(function(country){
      addToList(country, $("#samericaList"));
    });
  },

  markCountries: function(){
    var model = this.model;
    model.getVisitedCountries().forEach(function(countryId){
      $('#' + countryId + '.ui-icon-check').toggleClass("ui-icon-check-on");
    });
    model.getWantedCountries().forEach(function(countryId){
      $('#' + countryId + '.ui-icon-heart').toggleClass("ui-icon-heart-on");
    });
  },

  clickVisited: function(countryId){
    var model = this.model;
    $('#' + countryId + '.ui-icon-check').toggleClass("ui-icon-check-on");
    $('#' + countryId + '.ui-icon-heart').removeClass("ui-icon-heart-on");
    model.addVisitedCountry(countryId);
    model.removeWantedCountry(countryId);
  },

  clickWanted: function(countryId){
    var model = this.model;
    $('#' + countryId + '.ui-icon-heart').toggleClass("ui-icon-heart-on");
    $('#' + countryId + '.ui-icon-check').removeClass("ui-icon-check-on");
    model.addWantedCountry(countryId);
    model.removeVisitedCountry(countryId);
  },

  getMapParams: function(){
    var model = this.model;
    var data = model.getDataByMap();
    return {
      map: model.getMapName(),
      regionLabelStyle: {
        initial: {'display': 'none'},
      },
      series: {
        regions: [{
          scale: {
            '1': '#4169E1',
            '2': '#FF69B4'
          },
          attribute: 'fill',
          values: data
        }]
      },
      backgroundColor: '#383f47',
      zoomMax: 40,
      regionsSelectable: true,
      onRegionClick: function(e, code){

      }
    };
  },
}

function addToList(country, container){
  var imgCell = "<div class='ui-block-a'><img src='./img/" + country["code"] + ".png'/></div>"
  var countryCell = "<div class='ui-block-b'>" + country["name"] + "</div>";
  var visistedIcon = "<div class='ui-block-c'><a id=" + country["code"] +" class='ui-shadow ui-btn ui-corner-all ui-icon-check ui-btn-icon-notext ui-btn-inline'>Button</a></div>";
  var wantedIcon = "<div class='ui-block-d'><a id=" + country["code"] +" class='ui-shadow ui-btn ui-corner-all ui-icon-heart ui-btn-icon-notext ui-btn-inline'>Button</a></div>";

  container.append(imgCell);
  container.append(countryCell);
  container.append(visistedIcon);
  container.append(wantedIcon);
}

function addCountryToList(country, indexCode){
  var code = country['key'];
  var regionName = country['value'];
  var imgsrc = '<img src="img/' + code + '.png" alt="' + regionName + '" class="ui-li-icon countryIcon">';
  var link = '<a href="#"</a>';
  var liTag = $('<li id="' + code + '">' + imgsrc +  regionName + '</li>');
  if(indexCode === undefined){
      $("#" + country['continent']).append(liTag);
  }
  else{
    liTag.insertAfter("#" + indexCode);
  }

  $("#visitedCountries").listview('refresh');
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
