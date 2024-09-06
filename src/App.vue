<template>
    <NavBar />
    <RouterView /> <!-- vue router Kütüphanesi Tanıyor ve router bilgilerini işliyor-->
    <TheFooter />
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
    name: 'App',
    components: {
        NavBar,
        TheFooter
    }

}
</script>

<style>

</style>
