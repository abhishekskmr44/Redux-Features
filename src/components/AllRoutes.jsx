import {Routes,Route} from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Orders } from "../pages/Orders";
import { ProductDetails } from "../pages/ProductDetails";
import { Products } from "../pages/Products";



export const AllRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>}/>
        </Routes>
    )
}