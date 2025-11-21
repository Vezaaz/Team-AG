<template>
  <div>
    <main>
      <aside class="left-main"></aside>
      
      <Posts />
      
      <aside class="right-main"></aside>
    </main>
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

<style>

main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #f2f2f2;
  gap: 20px;
  margin: 0;
}

.left-main, .right-main {
  min-height: 600px;
  min-width: 80px;
  flex: 0 1 200px;
  background-color: lightgray;
  border-radius: 15px;
}

@media (max-width: 600px) {
  main {
    flex-direction: row;
    gap: 10px;
    padding: 5px;
  }

  .left-main, .right-main {
    display: none;
  }
}
</style>