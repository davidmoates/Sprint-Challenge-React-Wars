import React from 'react';

import StarWarsCard from './StarWarsCard';

const StarWarsPeople = (props) => {


return (
  props.people.map((char, index) => <StarWarsCard key = {index} person = {char} />)
)

}

export default StarWarsPeople;
