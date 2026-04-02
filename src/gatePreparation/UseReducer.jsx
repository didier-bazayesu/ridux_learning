import React,{act, useReducer,} from 'react'
import { useLocation ,useParams} from 'react-router-dom';
import customHook from './customHook';
import useCustomHook from './customHook';

function UseReducer() {
     const initialValue = {count : 0}
    const [state,dispatch] =useReducer(reducer , initialValue);
    const {data , loading , error} = useCustomHook('https://jsonplaceholder.typicode.com/users');

    function reducer (state,action){
        if(action.type == 'add') return {count : state.count + 1};
       else if(action.type== 'delete' && state.count > 0) return {count: state.count-1}
        else   return state

    }
    const params = useParams();
    console.log(data);
        


  return (
    
    <div>
        <h1>{state.count}</h1>

        <button onClick={()=> dispatch({type:'add'})}>+</button>
        <button onClick={()=> dispatch({type: 'delete'})}>-</button>
  
    </div>
  )
}

export default UseReducer