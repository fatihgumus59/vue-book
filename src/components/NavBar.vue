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
                <li class="nav item">
                    <RouterLink :to="{ name : 'contact' }"  class="nav-link">Contact Us</RouterLink>
                </li>
                <li class="nav item">
                    <RouterLink :to="{ name : 'login' }"  class="nav-link">Login</RouterLink>
                </li>
                <li class="nav item">
                    <RouterLink :to="{ name : 'register' }" class="nav-link">Register</RouterLink>
                </li>

            </ul>
        </div>

    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "NavBar",
}
</script>

<style scoped>
 /*css kodlarının sadece bu dizinde geçerli olması için scoped eklendi */
 .custom-nav {
     background-color: #063457;
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
    color: #44b89d;
 }
 .active-link{
    color: #44b89d;
 }
</style>