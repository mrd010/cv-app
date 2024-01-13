import capitalize from '../../helpers/utils';

const InputField = ({ labelName, value, inputType, onValueChange }) => {
  const input =
    inputType !== 'textarea' ? (
      <input type={inputType} id={labelName} onChange={onValueChange} value={value} />
    ) : (
      <textarea id={labelName} onChange={onValueChange} value={value}></textarea>
    );
  return (
    <div className={`input-field ${labelName}`}>
      <label htmlFor={labelName}>{capitalize(labelName)}</label>
      {input}
    </div>
  );
};

export default InputField;
