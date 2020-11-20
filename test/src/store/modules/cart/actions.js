export default {
    GET_CART({commit}, val){
        commit('SET_CART', val);
        // console.log(val)
    },
    GET_DELETE_FROM_CART({commit}, {item, index}){
        commit('DELETE_FROM_CART', {item, index});
    }
}