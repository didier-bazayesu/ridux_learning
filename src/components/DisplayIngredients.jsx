import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { deleteIngredient } from '../features/ingredient';



function DisplayIngredients() {
  const data = useSelector(state => state.ingredients.value);
  const dispatch = useDispatch();

  function handleDelete (elementIndex) {    
    dispatch(deleteIngredient(elementIndex)); 
  }

    const renderData =  
        <div className="card-container">
        <h1 className="section-title">Ingredients on Hand</h1>
        <ul className="ingredient-list-container">
        { data.map((element, index) => (
            <div key={index}  className="ingredient-list-item" >
                <li >
                    {element}

                </li>
                <p  onClick={() => handleDelete(index)}>x</p>
            </div>
        ))}
        </ul>
    </div>

    return (
        <>
         {data.length >0 && renderData}
        </>
    )

}

export default DisplayIngredients;