import { home } from "../utils";
const initState = {
    cartState:false,
    cartList:[],
    cartCount:0,
    home:home,
    totalCart:null
}
// Use onClick
const reducer = (state=initState, action)=>{
    switch(action.type){
        case 'CART':
            return{
                ...state, 
                cartState:!state.cartState
            }
        case 'CARTEDLIST':
            return{
                ...state,
                cartList:[...state.cartList, action.payload]
            }
            case 'HOMEFRESH':
                return{
                    ...state,
                    home: [...home.map((item)=>{
                        if(item.id === action.payload.id){
                            item.active = true
                            return{
                                ...item
                            }
                        }
                        return {...item}
                    })],
                }
                case 'COUNTINCREASE':
                return{
                    ...state,
                    home: [...state.home.map((item)=>{
                        if(item.id === action.payload.id){
                            item.count = item.count + 1
                            return{
                                ...item
                            }
                        }
                        return {...item}
                    })],
                    cartList: [...state.cartList.map((item)=>{
                        if(item.id === action.payload.id){
                            item.count = item.count + 1
                            return{
                                ...item
                            }
                        }
                        return {...item}
                    })],
                }

                case 'COUNTDECREASE':
                return{
                    ...state,
                    home: [...state.home.map((item)=>{
                        if(item.id === action.payload.id){
                            if(item.count > 1){
                            item.count = item.count - 1
                            }
                            else{
                                return item.count
                            }
                            return{
                                ...item
                            }
                        }
                        return {...item}
                    })],
                    cartList: [...state.cartList.map((item)=>{
                        if(item.id === action.payload.id){
                            if(item.count > 1){
                            item.count = item.count - 1;
                            }
                            else{
                                item.count = item.count
                            }
                            return{
                                ...item
                            }
                        }
                        return {...item}
                    })],
                }
            case 'CARTEDINCREASE':
                return{
                    ...state, 
                    cartCount:state.cartCount + 1
                }
            case 'CARTEDDECREASE':
                return{
                    ...state, 
                    cartCount:state.cartCount - 1
                }
            case 'DELETE':
                return{
                    ...state,
                    cartList:state.cartList.filter((item)=> item.name !== action.payload),
                    home: [...home.map((item)=>{
                        if(item.name === action.payload){
                            item.active = false
                            return{
                                ...item
                            }
                        }
                        return {...item}
                    })],
                }

        default:
            return state
    }
}

export default reducer