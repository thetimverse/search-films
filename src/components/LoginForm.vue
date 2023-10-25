<script>
import { useSession } from "@/stores/session"
// import { mapState, mapActions } from "pinia";

  export default {
    props: {
        loggedIn: Boolean
    },
    data() {
        return {
            title: 'Log in',
            email: '',
            password: '',
            error: ''
        };
    },
    // computed: {
    //     ...mapState(useSession, ["loggedIn"])
    // },
    methods: {
        submitLogin() {
            const session = useSession()
            const loginError = session.login({ mail: this.email, password: this.password });
            if (loginError.error) {
                this.error = loginError.errorMsg
            }
        },
        getStars(metascore) {
            if (metascore === "N/A")
                return "";
            let score = parseInt(metascore);
            let starsCount = Math.round(score / 20);
            return "★".repeat(starsCount) + "☆".repeat(5 - starsCount);
        }
    }
}
</script>

<template>
    <!-- Formulaire connexion -->
    <!-- <div id="login-form" v-if="!loggedIn || loggedIn === false"> -->
    <div id="login-form">
        <form @submit.prevent="submitLogin">
        <h2>Log in</h2>
        <hr>

        <label for="email"><b>Email</b></label>
        <input v-model="email" type="text" placeholder="Entrez votre courriel" id="email" name="email" required >

        <label for="psw"><b>Password</b></label>
        <input v-model="password" type="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" required >

        <p><button type="submit">Log in</button></p>
        <p>{{ error }}</p>
        </form>
    </div>

    <!-- <div v-else>
        <SearchFilm></SearchFilm> -->
        <!-- <search-film></search-film> notation meilleure pour accessibilité et standards HTML-->
    <!-- </div> -->

</template>

<style></style>