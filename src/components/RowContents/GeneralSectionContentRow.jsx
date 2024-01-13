import { useState } from 'react';
import SkillRowContent from './SkillRowContent';
import EducationRowContent from './EducationRowContent';
import ExperienceRowContent from './ExperienceRowContent';
import ProjectRowContent from './ProjectRowContent';
import AwardRowContent from './AwardRowContent';
import EditInfoButton from '../Buttons/EditInfoButton';
import SaveInfoButton from '../Buttons/SaveInfoButton';
import RemoveItemButton from '../Buttons/RemoveItemButton';

const GeneralSectionContentRow = ({
  rowType,
  rowData,
  isSelected,
  onSaveContent,
  onRemoveItem,
  onRowSelection,
}) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(rowData);

  const handleSkillChange = (value) => {
    setValue(value);
  };
  const handleEducationChange = (key, newValue) => {
    setValue({ ...value, [key]: newValue });
  };
  const handleExperienceChange = (key, newValue) => {
    setValue({ ...value, [key]: newValue });
  };
  const handleProjectChange = (key, newValue) => {
    setValue({ ...value, [key]: newValue });
  };
  const handleAwardChange = (key, newValue) => {
    setValue({ ...value, [key]: newValue });
  };

  const saveEditBtn = !editing ? (
    <EditInfoButton onToggle={() => setEditing(true)}></EditInfoButton>
  ) : (
    <SaveInfoButton
      onSave={() => {
        onSaveContent(rowData.id, value);
        setEditing(false);
      }}
    ></SaveInfoButton>
  );

  const removeBtn = (
    <RemoveItemButton
      onPress={() => {
        onRemoveItem(rowData.id);
      }}
    ></RemoveItemButton>
  );

  const props = { ...value, isEditing: editing, onRowSelection: () => onRowSelection(rowData.id) };
  let content = null;
  switch (rowType) {
    case 'skill':
      content = <SkillRowContent {...props} onSkillChange={handleSkillChange}></SkillRowContent>;
      break;
    case 'education':
      content = (
        <EducationRowContent {...props} onEduChange={handleEducationChange}></EducationRowContent>
      );
      break;
    case 'experience':
      content = (
        <ExperienceRowContent
          {...props}
          onExpChange={handleExperienceChange}
        ></ExperienceRowContent>
      );
      break;
    case 'project':
      content = (
        <ProjectRowContent {...props} onPrjChange={handleProjectChange}></ProjectRowContent>
      );
      break;
    case 'award':
      content = <AwardRowContent {...props} onAwardChange={handleAwardChange}></AwardRowContent>;
      break;

    default:
      break;
  }

  return (
    <div
      className={`info-row ${isSelected ? 'selected' : ''}`}
      style={isSelected ? { backgroundColor: `gray` } : {}}
    >
      <div>{content}</div>
      {isSelected ? saveEditBtn : null}
      {isSelected ? removeBtn : null}
    </div>
  );
};

export default GeneralSectionContentRow;
