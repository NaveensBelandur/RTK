import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath:'Api',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints:(builder)=>({
        users:builder.query({
            query:()=>{
                return 'users'
            }
        })
    })
})



/* We Need to Bind this Query to the Redux store */ 
export const {useUsersQuery} = Api