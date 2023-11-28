<script>
import { useSession } from "@/stores/session"
// import { mapState, mapActions } from "pinia";
import UserService from '@/services/UserService.js'


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
    methods: {
        async register () {
            this.error = null;
            try {
                const response = await UserService.register({
                email: this.email,
                password: this.password,
                firstname: 'John',
                lastname: 'Smith'
                })
                // useSession permet de se connecter directement après inscription
                const session = useSession();
                session.login({ user: response.user, token: response.token });
                this.$router.push('/login')
            } catch (error) {
                this.error = error.toString()
            }
        }
    }
}
</script>

<template>
    <div id="login-form">
        <form @submit.prevent="register">
        <h2>Register</h2>
        <hr>

        <label for="email"><b>Email</b></label>
        <input v-model="email" type="text" placeholder="Entrez votre courriel" id="email" name="email" required >

        <label for="psw"><b>Password</b></label>
        <input v-model="password" type="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" required >

        <p><button type="submit">Register</button></p>
        <p>{{ error }}</p>
        </form>

    </div>
    
    <br>
    <RouterLink :to="{name: 'login'}">Log in</RouterLink>

</template>

<style></style>