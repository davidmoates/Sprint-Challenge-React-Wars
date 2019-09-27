import React from 'react';
import styled from 'styled-components';



export default function SWCards(props) {

  const DivFlex = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
  `;

  const DivCard = styled.div`
    background: rgba(0, 0, 0, 0.6);
    width: 20%;
    height: auto;
    margain: 5%;
  `;

  const SWH2 = styled.h2`
    color: white;
    text-height: 15px;
  `;

  const SWli = styled.li`
    color: white;
    text-height: 15px;
  `;

  return (
    <DivFlex>
      <DivCard>
        <SWH2>{props.nameOf}</SWH2>
        <ul>
          <SWli>Height: {props.heightOf}</SWli>
          <SWli>Weight: {props.massOf}</SWli>
          <SWli>Hair Color: {props.hairOf}</SWli>
          <SWli>Birth Year: {props.birthOf}</SWli>
        </ul>
      </DivCard>
      <DivCard>
        <SWH2>{props.nameOf}</SWH2>
        <ul>
          <SWli>Height: {props.heightOf}</SWli>
          <SWli>Weight: {props.massOf}</SWli>
          <SWli>Hair Color: {props.hairOf}</SWli>
          <SWli>Birth Year: {props.birthOf}</SWli>
        </ul>
      </DivCard>
    </DivFlex>

  )
}
