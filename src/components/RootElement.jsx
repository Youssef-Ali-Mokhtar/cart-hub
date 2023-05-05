import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useState } from "react";
import Drawer from "../layouts/Drawer";

const RootElement = () => {
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setDrawer(open);
    };
    return ( <>
        <Navbar toggleDrawer={toggleDrawer}/>
        <Drawer toggleDrawer={toggleDrawer} drawer={drawer}/>
        <Outlet/>
    </> );
}
 
export default RootElement;