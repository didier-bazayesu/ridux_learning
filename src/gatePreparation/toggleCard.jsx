import React, { useState } from 'react'

// Sample data for cards
const cardData = [
  { id: 1, title: 'Card 1', description: 'This is the description for Card 1.' },
  { id: 2, title: 'Card 2', description: 'This is the description for Card 2.' },
  { id: 3, title: 'Card 3', description: 'This is the description for Card 3.' },
  { id: 4, title: 'Card 4', description: 'This is the description for Card 4.' },
  { id: 5, title: 'Card 5', description: 'This is the description for Card 5.' }


]

function CardList() {
   const [showAll  ,setShowAll] = useState(false);
   const cardsData   =  showAll? cardData : cardData.slice(0,4);
   
  return (
    <div>
      <div>
        {cardsData.map(card => (
          <div
            key={card.id}
            style={{
              backgroundColor: 'green',
              margin: '10px',
              padding: '10px',
              color: 'white',
              borderRadius: '10px',
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <div>
            {cardData.length > 4 &&(
                <div>
                    {!showAll &&<button onClick={()=>{setShowAll(true)}} > Show More</button>}
                    { showAll &&<button onClick={()=>{setShowAll(false)}}>Show Less</button>}

                </div>

            ) }

        </div>
      </div>
    </div>
  )
}

export default CardList
