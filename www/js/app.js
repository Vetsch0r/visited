
Vue.use(Framework7Vue)
Vue.use(VueI18n)

Vue.component('jvectormap', {
  template: `
    	<div class="map"></div>
  `,

  props: ['mapName'],
  
  mounted: function() {
    this.loadMap();
    this.visited = JSON.parse( window.localStorage.getItem('visited') || '[]' );
    this.wanted = JSON.parse( window.localStorage.getItem('wanted') || '[]' );
  },
  
  methods: {
    loadMap: function(){
      $('.map').empty();
      $('.map').vectorMap(this.getMapParams());
    },

    handleCountryClick: function(code){
      if(this.visited.indexOf(code) != -1){
        this.wanted.push(code);
        this.visited.splice(this.visited.indexOf(code), 1);
      }
      else if(this.wanted.indexOf(code) != -1){
        this.wanted.splice(this.wanted.indexOf(code), 1);
      }
      else{
        this.visited.push(code);
      }
    },

    calculateDataSeries: function(){
      var visitedSeries = this.visited.reduce(function(result, item, index, array) {
        result[item] = '1';
        return result;
      }, {});
      var wantedSeries = this.wanted.reduce(function(result, item, index, array) {
        result[item] = '2';
        return result;
      }, {});
      return Object.assign(visitedSeries, wantedSeries)
    },

    getMapParams: function(){
      var outer = this;
      return {
        map: this.mapName,
        regionLabelStyle: {
          initial: {'display': 'none'}
        },
        regionStyle: {
          selected: {
            fill: "#333333"
          },
          hover: {
            "fill-opacity": 1.0
          }
        },
        
        series: {
          regions: [{
            scale: {
              '1': "#CCCCCC",
              '2': "#AAAAAA",
            },
            attribute: 'fill',
            values: outer.calculateDataSeries()
          }]
        },

        backgroundColor: '#383f47',
        zoomMax: 40,
        regionsSelectable: true,
        onRegionClick: function(e, code){
          e.preventDefault();
          outer.handleCountryClick(code);
        }
      }
    }
  },
  data: function () {
    return {
      visited: [],
      wanted: []
    }
  },
  computed: {
    dataSeries: function(){
      alert("comp" + this.visited)
      return {
        "DE" : 1,
        "FR" : 2
      }
    }
  },

  watch: {
    mapName: function(newMap, oldMap){
      this.loadMap();
    },
    visited: function(newList){
      window.localStorage.setItem('visited', JSON.stringify(newList));
      this.loadMap();
    },
    wanted: function(newList){
      window.localStorage.setItem('wanted', JSON.stringify(newList));
      this.loadMap();
    }
  }
});

new Vue({
  el: '#app',
  i18n,
  framework7: {
    root: "#app",
    routes: [],
    name: 'My App',
    id: 'ch.vetsch.visited'
  },
  data: {
    currentMap: 'world_mill',
    currentMapData: null,
  },
  methods: {
    changeMap: function(mapData){
      this.currentMapData = mapData;
      this.currentMap = mapData.mapName;
    },
    resetMap: function(){
      this.currentMap = 'world_mill';
    }
  }
})



