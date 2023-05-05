import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import pic1 from '../assets/pictures/pic1.jpg';
import pic2 from '../assets/pictures/pic2.jpeg';
import pic3 from '../assets/pictures/pic3.jpg';
import pic4 from '../assets/pictures/pic4.avif';


const carouselPictures = [pic1, pic2, pic3, pic4];

const ProductsCarousel = () => {

    return (<motion.div 
        className='carousel-page'
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{duration:1}}}>
        <div className='carousel-container'>

            <div className="carousel-text-container">
                <TypeAnimation
                    sequence={[
                        'Cart', // Types 'One'
                        1000, // Waits 1s
                        'hub', // Deletes 'One' and types 'Two'
                        1000, // Waits 2s
                        'Cart-hub',
                        2000
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                    />
                <p className="carousel-text">
                    Discover an amazing selection of quality products 
                    that cater to your unique needs and preferences, 
                    all in one convenient online store
                </p>
            </div>

            <div className="carousel-holder">
                <Carousel 
                    infiniteLoop 
                    autoPlay 
                    showArrows={false} 
                    showThumbs={false} 
                    showStatus={false}>
                    {
                        carouselPictures.map(pic=>(
                            <div key={pic} className='image'>
                                <img src={pic} alt={pic}/>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    </motion.div>);
}
 
export default ProductsCarousel;