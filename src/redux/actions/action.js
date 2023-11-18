export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

export const DLT=(id)=>{
    return{
        type:"REMOVE_CART",
        payload:id
    }
}

//Removing each Item
export const REMOVE=(item)=>{
    return{
        type:"REMOVE_ONE",
        payload:item
    }
}