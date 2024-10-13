<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
            <li class="page-item" :class="{'disabled' : currentPage === 1}">
                <a class="page-link" @click="goToPage(currentPage != 1 ? currentPage - 1 : 1)" href="#" tabindex="-1">Önceki</a>
            </li>

            <li class="page-item" :class="{'active' : currentPage === page}" v-for="page in totalPages" :key="page">
                <a class="page-link" @click="goToPage(page)" href="#">{{ page }}</a>
            </li>

            <li class="page-item" :class="{'disabled': currentPage === totalPages}" >
                <a class="page-link" @click="goToPage(currentPage != totalPages ? currentPage + 1 : totalPages)" href="#">Sonraki</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "PaginationWidget",
    emits :['page_next'],
    props:{
        currentPage:{
            type : Number,
            required: true
        },
        totalPages:{
            type:Number,
            required : true,
        }
    },
    methods:{
        goToPage(page){
            this.$emit('page_next',page)
        }
    }
}
</script>

<style scoped></style>