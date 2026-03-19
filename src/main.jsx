import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user.js'
import { Provider } from 'react-redux'
import ChangeColor from './features/theme.js'


const store = configureStore({
     reducer : {
      user: userReducer,
      theme : ChangeColor
     },
 
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
      <App />
    </Provider> 
  </StrictMode>,
)
