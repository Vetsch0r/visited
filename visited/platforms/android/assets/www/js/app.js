

// Init F7 Vue Plugin
Vue.use(Framework7Vue)


Vue.component('jvectormap', {
	data: {
    
  },
  mounted: function() {
    $('.map').empty();
    $('.map').vectorMap(this.getMapParams());
  },
  methods: {
    getMapParams: function(){
      return {
        map: 'world_mill',
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
        backgroundColor: '#383f47',
        zoomMax: 40,
        regionsSelectable: true,
        onRegionClick: function(e, code){
          alert(code)
        }
      }
    }
  },
	template: `
  	<div class="map"></div>
  `
});

var myCountry = Vue.component('my-country', {
  props: ['myCountry'],
  template: `
    <li>
    <img class="countryIcon" :src="imgSource"/>
      <div class="item-content">
        <div class="item-media"></div>
        <div class="item-inner">
          <div class="item-title">{{ myCountry.name }}</div>
          <div class="item-after"> <span class="badge">5</span></div>
        </div>
      </div>
    </li>
  `,
  computed: {
    imgSource: function () {
      return "./img/" + this.myCountry.code + ".png"
    }
  }
})


new Vue({
  el: '#app',
  framework7: {
    root: "#app",
    routes: [],
    name: 'My App',
    id: 'ch.vetsch.visited'
  },
  methods: {
    getCountries: function(continent){
      return countries[continent].sort(function(countryA, countryB){
        return countryA.name.localeCompare(countryB.name);
      });
    },
  },
  data: {

  },
  components: {
    'my-country': myCountry
  }
  
})


