
import React,{useContext}from 'react'
import { CardContext } from './Card';


function CardProfile() {
const {cardData,setCardData} = useContext(CardContext);
  

  return (
    <div>
        <h2>Card Profile</h2>  
            <button onClick={() => setCardData({ name: 'John Doe', age: 30, occupation: 'Software Engineer' })}> 
                Load Card Data
            </button>
        {cardData && (
          <div>
            <p>Name: {cardData.name}</p>    
            <p>Age: {cardData.age}</p>
            <p>Occupation: {cardData.occupation}</p>
          </div>
        )}
    </div>
  )
}

export default CardProfile