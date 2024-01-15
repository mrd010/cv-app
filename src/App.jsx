import { useState } from 'react';
import Header from './components/Header';
import defaultCV from './data/defaultCV';
import PersonalInfo from './components/PersonalInfo';
import 'material-symbols/rounded.css';
import GeneralSection from './components/GeneralSection';
import './App.scss';
import './MedQMobile.scss';
import './MediaQTablet.scss';
import './MediaQLaptop.scss';
import { capitalize } from './helpers/utils';
import getRowSize from './helpers/mediaQgetRow';

getRowSize();

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
