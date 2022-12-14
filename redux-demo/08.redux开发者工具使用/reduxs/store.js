import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
//引入redux-thunk,用于支持异步action
import thunk from "redux-thunk";
//引入开发者工具安装 npm i redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

const allReducer = combineReducers({
  count: countReducer,
  person: personReducer,
});
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));
