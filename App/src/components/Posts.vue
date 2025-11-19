<template>
  <section class="center-main">
    <div v-if="loading" class="loading">Loading posts...</div>
    <div v-if="error" class="error">{{ error }}</div>
    
    <div v-for="post in sortedPosts" :key="post.id" class="post">
      <div class="post-header">
        <div class="author-info">
          <img src="@/assets/profile.png" alt="Avatar" class="avatar">
          <div>
            <div class="author-name">{{ post.author }}</div>
            <span class="post-date">{{ formatDate(post.date) }}</span>
          </div>
        </div>
      </div>

      <img 
        v-if="post.image" 
        :src="post.image" 
        :alt="'Post image by ' + post.author" 
        class="post-image"
      >

      <p class="post-text">{{ post.text }}</p>
      
      <button class="like-btn" @click="likePost(post.id)">
        👍 {{ post.likes }} likes
      </button>
    </div>

    <button class="reset-btn" @click="resetLikes">Reset likes</button>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Posts',
  computed: {
    ...mapState(['loading', 'error']),
    ...mapGetters(['sortedPosts'])
  },
  methods: {
    ...mapActions(['likePost', 'resetLikes']),
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  },
  mounted() {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style scoped>
.center-main {
  min-height: 600px;
  min-width: 200px;
  flex: 1 1 600px;
  background-color: lightgray;
  border-radius: 15px;
}

.post {
  background: white;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #6f8aa762;
  object-fit: cover;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.author-name {
  font-weight: bold;
  font-size: 15px;
  color: black;
}

.post-date {
  font-size: 15px;
  color: gray;
}

.post-image {
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
}

.post-text {
  margin: 10px 0;
}

.like-btn {
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 20px;
}

.like-btn:hover {
  transform: scale(1.3);
}

.reset-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: block;
  margin: 20px auto;
}

.reset-btn:hover {
  background-color: #45a049;
}

.loading, .error {
  text-align: center;
  padding: 20px;
  font-size: 18px;
}

.error {
  color: red;
}
</style>