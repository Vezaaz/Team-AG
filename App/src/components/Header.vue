<template>
  <header>
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/addpost">addPost</router-link></li>
    </ul>

    <div class="dropdown" @click="toggleDropdown">
      <a class="picture">
        <img src="@/assets/profile.png" alt="Profile picture" />
      </a>

      <div class="dropdown-content" v-if="isOpen">
        <a>John Doe</a>
        <a>john.doe@ut.ee</a>
        <router-link to="/login">logout</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return { isOpen: false };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
header {
    width: 100%;
    max-width: 100vw;           
    
    background-color: lightgray;
    display: flex;
    flex-wrap: wrap;    
    align-items: center;
    justify-content: space-between;
    
    border-radius: 1rem;
    padding: 1vw 2vw;
    box-sizing: border-box;    
}

.nav {
    display: flex;
    flex-wrap: wrap;       
    gap: 1vw;
    margin: 0;
    padding: 0;
    flex: 1;              
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.picture {
    margin-left: auto;      
}

.picture img {
    width: clamp(50px, 9vw, 90px); 
    height: clamp(50px, 9vw, 90px);
    border-radius: 50%;
    background-color: #6f8aa762;
    object-fit: cover;
    border: 1px solid gray;
    box-shadow: 1px 1px 3px rgb(53, 52, 52);
}

.nav a {
    text-decoration: none;
    color: white;
    background-color: rgb(18, 75, 162);
    border: 1px solid black;
    border-radius: 0.5rem;

    font-size: clamp(14px, 2.5vw, 24px); 
    padding: clamp(6px, 1vw, 12px) clamp(10px, 2vw, 20px);
    box-shadow: 1px 1px 2px rgb(53, 52, 52);
    
    transition: background-color 0.3s ease;
}

.nav a:hover {
    background-color: rgb(8, 49, 112);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.dropdown-content {
  position: absolute;
  right: 0;
  top: 100%;
  background-color: white;
  min-width: 150px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
}

.dropdown-content a {
  color: black;
  padding: 10px 14px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}
</style>