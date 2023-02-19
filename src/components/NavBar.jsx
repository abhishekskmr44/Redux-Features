import { Box, Heading } from "@chakra-ui/react"
import {Link} from "react-router-dom"
export const NavBar = () => {
    return (
        <Box id="navbar-container">
        <Heading size={"md"}>
        MINI-ECOMMERCE
        </Heading>
        <Box>
          <Link to={"/"}>Products</Link>
          <Link to={"/cart"}>Cart</Link>
          <Link to={"/orders"}>Orders</Link>
        </Box>
        </Box>
    )
}