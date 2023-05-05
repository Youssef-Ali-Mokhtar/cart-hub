import Styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({image, name, price, id}) => {
    return ( <Link to={id} className={Styles['product-card']}>
        <img src={image} alt='product'/>
        <div className={Styles['product-text']}>
            <p>{name}</p>
            <h1>{"$"+price}</h1>
        </div>
    </Link> );
}

export default ProductCard;