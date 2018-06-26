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
                li.col-right(v-for="pupil in pupils") {{ pupil }}
        
        .trainer
            h3 {{ trainer }}
            
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            pupils:['Иванов Петя', 'Васильева Юля', 'Петрова Мария', 'Данилов Ильдар', 'Иванов Петя', 'Васильева Юля', 'Петрова Мария', 'Данилов Ильдар']
        }
    },
    props: {
        date: String,
        trainingTitle: String,
        trainer: String
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
        }
    }
}
</script>

<style lang="sass" scoped>
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

</style>

