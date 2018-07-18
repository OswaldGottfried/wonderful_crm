<template lang="pug">
  .calendar
    div(v-for="training in trainings")
      Training(v-bind="training")
</template>

<script>
  import Training from '../components/Training.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'Calendar',
    components: {
      Training,
    },
    computed: {
      ...mapState({
        trainings: state => state.calendar.trainings
      }),
    },
      
      
      // username () {
      // // Мы скоро разберём что такое `params`
      // return this.$route.params.username

    methods: {
      goBack () {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    },
    created() {
      this.$store.dispatch('getAllTrainings')

      // this.$store.replaceState('getAllTrainings')
      
    }
  }
</script>
