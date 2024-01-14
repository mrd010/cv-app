import { useState } from 'react';
import SectionHeader from './SectionHeader';
import MaterialIcon from './Icons/MaterialIcon';
import GeneralSectionContent from './SectionContents/GeneralSectionContent';

const GeneralSection = ({ sectionName }) => {
  const [visible, setVisibility] = useState(false);

  const handleChangeVisibility = () => {
    setVisibility(!visible);
  };

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
    <section className={`general-section ${sectionName}`}>
      <SectionHeader
        iconName={icon}
        title={sectionName}
        onToggle={handleChangeVisibility}
      ></SectionHeader>
      <GeneralSectionContent display={visible} sectionName={sectionName}></GeneralSectionContent>
      <button
        className="show-hide-button"
        onClick={() => {
          setVisibility(!visible);
        }}
      >
        <MaterialIcon>{visible ? 'expand_less' : 'expand_more'}</MaterialIcon>
      </button>
    </section>
  );
};

export default GeneralSection;
