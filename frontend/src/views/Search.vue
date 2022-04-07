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
    <div class="definition-result">
      <Definition :obj="obj" />
      <div class="button">
        <button @click="addToSaved()">Save</button>
      </div>
    </div>
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
import Definition from "../components/Definition.vue";
import axios from "axios";

export default {
  components: { Definition },
  name: "Search",
  data() {
    return {
      searchText: "",
      object: {},
      savedWord: "",
      savedDefinition: "",
      savedTime: "",
    };
  },
  computed: {
    obj() {
      return this.object;
    },
  },
  methods: {
    callAPI() {
      let userInput = this.searchText;
      //   userInput = "hello"
      let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      let call = url + userInput;
      let self = this;

      console.log(call);

      fetch(call)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          console.log("Passing Data");
          self.object = json[0];
          self.savedWord = json[0].word;
          self.savedDefinition = json[0].meanings[0].definitions[0].definition;
          console.log(self.object);
          self.savedTime = self.getTime();
        });
    },
    getTime()
    {
      let current = new Date();
      let cDate = current.getDate() + '-' + (current.getMonth() + 1) + '-' + current.getFullYear();
      let cTime = current.getHours() + ":" + current.getMinutes();
      let dateTime = cDate + '   at   ' + cTime;
      console.log(dateTime);
      return dateTime;
    },
    async addToSaved() {
      console.log();
      try {
        let r = await axios.post("/api/items", {
          word: this.savedWord,
          definition: this.savedDefinition,
          addTime: this.savedTime,
        });
        console.log(r);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
