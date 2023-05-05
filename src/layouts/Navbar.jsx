import MainNavbar from './MainNavbar';
import ProductsNavbar from './ProductsNavbar';

const Navbar = ({ toggleDrawer }) => {
    return ( <div className="navbar">
        <MainNavbar toggleDrawer={toggleDrawer}/>
        <ProductsNavbar/>
    </div> );
}
 
export default Navbar;