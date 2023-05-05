import Styles from './CartCard.module.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cartContext from '../store/cart-context';
const CartCard = ({productData}) => {
    const cartCtx = useContext(cartContext);
    const navigate = useNavigate();
    console.log(productData.productQuantity);

    const increaseQuantityHandler = ()=>{
        const item = {
            ...productData,
            productQuantity:1
        }
        cartCtx.addItem(item);
    }

    
    const decreaseQuantityHandler = ()=>{
        cartCtx.removeItem(productData.id);
    }

    return ( <div className={Styles['cart-card']}>
        <div className={Styles['cart-card-image-holder']}>
            <img src={productData.image} 
                className={Styles['cart-card-image']} 
                alt='product'
                onClick={()=>navigate(`/${productData.departmentId}/${productData.id}`)}/>
        </div>
        <div className={Styles['cart-card-text']}>

            <div className={Styles['cart-card-upper']}>
                <p className={Styles['cart-card-title']}
                 onClick={()=>navigate(`/${productData.departmentId}/${productData.id}`)}>{productData.name}</p>
                <p className={Styles['cart-cart-price']}>{"$"+productData.price}</p>
            </div>
            <div className={Styles['cart-card-lower']}>
                <p className={Styles['cart-cart-price']}>{"Subtotal: $"+(productData.price * productData.productQuantity).toFixed(2)}</p>
                <div className={Styles['quantity-controller-wrapper']}>
                    <button 
                        className={Styles['quantity-controller-button']}
                        onClick={decreaseQuantityHandler}>-</button>
                    <p className={Styles['quantity-controller-number']}>{productData.productQuantity}</p>
                    <button 
                        className={Styles['quantity-controller-button']}
                        onClick={increaseQuantityHandler}>+</button>
                    <p className={Styles['delete-product']}>Delete</p>
                </div>
            </div>
        </div>

    </div> );
}

export default CartCard;