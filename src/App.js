import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
// import { Character } from './Character'




const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then(({data}) => setCharacters(data))
      .catch(err => console.log('Error getting characters: ', err))
  }, []);

  const Character = props => (
    <div className='character'>
      {props.info.name}
    </div>
  )

 
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(char => {
          return <Character key={char.id} info={char} />
        }
          )
      }
    </div>
  );
}

export default App;
