import React from 'react';
import SWCards from '../components/SWCards';
import styled from 'styled-components';

const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px;
  flex-wrap: wrap;
`;

const SWCharacters = (props) => {
return (
  <DivFlex>
    {
      props.cData.map((char, index) => <SWCards key = {index} cObject = {char} />)
    }
  </DivFlex>
  )
}


export default SWCharacters;
