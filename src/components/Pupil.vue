<template lang="pug">
  transition(name="slide-fade")
    .pupil#modal
      div#close(@click="close()")
      .container
        div
          h1 О клиенте
        div
          h3 Васильева Юля Владимировна
          h3 +7 000 000 00 00
          .training
          p Первая тренировка
          p 19 октября 2017
        div
          h2 Абонементы
          .training
          h3 Dancehall
          p 6/8 до 12.06.2018
          h3 Wacking
          p 3/12 до 2.07.2018
        div
          p Добавить абонемент
        div
          h2 Комментарий
          p Пометка о клиенте...
</template>


<script>
  export default {
    name: 'pupil',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  }
</script>

<style lang="sass">
  .pupil
    position: fixed
    top: 0
    right: 0
    z-index: 1
    width: 100%
    height: 100%
    display: flex
    flex-flow: row nowrap
    transition: opacity .3s ease
    #close
      height: 100%
      flex-grow: 10
    .container
      height: 100%
      flex-grow: 1
      float: right
      background-color: #F5F5F5
      border-left: 1px solid rgba(55, 56, 60, 0.2)
      padding-left: 30px
  .slide-fade-enter-active, .slide-fade-leave-active 
    transition: all .3s ease
  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(100%);
    // opacity: 0;
</style>