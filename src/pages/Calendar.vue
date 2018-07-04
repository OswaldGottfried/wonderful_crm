<template lang="pug">
    .calendar
        // Training(v-for="date in dates" v-bind="date")
</template>

<script>
import Training from '../components/Training.vue'
import { mapState,  } from 'vuex'
export default {
    name: 'Calendar',
    data: function () {
        return {
            dates: {
                date1: {
                    date: new Date(2018,3,10,10),
                    trainingTitle: "Hip-Hop",
                    trainer: "Лена Шабанова",
                    pupils:['Иванов Петя', 'Васильева Юля', 'Петрова Мария', 'Данилов Ильдар', 'Иванов Петя', 'Васильева Юля', 'Петрова Мария', 'Данилов Ильдар']
                },
                date2: {
                    date: new Date(2018,3,10,17),
                    trainingTitle: "Dancehall",
                    trainer: "Лена Шабанова",
                    pupils:['Иванов Петя', 'Васильева Юля', 'Петрова Мария', 'Данилов Ильдар', 'Иванов Петя', 'Васильева Юля', 'Петрова Мария', 'Данилов Ильдар']
                },
                date3: {
                    date: new Date(2018,3,11,16),
                    trainingTitle: "Hip-Hop",
                    trainer: "Лена Шабанова",
                    pupils:['Иванов Петя', 'Васильева Юля', 'Петрова Мария', 'Данилов Ильдар', 'Иванов Петя', 'Васильева Юля', 'Петрова Мария', 'Данилов Ильдар']
                }
            }
        }
    },
    components: {
        Training
    },
    computed: mapState({
        calendar: state => state.calendar.all
        }),
        
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
    }
}
</script>