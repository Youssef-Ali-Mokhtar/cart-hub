import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Page = () => {
    const data = Object.values(useLoaderData());
    const departmentId = useParams();
    
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          x:0,
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    return ( <div className="page">
        <motion.div 
            className="card-container"
            variants={container}
            initial="hidden"
            animate="visible">
            {
                data.map((product)=>(
                    <motion.div
                        variants={item}
                        key={product.id}>
                        <ProductCard
                            id={product.id}
                            departmentId={departmentId.departmentId}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            variants={item}
                        />
                    </motion.div>

                ))
            }
        </motion.div>
    </div> );
}
 
export const pageLoader = ({params})=>{
    const data = fetch(`https://cart-hub-c442a-default-rtdb.firebaseio.com/Products/${params.departmentId}.json`)
        .then((response)=>{
            if(!response.ok){
                throw Error("Check your connection!");
            }
            return response.json();
    }).then(data=>{

        if(!data){
            console.log("ERROR GOTCHA");
            throw Error("Couldn't fetch products...");
        }
        
        return data;
    })

    return data;
}


export default Page;