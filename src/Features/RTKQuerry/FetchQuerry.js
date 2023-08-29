import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const ProductApi = createApi({
    reducerPath:'ProductAPI',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    tagTypes:['posts'],
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>{
                return 'users'
            },
        }),
        getAllPost:builder.query({
            query:(id)=>{
                return `post${id}`
            },
        }),
        // Post the Data
        addData:builder.mutation({
            query:(post)=>{
               return {
                url:'posts',
                method:"POST",
                body:post
               }
            }
        })
    })
    
     
})



export const {useGetAllProductsQuery,useGetAllPostQuery,useAddDataMutation} = ProductApi




 /* Import CreateApi and Fetchbase from reduxtoolkit query react*/

// import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// // All the Fetching is write inside this 
// export const productApi = createApi({
//     reducerPath:"ProductApi",
//     baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
//     // This is where we Call the Endpoints
//     // Here is where we call diffrent Querries
// //    endpoints:(builder)=>({
// //     getAllProducts:builder.query({
// //          query:()=> 'products',
// //     }),
// //    }),
// endpoints:(builder)=>({
//      getAllProducts:builder.query({
//         query:()=>{
//            return  'products'
//         }
//      }),
//      getAllUsers:builder.query({
//         query:()=>{
//             return 'carts'
//         }
//      })
// })
// })
 



// // export the querry here the querry is exported in hooks inbuild by reduxtoolkit

// export const {useGetAllProductsQuery,useGetAllUsersQuery} = productApi
