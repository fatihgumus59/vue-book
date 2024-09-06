<template>
    <section class="full-section-height">

        <div class="container">
            <SectionHeader title="Kitaplar" description="Kitaplar Sayfasına Hoşgeldiniz!" />
            <BookList :books="paginatedBook" />
            <Pagination :currentPage="currentPage" :totalPages="totalPages" @page_next="updatePage" />

        </div>
    </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import BookList from '@/components/BookList.vue';
import books from '@/db';
import Pagination from '@/components/Pagination.vue';


export default {
    name: "BooksView",
    components: {
        SectionHeader,
        BookList,
        Pagination
    },
    data() {
        return {
            books: books,
            currentPage: 1,
            itemPerPage: 4
        }
    },
    computed: {
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