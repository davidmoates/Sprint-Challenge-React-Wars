import React from 'react';

const StarWarsCard = (props) => {

  return (
    <div>
      <h2>{props.person.name}</h2>
      <ul>
        <li>{props.person.birth_year}</li>
        <li>{props.person.height}</li>
        <li>{props.person.mass}</li>
        <li>{props.person.hair_color}</li>
        <li>{props.person.eye_color}</li>
      </ul>
      
    </div>
  )

}

export default StarWarsCard;
