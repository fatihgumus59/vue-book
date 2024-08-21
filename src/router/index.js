import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import BooksView from "@/views/BooksView.vue";
import booksDetailsView from "@/views/BookDetailsView.vue";
import ContactView from "@/views/ContactView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/books", component: BooksView, name: "books" },
  { path: "/books/:id", component: booksDetailsView, name: "book-detail" },
  { path: "/contact", component: ContactView, name: "contact" },
  { path: "/login", component: LoginView, name: "login" },
  { path: "/register", component: RegisterView, name: "register" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass : 'active-link'
});


export default router;