import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue"; // Vista de la lista de posts
import PostDetail from "../views/PostDetail.vue"; // Vista de detalles del post
import FetchPost from "../views/FetchPost.vue"; // Vista de detalles del api
import UserDetail from "../views/UserDetail.vue"; // Vista de detalles del api

const routes = [
  {
    path: "/",
    redirect: "/posts", // Redirige la ruta raíz a '/posts'
  },
  {
    path: "/posts",
    name: "PostList",
    component: PostList,
  },

  

  {
    path: "/fetch",
    name: "FetchPost",
    component: FetchPost,
  },
  {
    path: "/user/:id", // La parte ":id" es un parámetro dinámico para el ID del usuario
    name: "UserDetail",
    component: UserDetail, // El componente que mostrará los detalles del usuario
    props: true, // Pasa el parámetro como prop
  },






  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
