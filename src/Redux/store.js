import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./reducer";


const initState = {
    products:[],
    cart:[],
    orders:[],
    currentProduct:{},
    filteredData:[]
}

export const store = createStore(
    Reducer, 
    initState,
     compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


// whenever we are changing state we'll get it in the console
store.subscribe(() => console.log(store.getState()));