import { useState } from 'react';
import EditInfoButton from '../Buttons/EditInfoButton';
import SaveInfoButton from '../Buttons/SaveInfoButton';
import getRowSize from '../../helpers/mediaQgetRow';

const PersonalInfoRow = ({ labelName, value, onValueEdit, inputType = 'text', children }) => {
  const [editing, setEditing] = useState(false);
  const [rowValue, setValue] = useState(value);

  const rowSize = getRowSize();

  const handleEditModeToggle = () => {
    setEditing(!editing);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSaveInfo = () => {
    onValueEdit(labelName === undefined ? '' : labelName, rowValue);
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
    input = <textarea {...inputAttr} rows={rowSize} maxLength={120}></textarea>;
  }

  return (
    <div className={`info-row ${labelName}`}>
      {labelName !== undefined ? <label htmlFor={labelName}>{labelName + ':'}</label> : null}
      {input}
      <EditInfoButton onToggle={handleEditModeToggle}></EditInfoButton>
      <SaveInfoButton
        display={editing && rowValue !== value}
        onSave={handleSaveInfo}
      ></SaveInfoButton>
      {children}
    </div>
  );
};

export default PersonalInfoRow;
