import { act } from "react-dom/test-utils";
import { home, electronics, cloth, furniture, books, cosmetics } from "../utils";
const initState = {
    cartState:false,
    cartList:[],
    cartCount:0,
    home:home,
}

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
                cartList:[...state.cartList,action.payload],
            }
            case 'INCREASE':
                return{
                    ...state,
                    cartList:[...state.cartList,action.payload],
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
                    cartList:state.cartList.filter((item)=> item.name !== action.payload)
                }
            case 'BUTTONSTATE':
                let category = action.payload.category;
                const name = action.payload.name;
                const id = action.payload
                // category = category.slice(0,1).toLowerCase()+ category.slice(1,category.length)
                // console.log(state[category])
                console.log({...home[id], active:true})
                console.log(home)
                return{
                    ...state,
                    home:[{...home[id], active:true}]
                }
                
        default:
            return state
    }
}

export default reducer