import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductsNavbar() {
    const [departments, setDepartments] = useState(null);


    useEffect(()=>{
        fetch('https://cart-hub-c442a-default-rtdb.firebaseio.com/Products.json?shallow=true')
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                const keys = Object.keys(data);
                const capitalizedKeys = keys.map(key=>(
                    key.charAt(0).toUpperCase() + key.slice(1)
                ))
                setDepartments(capitalizedKeys);
            })
    },[])


    const list = departments &&
            departments.map((page) => (
            <NavLink 
                to={page.toLowerCase()} 
                key={page.toLowerCase()}>
                <Button
                    key={page}
                    sx={{ color: 'white', display: 'block', height:'100%' }}
                >
                    {page}
                </Button>
            </NavLink>
        ))

  return (
    <AppBar position="static" sx={{ display: { xs: 'none', md: 'flex' }}}>
      <Container maxWidth="xl" sx={{height:'40px', backgroundColor:'rgb(35, 47, 62)', display:'flex'}}>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {list}
          </Box>
      </Container>
    </AppBar>
  );
}
export default ProductsNavbar;
