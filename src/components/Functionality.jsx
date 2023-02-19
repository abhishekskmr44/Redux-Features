import { Box, Select } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { filteredProduct, sortProdutcs } from "../Redux/action";

export const Functionality = () => {


const dispatch = useDispatch()
let products = useSelector((store)=>store.products);
let filteredData = useSelector((store)=>store.filteredData)


function handleFilter(e){
 let filteredData = products.filter((el)=> {
    return el.category === e.target.value
 })
 dispatch(filteredProduct(filteredData))
}

// sort button
function handleSort(e){
   const query = e.target.value
 
   if(query==="asc"){
    filteredData.sort((a,b)=>{
       return a.price-b.price
    })
   }else{
    filteredData.sort((a,b)=>{
      return b.price-a.price
    })
   }
   let sortedArray = [...filteredData]; 
   dispatch(sortProdutcs(sortedArray))


}



    return (
        <Box>
          <Box>
           <Select placeholder="Select option" onChange={handleFilter}>
           <option value="kids">Kids</option>
           <option value="women">Women</option>
           <option value="men">Men</option>
           <option value="homedecor">Homedecor</option>
           </Select>
          </Box>

          <Box>
          <Select placeholder="Select option" onChange={handleSort}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
          </Select>
          </Box>
        </Box>
    )
}