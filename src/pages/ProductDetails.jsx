import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import cartContext from "../store/cart-context";
import { useContext } from "react";
import Styles from './ProductDetails.module.css';
import { motion } from 'framer-motion';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const data = useLoaderData();
    const cartCtx = useContext(cartContext);
    const navigate = useNavigate();
    const params = useParams();

    const increaseQuantityHandler = ()=>{
        if(quantity>=10){
            return;
        }else{
            setQuantity(prev=>{
                return prev + 1;
            })
        }
    }

    const decreaseQuantityHandler = ()=>{
        if(quantity<=1){
            return;
        }else{
            setQuantity(prev=>{
                return prev - 1;
            })
        }
    }
    const addToCartHandler = ()=>{
        const item = {
            ...data,
            productQuantity:quantity,
            departmentId:params.departmentId
        }
        cartCtx.addItem(item);
        navigate('/cart');
    }

    return ( <div className={Styles['product-details-page']}>
        <motion.div 
            className={Styles['product-details-container']}
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:1}}}
        >
            <div className={Styles['product-details-image-holder']}>
                <img src={data.image} alt='product' className={Styles['product-details-image']}/>
            </div>
            <div className={Styles['product-details-text-holder']}>
                <h1 className={Styles['product-details-title']}>{data.brand||data.name}</h1>
                <p className={Styles['product-details-description']}>{data.description || data.name}</p>
                <p className={Styles['product-details-description']}>{data.author?`Author: ${data.author}`:''}</p>
                <p className={Styles['product-details-price']}>{`$${data.price}`}</p>
                <div className={Styles['product-details-quantity-wrapper']}>
                    <div className={Styles['product-details-quantity']}>
                        <button onClick={decreaseQuantityHandler} style={{borderRadius:'20px 0 0 20px'}}>-</button>
                        <p>{quantity}</p>
                        <button onClick={increaseQuantityHandler} style={{borderRadius:'0 20px 20px 0'}}>+</button>
                    </div>
                </div>
                <button onClick={addToCartHandler} className={Styles['product-details-button']}>Add to cart</button>
            </div>
        </motion.div>            
    </div> );
}

export const productLoader = ({params})=>{
    const data = fetch(`https://cart-hub-c442a-default-rtdb.firebaseio.com/Products/${params.departmentId}/${params.productId}.json`)
        .then((response)=>{
            if(!response.ok){
                throw Error("Check your connection!");
            }
            return response.json();
    }).then(data=>{

        if(!data){
            console.log("ERROR GOTCHA NO PRODUCT DETAILS");
            throw Error("Couldn't fetch product details...");
        }
        
        return data;
    })

    return data;
}
 
export default ProductDetails;