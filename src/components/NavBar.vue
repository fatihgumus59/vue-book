<template>
    <nav class="navbar navbar-expand md custom-nav">
        <div class="container">
            <a href="#" class="navbar-brand">Bostorek</a>
            <ul class="navbar nav">
                <li class="nav item">
                    <a href="/" class="nav-link">Home</a>
                </li>
                <li class="nav item">
                    <a href="/books" class="nav-link">Books</a>
                </li>
                <li class="nav item">
                    <a href="/contact" class="nav-link">Contact Us</a>
                </li>
                <li class="nav item">
                    <a href="/login" class="nav-link">Login</a>
                </li>
                <li class="nav item">
                    <a href="/register" class="nav-link">Register</a>
                </li>

            </ul>
        </div>

    </nav>
</template>

<script>
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
     padding: 10px 25px;
     color: #fff;
 }
</style>