
Vue.use(Framework7Vue)
Vue.use(VueI18n)

const eventBus = new Vue();

Vue.component('jvectormap', {
  template: `
    	<div class="map"></div>
  `,

  props: ['mapName', 'visited', 'wanted'],

  mounted: function () {
    this.loadMap();
  },

  methods: {
    loadMap: function () {
      $('.map').empty();
      $('.map').vectorMap(this.getMapParams());
    },

    calculateDataSeries: function () {
      var visitedSeries = this.visited.reduce(function (result, item, index, array) {
        result[item] = '1';
        return result;
      }, {});
      var wantedSeries = this.wanted.reduce(function (result, item, index, array) {
        result[item] = '2';
        return result;
      }, {});
      return Object.assign(visitedSeries, wantedSeries)
    },

    getMapParams: function () {
      var outer = this;
      return {
        map: this.mapName,
        regionLabelStyle: {
          initial: { 'display': 'none' }
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
        onRegionClick: function (e, code) {
          e.preventDefault();
          eventBus.$emit('regionClicked', {
            code: code
          });
        }
      }
    }
  },

  watch: {
    mapName: function (newMap, oldMap) {
      this.loadMap();
    },
    visited: function (newList) {
      this.loadMap();
    },
    wanted: function (newList) {
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

  mounted: function () {
    this.visited = JSON.parse(window.localStorage.getItem('visited') || '[]');
    this.wanted = JSON.parse(window.localStorage.getItem('wanted') || '[]');

    eventBus.$on('regionClicked', (data) => {
      this.handleRegionClick(data.code);
    });
  },

  data: {
    currentMap: world,
    visited: [],
    wanted: []
  },

  methods: {

    changeMap: function (map) {
      this.currentMap = map;
    },

    handleRegionClick: function (code) {
      if (this.visited.indexOf(code) != -1) {
        this.wanted.push(code);
        this.visited.splice(this.visited.indexOf(code), 1);
      }
      else if (this.wanted.indexOf(code) != -1) {
        this.wanted.splice(this.wanted.indexOf(code), 1);
      }
      else {
        this.visited.push(code);
      }
    },
  },

  computed: {

    countDisplay: function () {
      var visitedCountries = this.visited;
      var total = this.currentMap.countries.length;
      var currentlyVisited = 0;

      this.currentMap.countries.forEach(function (element) {
        if (visitedCountries.indexOf(element.code) != -1) {
          currentlyVisited++;
        }
      });
      return currentlyVisited + " / " + total;
    }
  },

  watch: {
    visited: function (newList) {
      window.localStorage.setItem('visited', JSON.stringify(newList));
    },
    wanted: function (newList) {
      window.localStorage.setItem('wanted', JSON.stringify(newList));
    }
  }
})



