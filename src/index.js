import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './Features/Store/Store'
import App from './App'
// Imported from ReduxToolkit
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {ProductApi} from './Features/RTKQuerry/FetchQuerry'

// when we dont have redux toolkit store and still we want to use rtx query then use api provider

console.log(Store.getState(),'getState')
const Container = document.getElementById('root')
const Root = createRoot(Container)
Root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Provider store={Store}>
            <ApiProvider api={ProductApi}>
        <App/>
        </ApiProvider>
        </Provider>
        </BrowserRouter>
    </React.StrictMode>
)


