import {createStore} from "redux"

//导入reducer
import {reducer} from "../reducer/index"

//构建store
const store=createStore(reducer)


export default store;

 
