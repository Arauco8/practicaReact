/* eslint-disable no-unused-vars */
import React from 'react';
import { useRecipeStates } from '../Context/Context';

const FavoritesPage = () => {
    const { state } = useRecipeStates();
  
    return (
      <div>
        <h2>Tus favoritos:</h2>
        {state.map((fav) => (
          <div key={fav.id}>
            <h3>{fav.title}</h3>
            <img src={fav.image} alt="" />
            <p>Ingredientes:</p>
            <ul>
              {fav.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default FavoritesPage;