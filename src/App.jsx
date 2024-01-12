import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import defaultCV from './data/defaultCV';

function App() {
  const [person, setPerson] = useState(defaultCV);
  return (
    <>
      <Header name={person.name} job={person.job}></Header>
    </>
  );
}

export default App;
