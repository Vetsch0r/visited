<template>
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
</template>

<script>
    export default {
        props: ['countryObject'],
        computed: {
            imgSource: function () {
                return "./img/" + this.country.code + ".png"
            }
        }
    }
</script>