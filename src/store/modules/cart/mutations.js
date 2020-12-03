export default {
    SET_CART:(state, val) =>{
        let cartNum = val.index;
        let cartName = val.name;

        if(cartName === 'travel'){
            // console.log(cartName + 'travel');
            if(state.cart.travel.length){
                let isProductExist = false;
                state.cart.travel.map(function (item){
                    if(item.index === cartNum){
                        isProductExist = true;
                        item.quantity++;
                        // console.log('quantity++')
                    }
                });
                if(!isProductExist){
                    state.cart.travel.push(val);
                    // console.log('!isProductExist')
                }
            } else {
                state.cart.travel.push(val);
                // console.log('pushVal')
            }
        }

        if(cartName === 'sleep'){
            // console.log(val);
            if(state.cart.sleep.length){
                let isProductExist = false;
                state.cart.sleep.map(function (item){
                    if(item.index === cartNum){
                        isProductExist = true;
                        item.quantity++;
                    }
                });
                if(!isProductExist){
                    state.cart.sleep.push(val);
                }
            } else {
                state.cart.sleep.push(val);
            }
        }

        if(cartName === 'surfBoards') {
            if (state.cart.surfBoards.length) {
                let isProductExist = false;
                state.cart.surfBoards.map(function (item) {
                    if (item.index === cartNum) {
                        isProductExist = true;
                        item.quantity++;
                    }
                });
                if (!isProductExist) {
                    state.cart.surfBoards.push(val);
                }
            } else {
                state.cart.surfBoards.push(val)
            }
        }

    },

    DELETE_FROM_CART:(state, {item, index}) =>{
        if(item.name === 'travel'){
            state.cart.travel.splice(index, 1);
        }
        if(item.name === 'sleep'){
            state.cart.sleep.splice(index, 1);
        }
        if(item.name === 'surfBoards'){
            state.cart.surfBoards.splice(index, 1);
        }

    }
}