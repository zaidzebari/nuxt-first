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
    async nuxtServerInit() {
        const res = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts');
        this.commit('SET_POST', res);
    }
    // setPosts({commit}, posts) {
    //     commit('SET_POST', posts);
    // }
}