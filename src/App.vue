<script >
import Header from '@/components/Header.vue';
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";
import { RouterLink, RouterView } from 'vue-router';

export default {
    data() {
        return {
        };
    },
    components: { Header },
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
    <Header></Header>

    <h1>Letterboxd from Wish</h1>
    <RouterView></RouterView>
</template>

<style scoped>

</style>
