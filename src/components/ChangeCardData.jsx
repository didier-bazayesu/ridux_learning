import React,{useContext} from 'react'
import { CardContext } from './Card'

function ChangeCardData() {
    const { setCardData } = useContext(CardContext);
  return (
    <div>
        <button onClick={()=> { setCardData({ name: 'Jane Smith', age: 25, occupation: 'Designer' }) }}>change card data</button>
    </div>
  )
}

export default ChangeCardData