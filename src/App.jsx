import { useState } from 'react';
import Header from './components/Header';
import defaultCV from './data/defaultCV';
import PersonalInfo from './components/PersonalInfo';
import 'material-symbols/rounded.css';
import GeneralSection from './components/GeneralSection';
import './App.scss';
import './media481.scss';
import './media768.scss';
import { capitalize } from './helpers/utils';

function App() {
  const [person, setPerson] = useState({ name: defaultCV.name, job: defaultCV.job });

  const handleHeaderChange = (labelName, newValue) => {
    setPerson({ ...person, [labelName]: newValue });
  };

  document.title = `${capitalize(person.name)} Resume`;

  return (
    <>
      <Header name={person.name} job={person.job}></Header>
      <main className="main">
        <PersonalInfo
          name={person.name}
          job={person.job}
          onHeaderInfoEdit={handleHeaderChange}
        ></PersonalInfo>
        <GeneralSection sectionName="skills"></GeneralSection>
        <GeneralSection sectionName="education"></GeneralSection>
        <GeneralSection sectionName="experience"></GeneralSection>
        <GeneralSection sectionName="projects"></GeneralSection>
        <GeneralSection sectionName="awards"></GeneralSection>
      </main>
    </>
  );
}

export default App;
