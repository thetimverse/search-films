<script>
import LoginForm from '@/components/LoginForm.vue'
import SearchFilm from '@/components/SearchFilm.vue';
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";
import { RouterLink, RouterView } from 'vue-router';

export default {
    data() {
        return {
        };
    },
    components: { LoginForm, SearchFilm },
    computed: {
        // bind this.loggedIn to useSession().loggedIn
        ...mapState(useSession, ["loggedIn", "user"])
    },
    methods: {
        ...mapActions(useSession, ["logout"]),
        deconnection(){
            this.logout()
            this.$router.push("login")
        }
    }
}
</script>

<template>

    <div id="header">
        <nav>
            <ul>
                <li><RouterLink :to="{name: 'search'}">Films</RouterLink></li>
                <li><RouterLink :to="{name: 'login'}">Login</RouterLink></li>
            </ul>
        </nav>
    
        <div v-if="!loggedIn"></div>
      
        <div class="user" v-else>
            <p>Hello, {{ user.mail }}</p>
            <a @click="deconnection()">Log out</a>
        </div>
    </div>
</template>

<style scoped>
#header{
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
}

#header .user {
    text-align: end;
}
</style>
