import { useState } from 'react';
import PersonalInfoRow from './RowContents/PersonalInfoRow';
import SectionHeader from './SectionHeader';
import defaultCV from '../data/defaultCV';
import ContactInfo from './ContactInfo';

const PersonalInfo = ({ name, job, onHeaderInfoEdit }) => {
  const initialInfo = { birthday: defaultCV.birthday, objective: defaultCV.objective };
  const [personalInfo, setPersonalInfo] = useState(initialInfo);

  const handlePersonalInfoEdit = ([label], value) => {
    setPersonalInfo({ ...personalInfo, [label]: value });
  };

  return (
    <section className="personal">
      <SectionHeader iconName="person" title="Personal"></SectionHeader>
      <div className="section-content">
        <PersonalInfoRow
          labelName="name"
          value={name}
          onValueEdit={onHeaderInfoEdit}
        ></PersonalInfoRow>
        <PersonalInfoRow
          labelName="job"
          value={job}
          onValueEdit={onHeaderInfoEdit}
        ></PersonalInfoRow>
        <PersonalInfoRow
          labelName="birthday"
          value={personalInfo.birthday}
          onValueEdit={handlePersonalInfoEdit}
          inputType="date"
        ></PersonalInfoRow>
        <PersonalInfoRow
          labelName="objective"
          value={personalInfo.objective}
          onValueEdit={handlePersonalInfoEdit}
          inputType="textarea"
        ></PersonalInfoRow>
        <ContactInfo></ContactInfo>
      </div>
    </section>
  );
};

export default PersonalInfo;
