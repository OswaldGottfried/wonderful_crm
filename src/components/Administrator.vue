<template lang="pug">
    tr
        td 
            p {{ name }}
        td
            p {{ login }}
        td
            p {{ password }}
        td 
            p +{{ phone }}
</template>

<script>
export default {
    props: {
        name: String,
        login: String,
        password: String,
        phone: Number
    }
}
</script>