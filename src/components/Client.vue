<template lang="pug">
    tr
        td 
            p {{ name }}
        td
            p(v-for="type in types") {{type}}
        td
            p(v-for="subscription in subscriptions") {{ subscription }}
        td 
            p +{{ phone }}
</template>

<script>
export default {
    props: {
        name: String,
        types: Array,
        subscriptions: Array,
        phone: Number
    }
}
</script>