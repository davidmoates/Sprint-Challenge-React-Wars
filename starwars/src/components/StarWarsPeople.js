import React from 'react';

import styled from 'styled-components';

import StarWarsCard from './StarWarsCard';

const StarWarsPeople = (props) => {


const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
`

return (
  <FlexBox>
    {props.people.map((char, index) => <StarWarsCard key = {index} person = {char} />)}
  </FlexBox>
)

}

export default StarWarsPeople;
