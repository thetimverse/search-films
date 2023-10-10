<script>
export default {
    props: ['film'],
    methods: {
      getStars(metascore) {
        if (metascore === "N/A") return "";
        let starsCount = Math.round(metascore / 20);
        return "★".repeat(starsCount) + "☆".repeat(5 - starsCount);
      },
    },
}
</script>

<template>
        <li class="film card" >
            <img class="poster" :src="film.poster" />
            <p class="title">
            {{ film.title }}
            <!-- <span class="rating" v-if="film.metascore <= 20 ">★</span>
            <span class="rating" v-else-if="film.metascore >= 20 && film.metascore <= 40">★★</span>
            <span class="rating" v-else-if="film.metascore >= 40 && film.metascore <= 60">★★★</span>
            <span class="rating" v-else-if="film.metascore >= 60 && film.metascore <= 80">★★★★</span>
            <span class="rating" v-else>★★★★★</span> -->
            <span class="rating">{{ getStars(film.metascore) }}</span>
            </p>
            <dl>
            <dt>Release date</dt><dd>{{ film.released }}</dd>
            <dt>Director</dt><dd>{{ film.director }}</dd>
            <dt>Actors</dt><dd>{{ film.actors }}</dd>
            </dl>
            <p class="plot">
            {{ film.plot }}
            </p>
        </li>
</template>

<style>
</style>