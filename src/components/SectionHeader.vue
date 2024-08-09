<template>
    <div class="text-center mb-5 mt-3">
        <h1 class="display-4 font-weight-bolder">{{ title }}</h1>
        <p class="lead">{{ description }}</p>

    </div>
</template>

<script>
    export default {
        name:"SectionHeader",
        props: ['title','description']
    }
</script>

<style  scoped>

</style>