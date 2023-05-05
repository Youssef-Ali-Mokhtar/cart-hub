import cartContext from "./cart-context";
import { useReducer, useEffect } from "react";

const initialCartState = {
    items:[],
    totalPrice:0
}

const cartReducer = (state, action)=>{
    if(action.type==='ADD_ITEM'){
        const itemIndex = state.items.findIndex((item)=>{
            return item.id === action.item.id;
        })
        
        const totalPrice = state.totalPrice + action.item.price * action.item.productQuantity;

        if(itemIndex === -1){
            return {items:[...state.items, action.item], totalPrice:totalPrice};
        }else if(itemIndex > -1){
            const items = [...state.items];
            items[itemIndex].productQuantity += action.item.productQuantity;
            return {items:items, totalPrice:totalPrice};
        }else{
            return {...state};
        }

    }else if(action.type ==='REMOVE_ITEM'){
        const itemIndex = state.items.findIndex((item)=>{
            return item.id === action.itemId;
        })

        const targetProductQuantity = state.items[itemIndex].productQuantity;
        const items = [...state.items];
        const totalPrice = state.totalPrice - items[itemIndex].price;
        if(targetProductQuantity>1){
            items[itemIndex].productQuantity -= 1;
            return {items: items, totalPrice: totalPrice};
        }else if(targetProductQuantity===1){
            const updatedItems = items.filter(item=>{
                return item.id !== action.itemId;
            })
            return {items: updatedItems, totalPrice: totalPrice};
        }else{
            return {...state};
        }

    }else if(action.type ==='RESET'){
        return {items:[], totalPrice:0};
    }
    else{
        return state;
    }
}

const CartProvider = ({children})=>{
    const [cart, dispatchCart] = useReducer(cartReducer, initialCartState, ()=>{
        const localData = localStorage.getItem('cart');
        return localData? JSON.parse(localData): initialCartState;
    });

    useEffect(()=>{
        console.log(cart.items);
        
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart])

    const addItem =(item)=>{
        dispatchCart({type:'ADD_ITEM', item:item});
    }

    const removeItem =(itemId)=>{
        dispatchCart({type:'REMOVE_ITEM', itemId:itemId});
    }

    const reset =()=>{
        dispatchCart({type:'RESET'});
    }

    return <cartContext.Provider 
                value={{items:cart.items, 
                        totalPrice:cart.totalPrice, 
                        addItem:addItem, 
                        removeItem:removeItem,
                        reset:reset}}>
        {children}
    </cartContext.Provider>
}

export default CartProvider;