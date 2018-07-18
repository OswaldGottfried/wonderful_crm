<template lang="pug">
    .clientBase
        table
            thead
                tr
                    th Инициалы
                        input.search(placeholder="поиск")
                    th Направления
                    th Абонементы
                    th Телефон
            tbody
                Client(v-for="client in clients" v-bind="client" :key="client.id")
</template>

<script>
import Client from '../components/Client.vue';
export default {
    name: 'ClientBase',
    data: function () {
        return {
            clients: {
                client1: {
                    name: "Иванов Петя",
                    types: ['Hip-Hop', 'Dancehall'],
                    subscriptions: ['4/8', '1/12'],
                    phone: 70000000000
                },
                client2: {
                    name: "Васильева Юля",
                    types: ['Hip-Hop'],
                    subscriptions: ['4/8'],
                    phone: 70000000000
                },
                client3: {
                    name: "Петрова Мария",
                    types: ['Hip-Hop'],
                    subscriptions: ['4/8'],
                    phone: 70000000000
                },
                client4: {
                    name: "Данилов Ильдар",
                    types: ['Hip-Hop'],
                    subscriptions: ['4/8'],
                    phone: 70000000000
                },
                client5: {
                    name: "Иванов Петя",
                    types: ['Hip-Hop'],
                    subscriptions: ['4/8'],
                    phone: 70000000000
                },
                client6: {
                    name: "Васильева Юля",
                    types: ['Hip-Hop'],
                    subscriptions: ['4/8'],
                    phone: 70000000000
                },
                client7: {
                    name: "Петрова Мария",
                    types: ['Hip-Hop'],
                    subscriptions: ['4/8'],
                    phone: 70000000000
                },
                client8: {
                    name: "Данилов Ильдар",
                    types: ['Hip-Hop'],
                    subscriptions: ['4/8'],
                    phone: 70000000000
                },
            },
        }
    },
    components: {
        Client
    }
}
</script>

<style lang="sass" scoped>
    @import "../style/table.sass"
</style>
