<template>
<div class="home">
  <h1>Your Personal Dictionary</h1>

  <!-- Populate the Screen With All the Definitions in the User's Databse -->
  <section class="definition-gallery">
    <div class="def" v-for="item in items" :key="item.id">
      <p>
        {{item.word}}
        {{item.definition}}
      </p>
      <br>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios';
// import Definition from "../components/Definition.vue"

export default {
  name: 'Home',
  // components: { Definition },
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