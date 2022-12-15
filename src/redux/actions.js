export const cartAction = ()=>{
    return{
        type:'CART',
    }
}

export const cartedList = (carted)=>{
    return{
        type:'CARTEDLIST',
        payload:carted
    }
}
export const homeFresh = (items)=>{
    return{
        type:'HOMEFRESH',
        payload:items
    }
}
export const countIncrease = (items)=>{
    return{
        type:'COUNTINCREASE',
        payload:items
    }
}
export const countDecrease = (items)=>{
    return{
        type:'COUNTDECREASE',
        payload:items
    }
}
export const cartedCount = ()=>{
    return{
        type:'CARTEDINCREASE',
    }
}

export const cartedDecrease = ()=>{
    return{
        type:'CARTEDDECREASE',
    }
}

export const deleted = (filtered)=>{
    return{
        type:'DELETE',
        payload:filtered
    }
}