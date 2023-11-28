<template>
    <div id="search-film">
      <form @submit.prevent="searchFilms">
        <label for="search">Search:</label>
        <input id="search" type="text" v-model="query" ref="boutonrecherche">
      </form>

      <h2>Results for <b>{{ query }}</b>: {{ numberResults }}</h2>
  
      <ul class="films">
        <!-- Liste films -->
        <FilmCard :film="film" v-for="film in this.films" :key="film.title"></FilmCard>
      </ul>
    </div>
</template>

<script>
import FilmCard from './FilmCard.vue'
import FilmService from '../services/FilmService'

  export default {
    mounted() {
      this.$refs.boutonrecherche.focus()
    },
    data(){
      return {
        query: '',
        films: []
      }
    },
    computed: {
      numberResults () {
        return this.films.length
      },
      filterResults () {
        if (this.query === '') return this.films;

        return this.films.filter((film) => {
            return film.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1 || film.plot.toLowerCase().indexOf(this.query.toLowerCase()) > -1
        })
      }
    },
    watch: {
      async query() {
        if(this.query.length > 3) {
          this.films = await FilmService.search(this.query)
        }
      }
    },
    methods: {
      async searchFilms () {
        if(this.query.length > 3) {
          this.films = await FilmService.search(this.query)
        }
      }
    },
    components: { FilmCard }

}
</script>
  