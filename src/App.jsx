import { useState } from 'react';
import Header from './components/Header';
import defaultCV from './data/defaultCV';
import PersonalInfo from './components/PersonalInfo';
import 'material-symbols/rounded.css';

function App() {
  const [person, setPerson] = useState({ name: defaultCV.name, job: defaultCV.job });

  const handleHeaderChange = (labelName, newValue) => {
    setPerson({ ...person, [labelName]: newValue });
    console.log(person);
  };

  return (
    <>
      <Header name={person.name} job={person.job}></Header>
      <main className="main">
        <PersonalInfo
          name={person.name}
          job={person.job}
          onHeaderInfoEdit={handleHeaderChange}
        ></PersonalInfo>
      </main>
    </>
  );
}

export default App;
