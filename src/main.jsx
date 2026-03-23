import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user.js'
import { Provider } from 'react-redux'
import ChangeColor from './features/theme.js'
import ingredientReducer from './features/ingredient.js'


const store = configureStore({
     reducer : {
      user: userReducer,
      theme : ChangeColor,
      ingredients:  ingredientReducer
     },
 
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
      <App />
    </Provider> 
  </StrictMode>,
)
