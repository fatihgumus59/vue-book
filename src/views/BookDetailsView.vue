<template>
    <section>
    <div class="container">
        <SectionHeader title="Kitap Detay"  description="Kitaplar Sayfasına Hoşgeldiniz!"/>
        <div class="row">
            <div class="col-lg-6">
                <img src="../../template/images/b2.jpg" alt="" class="card-img-top">
            </div>
            <div class="col-lg-6 details-wrapper">
                <p class="lead description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur aperiam quam adipisci id, rerum repudiandae est. Voluptates aliquid quasi, dolorem natus accusamus itaque ipsam, asperiores aspernatur harum, amet ratione id aut ex expedita non in tempore provident. Id eos ea minima ipsa delectus impedit accusantium optio. Laudantium, hic eligendi.</p>
                
                <div class="mb-4">
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Page</strong></div>
                        <div class="col-lg-6">278</div>
                    </div>
    
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Category</strong></div>
                        <div class="col-lg-6">Fiction</div>
                    </div>
    
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Rating</strong></div>
                        <div class="col-lg-6">7.8</div>
                    </div>
    
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Upload Date</strong></div>
                        <div class="col-lg-6">19 Jan 2019</div>
                    </div>
                </div>

                <div class="comments-section">
                    <h3 class="display-6 mb-4">Comments</h3>

                    <div class="card mb-2">
                        <div class="card-body">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, dolorum.</p>
                            <div class="flex justify-content-between">
                                <p class="fw-bold fst-italic">John Doe</p>
                                <div class="d-flex align-items-center">
                                    <p>Upvote</p>
                                    <p class="ps-2"><strong>8</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, dolorum.</p>
                            <div class="flex justify-content-between">
                                <p class="fw-bold fst-italic">John Doe</p>
                                <div class="d-flex align-items-center">
                                    <p>Upvote</p>
                                    <p class="ps-2"><strong>8</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, dolorum.</p>
                            <div class="flex justify-content-between">
                                <p class="fw-bold fst-italic">John Doe</p>
                                <div class="d-flex align-items-center">
                                    <p>Upvote</p>
                                    <p class="ps-2"><strong>8</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, dolorum.</p>
                            <div class="flex justify-content-between">
                                <p class="fw-bold fst-italic">John Doe</p>
                                <div class="d-flex align-items-center">
                                    <p>Upvote</p>
                                    <p class="ps-2"><strong>8</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, dolorum.</p>
                            <div class="flex justify-content-between">
                                <p class="fw-bold fst-italic">John Doe</p>
                                <div class="d-flex align-items-center">
                                    <p>Upvote</p>
                                    <p class="ps-2"><strong>8</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, dolorum.</p>
                            <div class="flex justify-content-between">
                                <p class="fw-bold fst-italic">John Doe</p>
                                <div class="d-flex align-items-center">
                                    <p>Upvote</p>
                                    <p class="ps-2"><strong>8</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
                
            </div>
        </div>


    </div>
    </section>>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
    export default {
        name:"BookDetailsView",
        components:{
            SectionHeader,
        }
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