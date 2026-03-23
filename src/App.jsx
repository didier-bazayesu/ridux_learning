import React from 'react'
import Profile from './components/Profile'
import Login from './components/Login'
import ChangeColor from './components/ChangeColor'
import Card from './components/Card'
import CardProfile from './components/CardProfile'
import ChangeCardData from './components/ChangeCardData'

function App() {
  return (
    <div>
      <Profile />
      <Login />
      <ChangeColor/>

      <h2>Card Component</h2>
      <div className='card-container'>
        <Card>
          <div className='card-content'>
            <div className='handle-flex-row'>
              <CardProfile />
              <ChangeCardData/>
            </div>
          </div>
        </Card>
      </div>
      
    </div>
  )
}

export default App