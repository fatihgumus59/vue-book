<template>
    <div class="container">
        <SectionHeader :title="title"  description="Anasayfaya Hoşgeldiniz!"/>
        <BookList :books="books"/>
    </div>
</template>

<script>
    import SectionHeader from '@/components/SectionHeader.vue';
    import BookList from '@/components/BookList.vue';
    import books from '@/db';

    export default {
        name : "HomeView",
        components:{
            SectionHeader,
            BookList
        },
        data(){
            return{
                title :'Anasayfa',
                books : books
            }
        }
    }
</script>

<style scoped>

</style>