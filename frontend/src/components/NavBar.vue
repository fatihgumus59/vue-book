<template>
    <nav class="navbar navbar-expand md custom-nav">
        <div class="container">
            <a class="navbar-brand">Bostorek</a>
            <ul class="navbar nav">
                <li class="nav item">
                <RouterLink :to="{ name : 'home' }"  class="nav-link">Home</RouterLink>
                </li>
                <li class="nav item">
                    <RouterLink :to="{ name : 'books' }"  class="nav-link">Books</RouterLink>
                </li>
                <li class="nav item" v-if="isLoggedIn">
                    <RouterLink :to="{ name : 'dashboard' }"  class="nav-link">Dashboard</RouterLink>
                </li>
                <li class="nav item" v-if="!isLoggedIn">
                    <RouterLink :to="{ name : 'login' }"  class="nav-link">Login</RouterLink>
                </li>
                <li class="nav item" v-if="!isLoggedIn">
                    <RouterLink :to="{ name : 'register' }" class="nav-link">Register</RouterLink>
                </li>
                <li class="nav item" v-if="isLoggedIn">
                    <button class="nav-link" @click="logoutUser">Logout</button>
                </li>

            </ul>
        </div>

    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/authStore';
import { mapState,mapActions } from 'pinia';


export default {
    name: "NavBar",
    computed:{
        ...mapState(useUserStore,['isLoggedIn'])
    },
    methods:{
        ...mapActions(useUserStore,['logout']),
        logoutUser(){
            this.logout()

        }
    }
}
</script>

<style scoped>
 /*css kodlarının sadece bu dizinde geçerli olması için scoped eklendi */
 .custom-nav {
     background-color: var(--primary-color);
     padding: 15px 0;
 }

 .navbar-brand {
     padding: 0;
     margin: 0;
     color: #fff;
     font-size: 24px;
     font-weight: bold;
 }

 .nav-link {
     padding: 10px 25px !important;
     color: #fff;
 }

 .nav-link:hover {
    color: var(--secondary-color)
 }
 .active-link{
    color: var(--secondary-color)
 }
</style>