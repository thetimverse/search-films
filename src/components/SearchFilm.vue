<template>
    <div id="search-film">
      <form @submit.prevent="searchFilms">
        <label for="search">Rechercher :</label>
        <input id="search" type="text" v-model="query" ref="boutonrecherche">
      </form>

      <h2>Nombre de résultats trouvés pour <b>{{ query }}</b>: {{ filterResults.length }}</h2>
  
      <ul class="films">
        <!-- Liste films -->
        <Film :film="film" v-for="film in filterResults" :key="film.title"></Film>
      </ul>
    </div>
</template>

<script>
import Film from './Film.vue'

  export default {
    mounted() {
      this.$refs.boutonrecherche.focus()
    },
    data(){
      return {
        query: '',
        films: [
        {
                title: 'Titanic',
                released: '19 Dec 1997',
                director: 'James Cameron',
                actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates',
                poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
                plot: '84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.',
                metascore: '75'
            },
            {
                title: 'Blade Runner',
                released: '25 Jun 1982',
                director: 'Ridley Scott',
                actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
                poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
                plot: 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
                metascore: '90'
            },
            {
                title: 'The Shining',
                released: '13 Jun 1980',
                director: 'Stanley Kubrick',
                actors: 'Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers',
                poster: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
                plot: 'A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
                metascore: '63'
            },
            {
                title: 'Jurassic Park',
                released: '11 Jun 1993',
                director: 'Steven Spielberg',
                actors: 'Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough',
                poster: 'https://m.media-amazon.com/images/I/71Bjk6uAcwL._AC_SL1500_@._V1_SX300.jpg',
                plot: 'On the island of Isla Nublar, off Central America\'s Pacific Coast near Costa Rica, a wealthy businessman, John Hammond, and a team of genetic scientists have created a wildlife park of de-extinct dinosaurs. When industrial sabotage leads to a catastrophic shutdown of the park\'s power facilities and security precautions, a small group of visitors, including Hammond\'s grandchildren, struggle to survive and escape the now perilous island.',
                metascore: '68'
            },
        ]
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

    },
    components: { Film }

}
</script>
  