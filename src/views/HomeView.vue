<template>
    <div>
        <SectionHeader :title="title"  description="Anasayfaya Hoşgeldiniz!"/>
    </div>
</template>

<script>
    import SectionHeader from '@/components/SectionHeader.vue';

    export default {
        name : "HomeView",
        components:{
            SectionHeader
        },
        data(){
            return{
                title :'Anasayfa'
            }
        }
    }
</script>

<style scoped>

</style>