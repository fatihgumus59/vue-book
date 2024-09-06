<template>
    <section class="full-section-height">

        <div class="container">
            <SectionHeader :title="title" description="Anasayfaya Hoşgeldiniz!" />

        </div>
    </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';

export default {
    name: "HomeView",
    components: {
        SectionHeader,
    },
    data() {
        return {
            title: 'Anasayfa',
        }
    }
}
</script>

<style scoped></style>