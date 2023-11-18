const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const IteamIndex = state.carts.findIndex((i) => i.id === action.payload.id)//checking userId and all data Id
            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }


        case "REMOVE_CART":
            const data = state.carts.filter((el) => el.id !== action.payload);//mapping the main data id(total id's) to user dispatched id
            return {
                ...state,
                carts: data
            }


        case "REMOVE_ONE":
            const IteamIndex_dec = state.carts.findIndex((i) => i.id === action.payload.id)

            if (state.carts[IteamIndex_dec].qnty >= 1) { //checking index in carts
                const dltitem = state.carts[IteamIndex_dec].qnty -= 1
                console.log([...state.carts, dltitem]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } 
            else if (state.carts[IteamIndex_dec].qnty === 1)  //NOT MAKING O IN CARTDETAILS PAGE
             {  
                const data = state.carts.filter((el) => el.id !== action.payload);
                return {
                    ...state,
                    carts: data
                }
            }
        default:
            return state
    }
}