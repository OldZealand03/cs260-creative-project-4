<template>
  <div class="search">
    <p>
      This is where we will have the API call and the search <br />
      https://dictionaryapi.dev/ I think this one?? <br />
      https://github.com/public-apis/public-apis#dictionaries Here's the full
      list
    </p>
  </div>
</template>

<style scoped>
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
          console.log(json.articles);
          console.log(json.articles[0].author);
          self.list = json.articles;
        });
    },
  },
};
</script>
