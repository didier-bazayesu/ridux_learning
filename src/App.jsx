 import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Profile from './components/Profile'
import Login from './components/Login'
import ChangeColor from './components/ChangeColor'
import Card from './components/Card'
import CardProfile from './components/CardProfile'
import ChangeCardData from './components/ChangeCardData'
import AddIngredients from './components/AddIngredients'
import DisplayIngredients from './components/DisplayIngredients'
import MyComponent from './components/HistoryNavigation'
import UncontrolledForm from './components/UnControlledForm'
import Products from './prooductsFilter/Products'
import Shopping from './shoppingCart/Shopping'

function App() {
  return (
    <BrowserRouter>

      {/* 🔗 Simple Navigation */}
      <nav style={{ display: 'flex', gap: '50px', marginBottom: '20px' ,marginLeft:'20px' }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/color">Change Color</Link>
        <Link to="/card">Card</Link>
        <Link to="/ingredients">Ingredients</Link>
        <Link to="/form">Form</Link>
        <Link to="/products">Products</Link>
        <Link to="/shopping">Shopping</Link>
      </nav>

      {/* 🧭 Routes */}
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/color" element={<ChangeColor />} />

        <Route 
          path="/card" 
          element={
            <div className='card-container'>
              <Card>
                <div className='card-content'>
                  <div className='handle-flex-row'>
                    <CardProfile />
                    <ChangeCardData />
                  </div>
                </div>
              </Card>
            </div>
          } 
        />

        <Route 
          path="/ingredients" 
          element={
            <>
              <AddIngredients />
              <DisplayIngredients />
            </>
          } 
        />

        <Route path="/history" element={<MyComponent />} />
        <Route path="/form" element={<UncontrolledForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shopping" element={<Shopping />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
