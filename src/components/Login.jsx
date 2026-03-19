import React from 'react'
import { useDispatch } from 'react-redux'
import { login ,logout} from '../features/user.js'

function Login() {
  const dispatch = useDispatch();

  const handleDispatchFunction = () => {
    dispatch(login({ name:"rukundo",age:10,email:"rukundo@gmail.com"   }))
  }

  return (
  <div>
        <button onClick={handleDispatchFunction}>Login</button>
        <button onClick={()=> {dispatch(logout())}}>Logout</button>
  </div>
  )
}

export default Login