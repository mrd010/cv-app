import { useState } from 'react';
import EditInfoButton from './EditInfoButton';
import SaveInfoButton from './SaveInfoButton';

const PersonalInfoRow = ({ labelName, value, onValueEdit, inputType = 'text' }) => {
  const [editing, setEditing] = useState(false);
  const [rowValue, setValue] = useState(value);

  const handleEditModeToggle = () => {
    setEditing(!editing);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSaveInfo = () => {
    // console.log('eee');
    onValueEdit(labelName, rowValue);
    setEditing(false);
  };

  const inputAttr = {
    name: labelName,
    id: labelName,
    className: editing ? '' : 'disabled',
    value: rowValue,
    disabled: !editing,
    onChange: handleValueChange,
  };

  let input;
  if (inputType !== 'textarea') {
    input = <input type={inputType} {...inputAttr} />;
  } else if (inputType === 'textarea') {
    input = <textarea {...inputAttr} rows="5"></textarea>;
  }

  return (
    <div>
      <label htmlFor={labelName}>{labelName.toUpperCase()}</label>
      {input}
      <EditInfoButton onToggle={handleEditModeToggle}></EditInfoButton>
      <SaveInfoButton
        display={editing && rowValue !== value}
        onSave={handleSaveInfo}
      ></SaveInfoButton>
    </div>
  );
};

export default PersonalInfoRow;
