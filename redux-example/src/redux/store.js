import { applyMiddleware, combineReducers,createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const initialState = {

}

// reducerslar state'i tutar
const reducers = combineReducers({

})

// storeda olan değerleri tüm sayfalarda kullanabilirim 
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store;