<template>
<div id="app">
  <div class="header">
    <div class="title">
      <h1>The EPIC Dictionary</h1>
    </div>
  </div>
  <hr>
  <div class="content">
    <router-view />
  </div>
  <hr>
  <div class="footer">
    <router-link to="/">Home</router-link>
    <router-link to="/search">Search</router-link>
    <router-link to="/upload">Upload</router-link>
    <a href="https://github.com/OldZealand03/cs260-creative-project-4" target=_blank>Github</a>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #ffffff;
  color: #1C454F;
}

.title {
  margin-top: 5px;
}

a {
  padding: 5px;
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 40px 60px 10px 80px;
  background: #ffffff;
  font-size: 18px;
}

.footer a {
  color: rgb(0, 0, 0);
  /* text-decoration: none; */
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
