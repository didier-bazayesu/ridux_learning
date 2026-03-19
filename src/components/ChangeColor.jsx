import React from 'react'
import { useDispatch } from 'react-redux'
import { color } from '../features/theme';


function ChangeColor() {
    const dispatch = useDispatch();
  return (
    <input type="text"  onChange={(event)=>{dispatch(color(event.target.value))}} placeholder='type Color' />
  )
}

export default ChangeColor