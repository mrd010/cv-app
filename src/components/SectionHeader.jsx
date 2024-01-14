import MaterialIcon from './Icons/MaterialIcon';

const SectionHeader = ({ iconName, title, onToggle }) => {
  return (
    <div
      className="section-header"
      onClick={() => {
        if (title !== 'Personal') {
          onToggle();
        }
      }}
    >
      <div className="icon">
        <MaterialIcon>{iconName}</MaterialIcon>
      </div>
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default SectionHeader;
