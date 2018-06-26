<template lang="pug">
    .clientBase
        table
            thead
                th Инициалы
                th Направления
                th Абонементы
                th Телефон
            tbody
                Client(name="Иванов Петя")

</template>


<script>
import Client from '../components/Client.vue';
export default {
    name: 'ClientBase',
    data: function () {
       return {
        //    client: [name, types, subscriptions, phone]
            //    name: 'Иванов Петя', 
            //    types: ['Hip-Hop', 'Dancehall'],
            //    subscriptions: ['4/8', '1/12'], 
            //    phone: 70000000000
       } 
    },
    
    components: {
        Client
    }
}
</script>

<style lang="sass" scoped>
    
</style>
