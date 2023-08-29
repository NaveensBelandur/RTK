import React, { useEffect } from 'react'


// Import querry from product querry
import {useGetAllProductsQuery} from '../Features/RTKQuerry/FetchQuerry'
import { useGetAllPostQuery } from '../Features/RTKQuerry/FetchQuerry'
import '../Style/Fetch.css'




const FetchData = () =>{



  //  Set the intial data as an empty arrray so you will not get map as undefined 

  const {data=[],isSuccess,isError,isLoading,isFetching} = useGetAllProductsQuery()





    return (
        <React.Fragment>
          <section>
            <h3 className='fetch-rtk'>Fetching Data Using the RTK Querry</h3>
            {isLoading && <h2>Loading ...</h2>}
            {isFetching && <h2>Loading ...</h2>}
            {isError && <h2>Something Went wrong ... </h2>}
            {isSuccess && (
              <div>
                {data.map((contact)=>{
                  return (
                    <div key={contact.id}>
                      <p>{contact.name}</p>
                      </div>
                  )
                })}
              </div>
            )}
          </section>
        </React.Fragment>
    )
}




export default FetchData