import ProductsCarousel from "./ProductsCarousel";
import DepartmentsGrid from "./DepartmentsGrid";

const Home = () => {
    return ( <div className="page">

        <DepartmentsGrid/>
        <ProductsCarousel/>
    </div> );
}
 
export default Home;