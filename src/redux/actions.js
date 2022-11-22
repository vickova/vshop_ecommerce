export const cartAction = ()=>{
    return{
        type:'CART',
    }
}

export const cartedList = (carted)=>{
    console.log(carted)
    return{
        type:'CARTEDLIST',
        payload:carted
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
// export const increase = (count)=>{
//     return{
//         type:'INCREASE',
//     }
// }
// export const decrease = ()=>{
//     return{
//         type:'DECREASE',
//     }
// }
export const deleted = (filtered, id)=>{
    console.log(filtered)
    return{
        type:'DELETE',
        payload:filtered
    }
}
export const cartActive = (id)=>{
    return{
        type:'BUTTONSTATE',
        payload:id
    }
}