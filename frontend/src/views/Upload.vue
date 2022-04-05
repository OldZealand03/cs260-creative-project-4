<template>
  <div class="upload">
    <h1>The Upload Page!</h1>
    <div class="heading">
      <h2>Add Your Own Word!</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="word" placeholder="Word" />
        <input v-model="definition" placeholder="Definition" />
        <p></p>
        <button @click="upload">Save</button>
      </div>
      <div class="uploads" v-if="addItem">
        <h2>{{ addItem.word }}</h2>
        <textarea v-model="definition"></textarea>
      </div>
    </div>
    <div class="heading">
      <h2>Edit/Delete a Definition</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search" />
        <div class="suggestions" v-if="suggestions.length > 0">
          <div
            class="suggestion"
            v-for="s in suggestions"
            :key="s.id"
            @click="selectItem(s)"
          >
            {{ s.word }}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findItem">
        <input v-model="findItem.word" />
        <input v-model="findItem.definition" />
        <p></p>
      </div>
      <div class="actions" v-if="findItem">
        <button @click="deleteItem(findItem)">Delete</button>
        <button @click="editItem(findItem)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Upload",
  data() {
    return {
      word: "",
      // file: null,
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
      definition: "",
    };
  },
  computed: {
    suggestions() {
      let items = this.items.filter((item) =>
        item.word.toLowerCase().startsWith(this.findTitle.toLowerCase())
      );
      return items.sort((a, b) => a.word > b.word);
    },
  },
  created() {
    this.getItems();
  },
  methods: {
    // fileChanged(event) {
    //   this.file = event.target.files[0];
    // }
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
      this.findDescription = "";
    },
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          word: this.findItem.word,
          definition: this.findItem.definition,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async upload() {
      try {
        let r = await axios.post("/api/items", {
          word: this.word,
          definition: this.definition,
        });
        console.log(r);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center;
}

/* Form */
input,
textarea,
select,
button {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5bdeff;
  color: #fff;
}
</style>