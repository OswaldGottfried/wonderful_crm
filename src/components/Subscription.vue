<template lang="pug">
    tr
        td 
            p {{ id }}
        td 
            p {{ name }}
        td
            p(v-for="type in types")  {{ type }}
        td
            p(v-for="sub in subs") {{ sub }}
        td 
            p {{ valid }}
</template>

<script>
export default {
    props: {
        id: Number,
        name: String,
        types: Array,
        subs: Array,
        valid: String
    }
}
</script>