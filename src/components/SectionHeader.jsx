import MaterialIcon from './MaterialIcon';

const SectionHeader = ({ iconName, title }) => {
  return (
    <div className="section-header">
      <div className="icon">
        <MaterialIcon>{iconName}</MaterialIcon>
      </div>
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default SectionHeader;
