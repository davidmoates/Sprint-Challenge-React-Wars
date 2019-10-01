import React from 'react';
import styled from 'styled-components';



const DivCard = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 30%;
  height: auto;
  margin: 10px;
`;

const SWH2 = styled.h2`
  color: white;
  text-height: 15px;
`;

const SWli = styled.li`
  color: white;
  text-height: 15px;
`;

const SWCards = (props) => {

  return (

      <DivCard>
        <SWH2>{props.cObject.name}</SWH2>
        <ul>
          <SWli>Height: {props.cObject.height}</SWli>
          <SWli>Weight: {props.cObject.mass}</SWli>
          <SWli>Hair Color: {props.cObject.hair_color}</SWli>
          <SWli>Hair Color: {props.cObject.eye_color}</SWli>
          <SWli>Birth Year: {props.cObject.birth_year}</SWli>
        </ul>
      </DivCard>

  )
}

export default SWCards;
