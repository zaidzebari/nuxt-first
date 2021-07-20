// create store 
export const state = () => ({
    posts:{}
})
// getters
export const getters = {
    posts(state) {
        return state.posts;
    }
}
// mutations
export const mutations = {
    SET_POST(state, posts) {
        state.posts = posts;
    }
}
// actions
export const actions = {
    // this method we can use inside vuex store application just by the name we can quest this method was initialized on the server side every time when application bootsup and get ready this method will run before application rendered for the client this can be useful to load post so when application is ready and before to render to user nuxt server init will be initialize 
    async nuxtServerInit({commit}) {
        const res = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts');
        commit('SET_POST', res);
        // this.commit('SET_POST', res); // without the paramter
    }
    // setPosts({commit}, posts) {
    //     commit('SET_POST', posts);
    // }
}