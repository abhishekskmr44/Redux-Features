// here we will dispatch the data

// import { useDispatch } from "react-redux";

// action types
export const GET_PRODUCTS = "GET_PRODUCTS";


// making an action for fitered data
export const FILTER_PRODUCT = "FILTER_PRODUCT"; 


export const SORT_PRODUCT = "SORT_PRODUCT";



// action creators
// cosnt getProducts is directly returning an object and creating an action 
// now using THUNK
// this dipatch is passed as a middleware by thunk
export const getProducts = () => async(dispatch) => {
   let data = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=100`);

   data = await data.json();

//    now we have access to dispatch not before via thunks
dispatch({
    type: GET_PRODUCTS,
    payload: data.data,
});

}





// export const getProducts = async() => {

//     const dispatch = useDispatch()

//     let data = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);

//     data = await data.json();


//     // instead of console just dispatch data.data
//     // console.log(data.data)
//     dispatch(getProducts(data.data))
// // dipatch is causing problem hence use Thunk

//  return {
//     type: GET_PRODUCTS,
//     payload: data
//  }   
// }


export const filteredProduct = (data) => {
    return {
        type: FILTER_PRODUCT,
        payload:data
    }
}

export const sortProdutcs = (data) => {
    return {
        type: SORT_PRODUCT,
        payload: data,
    }
}
