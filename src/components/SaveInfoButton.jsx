import MaterialIcon from './MaterialIcon';

const SaveInfoButton = ({ display, onSave }) => {
  return (
    <button
      type="button"
      className={`save-button ${display ? '' : 'inactive'}`}
      disabled={!display}
      onClick={onSave}
    >
      <MaterialIcon>save</MaterialIcon>
    </button>
  );
};

export default SaveInfoButton;
