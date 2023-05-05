import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FiChevronRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Drawer({ drawer, toggleDrawer }) {

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
            departments.map((item) => (
            <Link to={item.toLowerCase()} key={item} sx={{color:'white'}}>
                <ListItemButton sx={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
                    <ListItemText primary={item} />
                    <FiChevronRight sx={{textAlign:'end', color:'white', fontSize:'24px'}}/>
                </ListItemButton>
            </Link>           
            ))



  return (
    <div>
        <SwipeableDrawer
         open={drawer}
         onClose={toggleDrawer(false)}
         onOpen={toggleDrawer(true)}
         PaperProps={{
            sx: {
              backgroundColor: 'rgb(35, 47, 62)',
            }
          }}
        >
            <Box
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                sx={{width:'70vw'}}
            >
                <List>
                    {list}
                </List>
            </Box>
        </SwipeableDrawer>
    </div>
  );
}
