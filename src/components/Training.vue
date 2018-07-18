<template lang="pug">
  .training
    .date
      h1 {{ getDay }}
      h3 {{ getMonth }}
      h3 {{ getYear }}
    .training-title
      header.grid-content
        h3 {{ getTime }}
        h3 {{ trainingTitle }}
      ul.pupils.grid-content
        li.col-right(v-for="pupil in pupils") 
          p(@click='showRightBar') {{ pupil }}
    .trainer
      h3 {{ trainer }}
    Pupil(v-show="isRightBarVisible" @close="closeRightBar")
</template>

<script>
  import moment from 'moment'
  import Modal from '../components/Modal.vue'
  import Pupil from '../components/Pupil.vue'
  export default {
    components: {
      Modal,
      Pupil
    },
    data () {
      return {
        // showBottomBar: false
        isRightBarVisible: false
      }
    },
    methods: {
      toggleBottomBar () {
        // if (!this.showBottomBar) {
        //   this.showBottomBar = true
        //   }
        this.showBottomBar = !this.showBottomBar
        },
        showRightBar() {
          // this.isRightBarVisible = true;
          this.isRightBarVisible = !this.isRightBarVisible
        },
        closeRightBar() {
          this.isRightBarVisible = false;
        }
      },
    props: {
      date: Date,
      trainingTitle: String,
      trainer: String,
      pupils: Array
    },
    computed: {
      getDay: function () {
        return moment(this.date).format('D');
      },
      getMonth: function () {
        moment.locale('ru');
        return moment(this.date).format('MMMM');
      },
      getYear: function () {
        return moment(this.date).format('YYYY');
      },
      getTime: function () {
        return moment(this.date).format('HH:mm');
      },
      // checkSomeDay: function() {
      //     // let date = this.$store.getters.getDate
      //     // let day = moment(this.date).format('D')
      //     // // eslint-disable-next-line
      //     // console.log(day)
      //     // return day
      // }
    },
    filters: {
      checkDay: function (val, idx, arr) {
        for (var i = 0; i < idx; i++) {
          if (arr[i].name === val.name) {
            return false;
          }
          return true;
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  div
    margin-bottom: 1em
    .training
      display: flex
      justify-content: space-between
      font-size: 18px
      &:not(:last-child)
        margin-bottom: 50px

      .date
        h1 
          font-family: 'Kelson Sans RU'
          font-weight: 700
          font-size: 36px
          margin-bottom: -5px
        h3
          font-family: 'Kelson Sans RU'
          font-weight: 300
          font-size: 18px

      .training-title
        width: 200px
        .grid-content
          display: grid
          grid-template-columns: 25% 75%;

        header
          h3
            margin-bottom: 20px
            &:first-child
              font-family: 'Kelson Sans RU'
              font-weight: 300
        ul.pupils
          font-family: 'Graphik LCG'
          font-weight: 400
          font-size: 16px
          li
            grid-column-start: 2
            margin-top: 10px
            p
              &:hover
                cursor: pointer      
</style>