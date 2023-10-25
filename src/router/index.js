import { createRouter, createWebHistory } from 'vue-router'
import HeaderLogin from "@/components/HeaderLogin.vue"
import SearchFilm from "@/components/SearchFilm.vue"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: HeaderLogin
    },
    {
        path: "/search",
        name: "search",
        component: SearchFilm
    },
    {
      path: "/",
      redirect: "/search",
    },
    { 
      path: '/:pathMatch(.*)*', 
      redirect: "/search"
    }    
  ]
});

// router.beforeEach(async (to, from) => {
//   if (
//     // make sure the user is authenticated
//     !isAuthenticated &&
//     // ❗️ Avoid an infinite redirect
//     to.name !== 'login'
//   ) {
//     // redirect the user to the login page
//     return { name: 'login' }
//   }
// })

export default router;
