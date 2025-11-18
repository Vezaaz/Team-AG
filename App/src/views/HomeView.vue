<template>
  <div>
    <main>
      <aside class="left-main"></aside>

      <section class="center-main">
        <div v-if="loading" class="loading">Loading posts...</div>

        <div v-if="error" class="error">{{ error }}</div>
        
        <div v-for="post in posts" :key="post.id" class="post">
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

      <aside class="right-main"></aside>
    </main>

    <footer id="footer-box">
      <p>Footer component</p>
    </footer>
  </div>
</template>

<script>

export default {
  data() {
    return {
      posts: [],
      loading: false,
      error: null
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },

    likePost(postId) {
      const post = this.posts.find(p => p.id === postId);
      if (post) {
        post.likes++;
      }
    },

    resetLikes() {
      this.posts.forEach(post => {
        post.likes = 0;
      });
    },

    async fetchPosts() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await fetch('/src/assets/posts.json');
 
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        this.posts = data.posts;

      } catch (err) {
        this.error = 'Error loading posts: ' + err.message;
        console.error('Error fetching posts:', err);
  
        this.posts = this.getFallbackPosts();
      } finally {
        this.loading = false;
      }
    },

    getFallbackPosts() {
      return [
      ];
    }
  },

  mounted() {
    this.fetchPosts();
  }
};
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

.center-main {
    min-height: 600px;
    min-width: 200px;
    flex: 1 1 600px;
    background-color: lightgray;
    border-radius: 15px;
}

#footer-box{                               /* ID selector */    
    text-align: center;
    background-color: lightgray;
    min-height: 18vh;
    border-radius: 15px;
}

.post {                                    /* Class selector */
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

div span {                                  /*Descendant selector*/   
    font-size: 15px;
    color: gray;
}

.post-image {
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
}

.post p {                              
    margin: 10px 0;
}

.post > button {                             /*Child selector*/
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.like-btn:hover {                            /* Pseudo-class */
    transform: scale(1.3);
}


.post-text + .like-btn {                     /*Adjacent sibling selector*/
    font-size: 20px;
}


img ~ p {                                    /*General sibling selector*/
    font-weight: bold;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown img {
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  background-color: white;
  min-width: 150px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
  border-radius: 8px;
  overflow: hidden;
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

.dropdown.show .dropdown-content {
  display: block;
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

    .center-main {
        flex: 3 1 150px;
        min-width: 200px;
    }

    .author-name {
        font-size: 9px;
    }

    div span {
        font-size: 9px; 
    }

    .post p {
        font-size: 13px;
    }

    .post-text + .like-btn {                     /*Adjacent sibling selector*/
        font-size: 12px;
    }

    .post-image {
        width: 100%;
        max-height: 180px;
        object-fit: cover;
    }

    .avatar {
        width: 35px;
        height: 35px;
    }
}
</style>