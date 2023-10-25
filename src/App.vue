<script >
// import SearchFilm from '@/components/SearchFilm.vue';
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";
import { RouterLink, RouterView } from 'vue-router';

export default {
    data() {
        return {
        };
    },
    // components: { SearchFilm },
    computed: {
        // bind this.loggedIn to useSession().loggedIn
        ...mapState(useSession, ["loggedIn"])
    },
    methods: {
        ...mapActions(useSession, ["logout"])
    }
}
</script>

<template>
    <nav>
        <ul>
            <li><RouterLink :to="{name: 'search'}">Films</RouterLink></li>
            <li><RouterLink :to="{name: 'login'}">Login</RouterLink></li>
        </ul>
    </nav>

    <h1>Letterboxd from Wish</h1>
    <RouterView></RouterView>
    <!-- <SearchFilm></SearchFilm> -->
</template>

<style scoped>

</style>
