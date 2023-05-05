import './App.css';
import Home from './pages/Home';
import Page from './pages/Page';
import RootElement from './components/RootElement';
import Error from './pages/Error';
import ProductDetails from './pages/ProductDetails';
import { pageLoader } from './pages/Page';
import { productLoader } from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
  useLocation
} from 'react-router-dom';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootElement/>} errorElement={<Error/>}>
            <Route index element={<Home/>}/>
            <Route
              path='/:departmentId' 
              element={<Page/>} 
              loader={pageLoader} 
              errorElement={<Error/>}/>
            <Route 
              path='/:departmentId/:productId' 
              element={<ProductDetails/>} 
              loader={productLoader} 
              errorElement={<Error/>}/>
            <Route
              path='/cart'
              element={<Cart/>}/>
            <Route
              path='/checkout'
              element={<Checkout/>}/>
        </Route>
    ),
    {
      basename:'/'
    }
  )
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
