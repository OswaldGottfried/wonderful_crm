<template lang="pug">
    tr
        td {{ name }}
</template>

<script>
export default {
    // data() {
    //     return {
    //         types: [],
    //         subscriptions: []
    //     }
    // },
    props: {
        name: String,
        types: Array,
        subscriptions: Array,
        phone: Number
    }
}
</script>

