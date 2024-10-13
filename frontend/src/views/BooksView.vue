<template>
    <section class="full-section-height">

        <div class="container">
            <SectionHeader title="Kitaplar" description="Kitaplar Sayfasına Hoşgeldiniz!" />
            <BookList :books="paginatedBook" />
            <PaginationWidget :currentPage="currentPage" :totalPages="totalPages" @page_next="updatePage" />

        </div>
    </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import BookList from '@/components/BookList.vue';
import PaginationWidget from '@/components/widgets/PaginationWidget.vue';
import { useBookStore } from '@/stores/bookStore';
import { mapState } from 'pinia';


export default {
    name: "BooksView",
    components: {
        SectionHeader,
        BookList,
        PaginationWidget
    },
    data() {
        return {
            currentPage: 1,
            itemPerPage: 4
        }
    },
    computed: {
        ...mapState(useBookStore,['books']),
        totalPages() {
            return Math.ceil(this.books.length / this.itemPerPage)
        },
        paginatedBook() {
            const startIndex = (this.currentPage - 1) * (this.itemPerPage)
            const endIndex = startIndex + this.itemPerPage
            return this.books.slice(startIndex, endIndex)
        }
    },
    methods: {
        updatePage(page) {
            this.currentPage = page
        }
    }
}
</script>

<style scoped></style>