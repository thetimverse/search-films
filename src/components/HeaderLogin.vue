<script>
import LoginForm from '@/components/LoginForm.vue'
import SearchFilm from '@/components/SearchFilm.vue';
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";

export default {
    data() {
        return {
        };
    },
    components: { LoginForm, SearchFilm },
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

  <LoginForm v-if="!loggedIn" />
  
  <div v-else>
        <button @click="logout()">Log out</button>
        <SearchFilm />
    </div>
</template>

<style scoped>

</style>
