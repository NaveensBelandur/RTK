import {createSlice} from '@reduxjs/toolkit'


const IntialState = {
    loading:false,
    isSuccess:false,
    user:[],
    isError:false
}


const UserSlice = createSlice({
    name:"User",
    initialState:IntialState,
    reducers:{
        reset:(state)=>{
            state.loading = false
            state.isSuccess = false
            state.isError = false
            state.user =[]
        }
    }
})



export default UserSlice.reducer