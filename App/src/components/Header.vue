<template>
  <header class="header">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <span>|</span>
      <router-link to="/signup" exact>Signup</router-link>
    </nav>
  </header>
</template>

<style>
.header {
  width: 95%;
  max-width: 2000px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: lightgray;
}


nav a {
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;

  color: rgba(97, 106, 122, 1);
  transition: color 0.2s ease;
}


nav a:hover {
  color: rgba(97, 120, 154, 1);
}

.router-link-exact-active {
  color: rgb(18, 75, 162) !important;
}

nav span {
  display: inline-block;
  margin: 0 10px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(18, 75, 162)
}

</style>