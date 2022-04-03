<template>
  <div class="search">
    <h1>Dictionary Search Engine</h1>
    <div class="subsearch">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
      <div class="button">
        <button @click="callAPI">Go</button>
      </div>
    </div>
    <p>
      This is where we should display the definition of the word and some boxes to save it to the personal dictionary
    </p>
  </div>
</template>

<style scoped>
.subsearch {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

<script>
// import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      searchText: "",
    };
  },
  computed: {},
  methods: {
    callAPI() {
      let userInput = this.searchText;
      let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      let call = url + userInput;

      console.log(call);

      fetch(call)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          console.log(json);
        });
    },
  },
};
</script>
