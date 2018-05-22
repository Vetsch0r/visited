Vue.use(VueI18n)

const messages = {
  en: {
    world: 'World',
    africa: 'Africa',
    asia: 'Asia',
    oceania: 'Oceania',
    europe: 'Europe',
    south_america: 'South America',
    north_america: 'North America'
  },
  de: {
    world: 'Welt',
    africa: 'Afrika',
    asia: 'Asien',
    oceania: 'Ozeanien',
    europe: 'Europa',
    south_america: 'Südamerika',
    north_america: 'Nordamerika'
  }
}

const i18n = new VueI18n({
  locale: 'de', // set locale
  messages // set locale messages
})

