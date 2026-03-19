import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { login } from '../features/user';

export default function() {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state)=> state.theme.value)
  const dispatch = useDispatch();


  return (

  <>   
       <div style={{display:'flex',flexDirection:'column' , gap:'30px'}}>
            <input type="text" placeholder='type Name' onChange={(event)=> {dispatch(login({...user, name: event.target.value}))}}/>
            <input type="number" placeholder='type Age' onChange={(event)=> {dispatch(login({...user, age: event.target.value}))}}/>
            <input type="email" placeholder='type Email' onChange={(event)=> {dispatch(login({...user, email: event.target.value}))}}/>
       </div>


        <div style={{color:theme}}>
            <h1>Name: {user.name}</h1>  
            <h1>Age: {user.age}</h1>
            <h1>Email: {user.email}</h1>
        </div>
  </>
  )
}
