import React,{useState,createContext} from 'react'

export const CardContext = createContext();

function Card({children}) {
  const [cardData , setCardData] = useState(null);

  return (
   <CardContext.Provider value={{ cardData, setCardData }}>
     {children}
   </CardContext.Provider>
  )
}

export default Card