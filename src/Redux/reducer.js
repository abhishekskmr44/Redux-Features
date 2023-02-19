import { FILTER_PRODUCT, GET_PRODUCTS, SORT_PRODUCT } from "./action";

export const Reducer = (state, {type,payload}) => {
   switch(type){
    // if the case type is this then i would like to change the store by copying all the elements of the state , i want to store the payload in the products
    case GET_PRODUCTS:
        return {...state, products:payload, filteredData:payload};
        case FILTER_PRODUCT:
            return {...state, filteredData:payload};
        case SORT_PRODUCT:
            return {...state, products: payload}
    default:
    return state;
   }
}