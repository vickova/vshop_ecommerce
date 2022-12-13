import { act } from "react-dom/test-utils";
import Items from "../components/Items";
import { home, electronics, cloth, furniture, books, cosmetics } from "../utils";
const initState = {
    cartState:false,
    cartList:[],
    cartCount:0,
    home:home,
    totalCart:0
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
            // console.log(state.home)
            return{
                ...state,
                cartList:[...state.cartList, action.payload]
            }
            case 'HOMEFRESH':
                console.log(state.home)
                return{
                    ...state,
                    home: [...home.map((item)=>{
                        if(item.id === action.payload.id){
                            console.log(state.home)
                            console.log(item)
                            item.active = true
                            return{
                                ...item
                            }
                        }
                        return {...item}
                    })],
                }
                case 'COUNTINCREASE':
                console.log(state.home)
                console.log(state.totalCart)
                return{
                    ...state,
                    home: [...home.map((item)=>{
                        if(item.id === action.payload.id){
                            console.log(item)
                            item.count = item.count + 1
                            console.log(item)
                            return{
                                ...item
                            }
                        }
                        return {...item}
                    })],
                    totalCart: state.cartList?.reduce((a, v)=> a = a+v.amount, 0)
                }
                case 'COUNTDECREASE':
                console.log(state.home)
                console.log(state.totalCart)
                return{
                    ...state,
                    home: [...home.map((item)=>{
                        if(item.id === action.payload.id){
                            console.log(state.home)
                            console.log(item)
                            if(item.count > 1){
                            item.count = item.count - 1
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
                    totalCart: state.cartList?.reduce((a, v)=> a = a+v.amount, 0)
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
                console.log(state.cartList)
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