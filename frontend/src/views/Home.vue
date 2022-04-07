<template>
<div class="home">
  <h1>Your Personal Dictionary / Study Tool</h1>
  
  <section class="definition-gallery">

    <div v-on:click="isShow = !isShow" class="control">
    Want to study your words? Click here to toggle (show/hide) the definition!
    </div>
    <br>
    <br>

      <div class="word"><strong>Kanye West</strong></div>
      <div v-show="isShow" class ="definition"> A Sensei of inspiration</div>
      <br>

    <div class="def" v-for="item in items" :key="item.id">
      <div class="word"><strong>{{item.word}}</strong></div>
      <div v-show="isShow" class ="definition"> {{item.definition}}</div>
      <br>
    </div>
    

  </section>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      items: [],
      isShow: true
    }
  },
  created() {
    this.getItems();
  },
  computed: {

  },
  methods: {
  async getItems() {
    try {
      let response = await axios.get("/api/items");
      this.items = response.data;
      return true;
    } catch (error) {
      // console.log(error);
    }
  },

  }

}
</script>

<style scoped>
.image h2 {
  font-style: italic;
}

h1 {
  font-size: 25px;
}

.word {
  font-size: 23px;
}

.definition {
  font-size: 20px;
}

.control {
  color: rebeccapurple;
  font-size: 18px;
}

h3 {
  font-weight:bold;
}

p {
  font-size: 20px;
}
/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}


/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>