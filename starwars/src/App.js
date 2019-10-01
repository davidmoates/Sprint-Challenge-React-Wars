import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import SWCharacters from './components/SWCharacters';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const[dataSW, setDataSW] = useState([]);

  console.log(dataSW);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
      console.log(response);
      const carData = response.data.results;//had to set this const to be able to map over since results characteristics were to deep
      setDataSW(carData);


    })
    .catch(error => {
      console.log("Error:", error);
    })
  },[])



  return (

    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SWCharacters cData = {dataSW} />
    </div>
  );
}

export default App;
