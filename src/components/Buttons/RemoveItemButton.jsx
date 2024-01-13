import MaterialIcon from '../Icons/MaterialIcon';

const RemoveItemButton = ({ onPress }) => {
  return (
    <button type="button" className="remove-button" onClick={onPress}>
      <MaterialIcon>remove</MaterialIcon>
    </button>
  );
};

export default RemoveItemButton;
