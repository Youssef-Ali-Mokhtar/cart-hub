import { useContext } from "react";
import cartContext from "../store/cart-context";
import Styles from './Cart.module.css';
import CartCard from "../components/CartCard";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { motion } from "framer-motion";

const Cart = () => {
    const cartCtx = useContext(cartContext);
    const container1 = {
        hidden: { x:'-100vw' },
        visible: {
          x:0,
          transition: {
            type:'spring',
            stiffness:'80',
          }
        },
      };
      const container2 = {
        hidden: { y:'-100vh' },
        visible: {
          y:0,
          transition: {
            type:'spring',
            stiffness:'80',
            delay:0.5,
          }
        },
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

      const checkoutHandler = ()=>{
          cartCtx.reset();
      }

    return ( <div className={Styles['cart-page']}>

        <div className={Styles['cart-container']}>
            <motion.div className={Styles['cart-items-container']}
                    variants={container1}
                    initial='hidden'
                    animate='visible'>
                <h1 className={Styles['cart-title']}>Shopping Cart</h1>
                {
                    cartCtx.items.map((item)=>(
                        <CartCard key={item.id} productData={item}/>
                    ))
                }
                {
                    (cartCtx.items.length === 0)&&
                    <>
                        <Divider sx={{marginTop:'10px'}}/>
                        <ProductionQuantityLimitsIcon sx={{width:'100%',fontSize:'200px', textAlign:'center'}}/>
                    </>
                }
            </motion.div>
            <motion.div 
                className={Styles['cart-summary-container']}
                variants={container2}
                initial='hidden'
                animate='visible'
            >
                <h1 className={Styles['cart-title']}>Cart Summary</h1>
                <div className={Styles['cart-summary-content-wrapper']}>
                    <h1 className={Styles['cart-summary-price']}>Total: ${(cartCtx.totalPrice).toFixed(2)}</h1>
                    <Divider/>
                    <Link 
                      to='/checkout' 
                      onClick={checkoutHandler} 
                      className={Styles['checkout-button']}>
                            Proceed to checkout
                    </Link>
                    
                </div>
            </motion.div>
        </div>
    </div> );
}

export default Cart;