<template>
<div class="home">
  <h1>Your Personal Dictionary</h1>
  <br>
  <section class="definition-gallery">
    <p> Kanye West .. (definition) no you can't get rid of this one </p>
    <div class="def" v-for="item in items" :key="item.id">
      <p>
        {{item.word}}
        {{item.definition}}
        <!-- {{item.date}} -->
        <!-- I wonder if we should add a third factor like a date -->
      </p>
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
      console.log(error);
    }
  },

  }

}
</script>

<style scoped>
.image h2 {
  font-style: italic;
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