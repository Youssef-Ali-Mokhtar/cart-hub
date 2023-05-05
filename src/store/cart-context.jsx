import { createContext } from "react";

const cartContext = createContext(
    {items:[], 
     totalPrice:0,
     addItem:(item)=>{}, 
     removeItem:(item)=>{},
     reset:()=>{},
     });

export default cartContext;