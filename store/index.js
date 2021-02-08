const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
    return {
        auth: null
    }
}
export const mutations = {
    setAuth(state, auth) {
        state.auth = auth
    }
}
export const actions = {
    nuxtServerInit({
        commit
    }, {
        req
    }) {
        let auth = null
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                auth = JSON.parse(parsed.auth)
            } catch (err) {
                // No valid cookie found
            }
        }
        commit('setAuth', auth)
    }
}
export default {
  state: () => ({
    posts: [],
    selectedPost: {}
  }),
  mutations: {
    updatePosts(state, posts){
      state.posts = posts;
    },
    updateSelectedPost(state, post){
      state.selectedPost = post;
    }
  },
  actions: {
    addPost({state, commit}, payload){
      return this.$axios.$post(`/posts`, payload).then((post) => {
        commit('updatePosts', [...state.posts, post]);
      })
    },
    editPost({state, commit}, payload){
      return this.$axios.$put(`/posts/${payload.id}`, payload).then((post) => {
        commit('updatePosts', state.posts.map( post => post.id == payload.id ? payload : post));
      })
    },
    deletePost({state, commit}, postId){
      return this.$axios.$delete(`/posts/${postId}`).then(() => {
        commit('updatePosts', state.posts.filter( post => post.id != postId))
      })
    },
    getPost({state}, postId){
      const post = state.posts.find( item => item.id == postId);
      return post ? Promise.resolve(post) : this.$axios.$get(`/posts/${postId}`)
    }
  }
}
