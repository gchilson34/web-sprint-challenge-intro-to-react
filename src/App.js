import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'





const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then(({data}) => setCharacters(data))
      .catch(err => console.log('Error getting characters: ', err))
  }, []);

  const Character = props => (
    <Container>
      {props.info.name}
    </Container>
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px;
  color: white;
  justify-content: space-between;
  font-size: 30px;
`
export default App;