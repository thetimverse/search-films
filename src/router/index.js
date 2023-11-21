import { createRouter, createWebHistory } from 'vue-router'
// import Header from "@/components/Header.vue"
import LoginForm from "@/components/LoginForm.vue"
import RegisterForm from "@/components/RegisterForm.vue"
import SearchFilm from "@/components/SearchFilm.vue"
import { useSession } from '../stores/session';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginForm
    },
    {
      path: "/register",
      name: "register",
      component: RegisterForm
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

router.beforeEach(async (to, from) => {
  const session = useSession()
  if (
    // make sure the user is authenticated
    !session.loggedIn &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'login' &&
    to.name !== 'register'
  ) {
    // redirect the user to the login page
    return { name: 'login' }
  } else if (to.name === "login" && session.loggedIn) {
    // redirect the user to the search page if already logged in
    return { name: 'search' }
  }
})

export default router;
