import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <RouterProvider router={router} />
   </Provider>
)
