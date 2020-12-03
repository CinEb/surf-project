export default {
    GET_TRAVEL({commit}){
       commit('SET_TRAVEL');
    },
    GET_RESORTS_RATING({commit}){
        commit('SET_RESORTS_RATING')
    },
    GET_COUNT_SLIDES({commit}){
        commit('SET_COUNT_SLIDES')
    },
    GET_CURRENT_SLIDE({commit}, value) {
        commit('SET_CURRENT_SLIDE', value)
    },
    GET_RESORT_NIGHTS({commit}, value){
        commit('SET_RESORT_NIGHTS', value)
    },
    GET_RESORT_GUESTS({commit}, value){
        commit('SET_RESORT_GUESTS', value)
    }
}