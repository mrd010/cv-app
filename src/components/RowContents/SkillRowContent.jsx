import getRowSize from '../../helpers/mediaQgetRow';

const SkillRowContent = ({ skill, isEditing, onSkillChange }) => {
  const rowSize = getRowSize();
  const content = isEditing ? (
    <textarea
      value={skill}
      rows={rowSize}
      onChange={(e) => onSkillChange(e.target.value)}
    ></textarea>
  ) : (
    <p>{skill}</p>
  );

  return <>{content}</>;
};

export default SkillRowContent;
