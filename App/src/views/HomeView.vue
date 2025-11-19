<template>
  <div>
    <main>
      <aside class="left-main"></aside>
      
      <Posts />
      
      <aside class="right-main"></aside>
    </main>

    <footer id="footer-box">
      <p>Footer component</p>
    </footer>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'

export default {
  name: 'HomeView',
  components: {
    Posts
  }
}
</script>

<style scoped>
main {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: #f2f2f2;
  gap: 20px;
}

.left-main, .right-main {
  min-height: 600px;
  min-width: 80px;
  flex: 0 1 200px;
  background-color: lightgray;
  border-radius: 15px;
}

#footer-box {
  text-align: center;
  background-color: lightgray;
  min-height: 18vh;
  border-radius: 15px;
}

@media (max-width: 600px) {
  main {
    flex-direction: row;
    gap: 10px;
    padding: 5px;
  }

  .left-main, .right-main {
    flex: 1 1 50px;
    min-width: 40px;
  }
}
</style>