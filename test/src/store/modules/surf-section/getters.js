export default {
    SURF_SECTION(state){
      return state.surfSection;
    },
    SURF_BEACHES(state){
        return state.surfBeaches;
    },
    SURF_TRAVEL(state){
        return state.surfBeaches.travel;
    },
    SURF_SLIDER(state){
        return state.surfSection.surfSlider;
    }
}