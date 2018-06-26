<template lang="pug">
    .calendar
        Training(date=new Date(2018,03,10,10) training-title="Hip-Hop" trainer="Лена Шабанова")
        Training(date=new Date(2018,03,10,17) training-title="Dancehall" trainer="Катя Господарева")
        Training(date=new Date(2018,03,11,16) training-title="Hip-Hop" trainer="Лена Шабанова")
</template>


<script>
import Training from '../components/Training.vue'
export default {
    name: 'Calendar',
    components: {
        Training
    },
    computed: {
        username () {
        // Мы скоро разберём что такое `params`
        return this.$route.params.username
        }
    },
    methods: {
        goBack () {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}
</script>

<style lang="sass" scoped>
    .calendar
        margin: 80px 245px
</style>
