<template>
  <button @click="greet">Greet</button>
</template>
<script>
export default {
  data() {
    return  {
      name: 'Mark'
    }
  },
  methods: {
    greet: function (event) {
      // 'this' pointe vers l'instance de vue
      this.say('Hi '+ this.name)
    },
    say(message){
      // si une méthode est indépendante de l'instance (pas de référence à 'this')
      // alors il peut être pertinent de l'externaliser dans un module à part
      alert(message + '!')
    }
  }
}
</script>
