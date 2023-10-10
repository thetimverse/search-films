<script >
import LoginForm from '@/components/LoginForm.vue'
import HelloWorld from './components/HelloWorld.vue';
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
}
</script>

<template>
  <LoginForm v-if="!loggedIn" />
  
  <SearchFilm v-else />
</template>

<style scoped>

</style>
