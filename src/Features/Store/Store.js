import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import { ProductApi } from '../RTKQuerry/FetchQuerry'
import UserReducer from '../Userslice'


const Store = configureStore({
  reducer:{
    user:UserReducer
  },
  [ProductApi.reducerPath]:ProductApi.reducer,
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(ProductApi.middleware)
  }
 
})



export default Store