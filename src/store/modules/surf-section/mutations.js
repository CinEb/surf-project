export default {
    SET_TRAVEL:(state) =>{
        let i = 0;
        let sbl = state.surfBeaches.length;
        let sb = state.surfBeaches;
        // let sbt = state.surfBeaches[i].travel;

        while ( i < sbl){
            sb[i].travel.beachName = sb[i].title;
            sb[i].travel.beachDestination = sb[i].location;
            i++;
        }
    },

    SET_RESORTS_RATING:(state) =>{
        let i = 0;
        let sbl = state.surfBeaches.length;
        let vi = state.surfBeaches;

        while (i < sbl){
            if (vi[i].resorts.resortStars === 5){
                vi[i].resorts.resortRating = 'Excellent'
            }
            if (vi[i].resorts.resortStars === 4){
                vi[i].resorts.resortRating = 'Good'
            }
            if (vi[i].resorts.resortStars === 3){
                vi[i].resorts.resortRating = 'Normal'
            }
            if (vi[i].resorts.resortStars === 2){
                vi[i].resorts.resortRating = 'Bad'
            }
            if (vi[i].resorts.resortStars === 1){
                vi[i].resorts.resortRating = 'Very Bad'
            }
            i++;
        }
    },

    SET_COUNT_SLIDES:(state) =>{
        state.surfSection.surfSlider.countSlides = state.surfBeaches.length;
    },

    SET_CURRENT_SLIDE:(state, value) =>{
        state.surfSection.surfSlider.currentSlide = value;
        // console.log(value)
    },

    SET_RESORT_NIGHTS:(state, value) =>{
        let index = value.index;
        state.surfBeaches[index].resorts.nights = value.nights;
    },

    SET_RESORT_GUESTS:(state, value) =>{
        let index = value.index;
        state.surfBeaches[index].resorts.guests = value.guests;
    },

    SET_TRAVEL_PRICE:(state, value) =>{

    }
}