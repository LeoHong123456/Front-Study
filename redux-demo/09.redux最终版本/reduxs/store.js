import { createStore, applyMiddleware } from "redux";
//引入redux-thunk,用于支持异步action
import thunk from "redux-thunk";

//引入开发者工具安装 npm i redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
