import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
    loading: false,
    user: null
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    },
    allPosts: (state) => state.posts,
    sortedPosts: (state) => {
      return [...state.posts].sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      commit('SET_LOADING', true)
      try {
        // Import posts from JSON file
        const postsData = await import('@/assets/posts.json')
        commit('SET_POSTS', postsData.posts)
      } catch (error) {
        console.error('Error loading posts:', error)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async likePost({ commit }, postId) {
      commit('INCREMENT_LIKES', postId)
    },
    async resetLikes({ commit }) {
      commit('RESET_LIKES')
    }
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    INCREMENT_LIKES(state, postId) {
      const post = state.posts.find(p => p.id === postId)
      if (post) {
        post.likes++
      }
    },
    RESET_LIKES(state) {
      state.posts.forEach(post => {
        post.likes = 0 
      })
    }
  }
})