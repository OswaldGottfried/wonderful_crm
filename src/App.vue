<template lang="pug">
  #app
    header
      .logo
        a(href="#")
          h1 wonderful
          h5 crm
    Navigation
    article.content
      transition(name="component-fade" mode="out-in")
        router-view
</template>


<script>
import Navigation from './pages/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation
  },
  computed: {
    username () {
      // Мы скоро разберём что такое `params`
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style lang="sass">
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;

  a
    text-decoration: none;
    color: inherit

  ol, ul
    list-style: none;

  @font-face
    font-family: Graphik
    font-weight: 300
    src: url('./assets/fonts/Graphik/Graphik-Light.otf')

  @font-face
    font-family: Graphik LCG
    font-weight: 400
    src: url('./assets/fonts/Graphik LCG/GraphikLCG-Regular.otf')
  
  @font-face
    font-family: Graphik LCG
    font-weight: 600
    src: url('./assets/fonts/Graphik LCG/GraphikLCG-Semibold.otf')

  @font-face
    font-family: Kelson Sans RU
    font-weight: 700
    src: url('./assets/fonts/Kelson Sans Bold RU.otf')
 
  @font-face
    font-family: Kelson Sans RU
    font-weight: 400
    src: url('./assets/fonts/Kelson Sans Regular RU.otf')

  @font-face
    font-family: Kelson Sans RU
    font-weight: 300
    src: url('./assets/fonts/Kelson Sans Light RU.otf')

  body
    background-color: #F5F5F5
    color: #2E2A2B

  #app
    font-family: 'Graphik LCG'
    font-size: 16px
    font-weight: 400
    display: grid
    grid-gap: 0.5em
    grid-template-columns: 1fr 20%;
    grid-template-areas: "header header" "content nav"

    header
      grid-area: header
      .logo
        max-width: 8%
        margin: 60px
        h1
          font-family: 'Kelson Sans RU'
          font-weight: 700
          font-size: 24px
          margin-bottom: -4px
        h5
          font-family: 'Graphik'
          font-weight: 300
          font-size: 24px
          font-size: 10px
          color: #2E2A2B
  
    nav
      grid-area: nav
    
    article.content
      grid-area: content
      margin: 40px 10%

    .component-fade-enter-active, .component-fade-leave-active 
      transition: opacity .2s ease

    .component-fade-enter, .component-fade-leave-to
      opacity: 0


  @media screen and (max-width: 1024px)
    #app
      grid-template-areas: "content nav"
      grid-template-columns: 1fr 16%;
      header
        .logo
          display: none

      article.content
        margin: 80px 50px

      nav
        padding-top: 80px
        position: static
        transform: none

</style>