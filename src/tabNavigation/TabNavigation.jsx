import React from 'react'

function TabNavigation() {
    const [isActive ,setIsActive] = React.useState('home');
  return (
    <>
        <div>
            <h2>Tab Navigation</h2>
            <div style={{display:'flex',gap:'20px'}}>
                <button onClick={()=> {setIsActive('home')}} className={isActive=='home'? 'active': ""}>Home</button>
                <button onClick={()=> {setIsActive('about')}}className={isActive=='about'? 'active': ""}>About</button>
                <button onClick={()=> {setIsActive('contact')}}className={isActive=='contact'? 'active': ""}>Contact</button>
                <button onClick={()=> {setIsActive('profile')}}className={isActive=='profile'? 'active': ""}>Profile</button>

            </div>
        </div>

        <div>
            {isActive ==  'home' && <h3>Home</h3>}
            {isActive ==  'about' && <h3>about</h3>}
            {isActive ==  'contact' && <h3>contact</h3>}
            {isActive ==  'profile' && <h3>profile</h3>}
        </div>
    </>
  )
}

export default TabNavigation