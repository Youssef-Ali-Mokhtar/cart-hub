import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import fashion from '../assets/pictures/fashion.jpg';
import books from '../assets/pictures/books.jpg';
import laptops from '../assets/pictures/laptops.jpg';
import sports from '../assets/pictures/sports.jpg';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
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

const departments = [
    {name:'fashion', pic:fashion, slogan:"Fashion"},
    {name:'books',pic:books, slogan:"Books"},
    {name:'laptops',pic:laptops, slogan:"Laptops"},
    {name:'sports',pic:sports, slogan:"Sports"}];

const DepartmentsGrid = () => {
    return (<motion.div 
        className="departments-grid"
        variants={container}
        initial="hidden"
        animate="visible">
        {
            departments.map(department=>(
                <motion.div 
                    key={department.name} 
                    className={department.name}
                    variants={item}>
                    <Link to={department.name} >
                      <div 
                        style={{position:'relative', width:'100%', height:'100%'}}
                        >
                        <img
                              src={department.pic}
                              alt={department.name}
                              className="department-image"
                          />
                          <div className="text-over-picture">
                            <h1 style={{fontWeight:500, fontFamily:'sans-serif',padding:'10px 15px'}}>{department.slogan}</h1>
                          </div>
                      </div>
                    </Link>
                </motion.div>
            ))
        }
    </motion.div>);
}
 
export default DepartmentsGrid;