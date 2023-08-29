import React from 'react'
import FetchData from './Component/FetchData'
import Error from './Component/Error'
import Form from './Component/PostData'
import {Routes,Route} from 'react-router-dom'


const App = () =>{
    return (
          <React.Fragment>
            <Routes>
                <Route path='/' element={<FetchData/>}/>
                <Route path='/Post' element={<Form/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
          </React.Fragment>
    )
}




export default App