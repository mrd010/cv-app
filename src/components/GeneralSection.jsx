import { useState } from 'react';
import SectionHeader from './SectionHeader';
import MaterialIcon from './Icons/MaterialIcon';
import GeneralSectionContent from './SectionContents/GeneralSectionContent';

const GeneralSection = ({ sectionName }) => {
  const [visible, setVisibility] = useState(true);

  let icon;
  switch (sectionName) {
    case 'skills':
      icon = 'brush';
      break;
    case 'education':
      icon = 'school';
      break;
    case 'experience':
      icon = 'work';
      break;
    case 'projects':
      icon = 'psychology';
      break;
    case 'awards':
      icon = 'trophy';
      break;

    default:
      break;
  }
  return (
    <div className={`general-section ${sectionName}`}>
      <SectionHeader iconName={icon} title={sectionName}></SectionHeader>
      <GeneralSectionContent display={visible} sectionName={sectionName}></GeneralSectionContent>
      <button
        onClick={() => {
          setVisibility(!visible);
        }}
      >
        <MaterialIcon>{visible ? 'expand_less' : 'expand_more'}</MaterialIcon>
      </button>
    </div>
  );
};

export default GeneralSection;
