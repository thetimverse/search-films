import { defineStore } from "pinia";

export const useSession = defineStore('session', {
  persist: true,
  state: () => {
    return {
      user: null,
      loggedIn: false
    }
  },
  actions: {
    login( user ) {
      if (user.mail === 'test@test.com' && user.password === 'test1234') {
        this.loggedIn = true
        this.user = user
      }
    }
  }
})
