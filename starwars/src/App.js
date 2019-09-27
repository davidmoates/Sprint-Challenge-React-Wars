import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import SWCards from './components/reactWarCards';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const[nameSW, setNameSW] = useState();
  const[heightSW, setHeightSW] = useState();
  const[massSW, setMassSW] = useState();
  const[birthSW, setBirthSW] = useState();
  const[hairSW, setHairSW] = useState();

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
      console.log(response);
      const carData = response.data.results;//had to set this const to be able to map over since results characteristics were to deep

      carData.map(infoSW => { //made new array to access charateristics

      const carName = infoSW.name;
      setNameSW(carName);

      const carHeight = infoSW.height;
      setHeightSW(carHeight);

      const carMass = infoSW.mass;
      setMassSW(carMass);

      const carBirth = infoSW.birth_year;
      setBirthSW(carBirth);

      const carHair = infoSW.hair_color;
      setHairSW(carHair);

      })


    })
    .catch(error => {
      console.log("Error:", error);
    })
  },[])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SWCards nameOf={nameSW} />
    </div>
  );
}

export default App;
