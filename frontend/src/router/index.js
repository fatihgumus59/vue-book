import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import BooksView from "@/views/BooksView.vue";
import booksDetailsView from "@/views/BookDetailsView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import DashboardView from "@/views/DashboardView.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/books", component: BooksView, name: "books" },
  { path: "/books/:id", component: booksDetailsView, name: "book-detail" },
  { path: "/login", component: LoginView, name: "login" },
  { path: "/register", component: RegisterView, name: "register" },
  { path: "/dashboard", component: DashboardView, name: "dashboard", meta:{requiresAuth : true} },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass : 'active-link'
});

router.beforeEach((to,from,next)=>{
    const requiredAuth = to.matched.some((url)=> url.meta.requiresAuth);
    const isLoggedIn = localStorage.getItem('user');

    if(requiredAuth && !isLoggedIn){
      next({name : 'login'})
    }else{
      next();
    }
})

export default router;