import Styles from './Logo.module.css';

const Logo = () => {
    return ( <div className={Styles.logo}>
        <span>Cart</span>
        <span className={Styles['box-text']}>hub</span>
    </div> );
}
 
export default Logo;