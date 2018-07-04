<template lang="pug">
    .administrator
        table
            thead
                tr
                    th Инициалы
                    th Логин
                    th Пароль
                    th Телефон
            tbody
                Administrator(v-for="adm in adms" :key="adm.login" v-bind="adm")
</template>

<script>
import Administrator from '../components/Administrator.vue';
export default {
    name: 'Administrators',
    data: function () {
        return {
            adms: {
                adm1: {
                    name: "Дима Тогулев",
                    login: "klsaehfa78wey124",
                    password: "***********",
                    phone: 70000000000
                },
                adm2: {
                    name: "Катя Господарева",
                    login: "scn820xcn9mane",
                    password: "***********",
                    phone: 70000000000
                },
                adm3: {
                    name: "Дима Тогулев",
                    login: "klsaehfa78wey124",
                    password: "***********",
                    phone: 70000000000
                },
                adm4: {
                    name: "Катя Господарева",
                    login: "scn820xcn9mane",
                    password: "***********",
                    phone: 70000000000
                }
            },
        }
    },
    components: {
        Administrator
    }
}
</script>

<style lang="sass" scoped>
    @import "../style/table.sass"
</style>
