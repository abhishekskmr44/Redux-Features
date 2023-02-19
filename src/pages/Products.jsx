import { Box, Grid, Heading, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import  {useDispatch, useSelector} from "react-redux";
import { Functionality } from '../components/Functionality';
import { Pagination } from '../components/Pagination';
import { ProductCard } from '../components/ProductCard';
import { getProducts } from '../Redux/action';




export const Products = () => {

const dispatch = useDispatch();
const products = useSelector((store)=>store.products);
const filteredData = useSelector((store)=>store.filteredData)


const [page,setPage] = useState(1);
const perPage = 8;
const totalPages = Math.ceil(filteredData.length/perPage)

let end = page*perPage
let start = end-perPage
let paginatedProducts = filteredData.slice(start,end);

useEffect(() => {
 // https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products
    // apiCall()
   // now we are not dispatching actions we are dispatching getProducts function
    dispatch(getProducts(products.length/perPage));
},[]);
// async function apiCall(){
// }

return (
    <>
    <Functionality/>
    <SimpleGrid columns={3}>
    {paginatedProducts.map((el,index)=>{
        return <ProductCard key={index} product={el}/>
    })}
    </SimpleGrid>

    <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    </>
)
}

// to change a store wwe have to dispatch an action to the store
// dispatch is like giving action to the store