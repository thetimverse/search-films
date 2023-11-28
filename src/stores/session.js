import { defineStore } from "pinia";

export const useSession = defineStore('session', {
  persist: true,
  state: () => {
    return {
      user: null,
      loggedIn: false,
      token: null
    }
  },
  actions: {
    login({user, token }) {
      if (user && token) {
        this.loggedIn = true
        this.token = token
        this.user = {
          mail: user.mail
        }

        return {
          error : false
        }
      } 
      return {
        error: true,
        errorMsg: 'Email or password incorrect'
      }
    },
    logout() {
      this.loggedIn = false
      this.user = null
      this.token = null
    }
  }
})
