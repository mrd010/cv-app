import MaterialIcon from '../Icons/MaterialIcon';

const EditInfoButton = ({ onToggle, hasText = false }) => {
  const btnText = hasText ? <span>Edit</span> : null;
  return (
    <button type="button" className="edit-button" onClick={onToggle}>
      {btnText}
      <MaterialIcon>edit</MaterialIcon>
    </button>
  );
};

export default EditInfoButton;
