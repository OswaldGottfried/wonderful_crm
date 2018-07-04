<template lang="pug">
    .subscriptions
        table
            thead
                tr
                    th id
                    th Инициалы
                        input.search(placeholder="поиск")
                    th Направление
                    th 
                    th Действителен до
            tbody
                Subscription(v-for="sub in subs" :key="sub.id" v-bind="sub")
</template>

<script>
import Subscription from '../components/Subscription.vue';
export default {
    name: 'Subscriptions',
    data: function () {
        return {
            subs: {
                subscription1: {
                    id: 192,
                    name: "Иванов П.",
                    types: ["Hip-Hop", "Dancehall"],
                    subs: ["4/8", "1/12"],
                    valid: "12 июня 2019"
                },
                subscription2: {
                    id: 193,
                    name: "Васильева Ю.",
                    types: ["Hip-Hop"],
                    subs: ["8/8"],
                    valid: "12 июня 2019"
                },
                subscription3: {
                    id: 194,
                    name: "Петрова М.",
                    types: ["Общий"],
                    subs: ["1/12"],
                    valid: "12 июня 2019"
                },
                subscription4: {
                    id: 195,
                    name: "Данилов И.",
                    types: ["Общий"],
                    subs: ["4/8"],
                    valid: "12 июня 2019"
                },
                subscription5: {
                    id: 196,
                    name: "Данилов И.",
                    types: ["Общий"],
                    subs: ["Безлимит"],
                    valid: "12 июня 2019"
                }
            },
        }
    },
    components: {
        Subscription
    }
}
</script>

<style lang="sass" scoped>
    @import "../style/table.sass"
</style>
