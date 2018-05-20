<template>
    <div class="container">
        <div class="map"></div>
    </div>
</template>
<script>
    import VectorMap from './VectorMap.vue';

    export default {
        created: function() {
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
        }
    }
</script>