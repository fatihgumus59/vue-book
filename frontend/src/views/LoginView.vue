<template>
    <section class="full-section-height">
      <div class="container">
       <form class="mt-5" autocomplete="off" @submit.prevent="submitForm">
   
             <div class="row justify-content-center">
               <!-- Email Field (Medium and Larger Screens) -->
               <div class="col-md-6 col-8 mb-3">
                 <label for="email" class="form-label">Email</label>
                 <input type="email" class="form-control" id="email" name="email" v-model.trim="this.formData.email" required>
               </div>
             </div>
   
             <!-- Password Field -->
             <div class="row justify-content-center">
               <div class="col-md-6 col-8 mb-3">
                 <label for="password" class="form-label">Password</label>
                 <input type="password" class="form-control" id="password" name="password" v-model="this.formData.password" required>
               </div>
             </div>
   
   
   
             <!-- Submit Button -->
             <div class="row justify-content-center">
               <div class="col-md-6 col-8 mb-3">
                 <button type="submit" class="btn btn-primary w-100">Login</button>
               </div>
             </div>
           </form>
      </div>
    </section>
  </template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';

export default {
    name: "LoginView",
    components: {
        SectionHeader
    },
    data() {
    return {
      formData: {
        email: "",
        password: "",
      }
    }
  },
  methods: {
    submitForm(event) {
      console.log("login form gönderildi: ", this.formData);
    }
  }
}
</script>

<style scoped></style>