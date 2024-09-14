<template>
    <section class="full-section-height">
        <div class="container" v-if="!loading">
            <SectionHeader :title="book.title"  :description="book.author"/>
            <i class="fa fa-arrow-left fa-2x mb-2" @click="goBackBooks"></i>
            <div class="row mb-4">
                <div class="col-lg-6">
                    <img src="../../template/images/b2.jpg" alt="" class="card-img-top">
                </div>
                <div class="col-lg-6 details-wrapper">
                    <p class="lead description">{{ book.description }}</p>
                    
                    <div class="mb-4">
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Page</strong></div>
                            <div class="col-lg-6">{{book.pageNumber}}</div>
                        </div>
        
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Category</strong></div>
                            <div class="col-lg-6">Fiction</div>
                        </div>
        
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Rating</strong></div>
                            <div class="col-lg-6">{{ book.rating }}</div>
                        </div>
        
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Upload Date</strong></div>
                            <div class="col-lg-6">{{ book.updatedAt }}</div>
                        </div>
                    </div>

                    <div class="comments-section">
                        <h3 class="display-6 mb-4">Comments</h3>

                        <div class="card mb-2">
                            <div class="card-body">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, dolorum.</p>
                                <div class="d-flex justify-content-between">
                                <p class="fw-bold fst-italic mb-0">John Doe</p>
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-thumbs-up"></i>
                                    <p class="ps-2 mb-0"><strong>8</strong></p>
                                </div>
                            </div>

                            </div>
                        </div>                   
                        <div class="card mb-2">
                            <div class="card-body">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, dolorum.</p>
                                <div class="d-flex justify-content-between">
                                <p class="fw-bold fst-italic mb-0">John Doe</p>
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-thumbs-up"></i>
                                    <p class="ps-2 mb-0"><strong>8</strong></p>
                                </div>
                            </div>

                            </div>
                        </div>    
                        <div class="card mb-2">
                            <div class="card-body">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, dolorum.</p>
                                <div class="d-flex justify-content-between">
                                <p class="fw-bold fst-italic mb-0">John Doe</p>
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-thumbs-up"></i>
                                    <p class="ps-2 mb-0"><strong>8</strong></p>
                                </div>
                            </div>

                            </div>
                        </div>    
                        <div class="card mb-2">
                            <div class="card-body">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, dolorum.</p>
                                <div class="d-flex justify-content-between">
                                <p class="fw-bold fst-italic mb-0">John Doe</p>
                                <div class="d-flex align-items-center">
                                    <i class="fa fa-thumbs-up"></i>
                                    <p class="ps-2 mb-0"><strong>8</strong></p>
                                </div>
                            </div>

                            </div>
                        </div>    
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="container" v-else>
            <p>Book loading...</p>
        </div>
    </section>>
</template>

<script>
    import SectionHeader from '@/components/SectionHeader.vue';
    import 'font-awesome/css/font-awesome.css'

    export default {
        name:"BookDetailsView",
        props:{
            title:{
                type:String,
                default : ""
            },
            description:{
                type:String,
                default: ""
            }
        },
        components:{
            SectionHeader,
        },
        data(){
            return{
                book: null,
                loading : true,
            }
        },
        created(){
           this.fetchBook();
        },
        methods:{
            goBackBooks(){
               return this.$router.push({name : "books"})
            },
            async fetchBook(){
                try {
                    const bookId = this.$route.params.id
                    const responseBook = await fetch(`http://localhost:3000/api/v1/books/${bookId}`);
                    const data = await responseBook.json();
                    this.book = data.data;
                    this.loading = false;
                } catch (error) {
                    
                }
            }
        },
    }
</script>

<style scoped>

.details-wrapper{
    max-height: 740px;
    display: flex;
    flex-direction: column;
}

.comments-section{
    flex-grow: 1;
    overflow-y: auto;
}
.description{
    min-height: 150px;
    max-height: 250px;
    overflow-y: auto;
}

</style>