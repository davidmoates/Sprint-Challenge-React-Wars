import React from 'react';
import styled from 'styled-components';

const Person = styled.div`
  background: rgba(255, 256, 255, 0.5);
  width: 20%;
  height: auto;
  margin: 10px;
`;

const Name = styled.h2`
  color: black;
  text-height: 20px;
`;

const NoBullets = styled.ul`
  list-style-type: none;

`

const PersonTrait = styled.li`
  color: black;
  text-height: 10px;
  text-align: left;
`;



const StarWarsCard = (props) => {

  return (
    <Person>
      <Name>{props.person.name}</Name>
      <NoBullets>
        <PersonTrait>Year Born:  {props.person.birth_year}</PersonTrait>
        <PersonTrait>Height:  {props.person.height}</PersonTrait>
        <PersonTrait>Weight:  {props.person.mass}</PersonTrait>
        <PersonTrait>Hair Color:  {props.person.hair_color}</PersonTrait>
        <PersonTrait>Eye Color:  {props.person.eye_color}</PersonTrait>
      </NoBullets>

    </Person>
  )

}

export default StarWarsCard;
