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
    setPosts({commit}, posts) {
        commit('SET_POST', posts);
    }
}