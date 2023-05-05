import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Checkout = () => {
    return ( <div className="page">
        <TypeAnimation
            className='checkout-message'
            sequence={[
                1300,
                'Thank you for choosing Carthub!', // Types 'One'
                1000, // Waits 1s
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
        />
        <motion.div
            animate={{x:'100vw', transition:{delay:3.5, type:'tween', duration:1.5}}}
        >
            <motion.div
                className='checkout-cart'
                initial={{x:'-100vw'}}
                animate={{x:0, transition:{type:'tween', duration:1.5}}}
                >
                    <LocalShippingIcon
                        sx={{width:'100%',
                            fontSize:'200px', 
                            textAlign:'center',
                            color:'#FF9900'}}/>
            </motion.div>
        </motion.div>

    </div> );
}
 
export default Checkout;