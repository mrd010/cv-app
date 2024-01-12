import MaterialIcon from './MaterialIcon';

const EditInfoButton = ({ onToggle }) => {
  return (
    <button type="button" className="edit-button" onClick={onToggle}>
      <MaterialIcon>edit</MaterialIcon>
    </button>
  );
};

export default EditInfoButton;
