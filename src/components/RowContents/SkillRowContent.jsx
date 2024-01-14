const SkillRowContent = ({ skill, isEditing, onRowSelection, onSkillChange }) => {
  const content = isEditing ? (
    <textarea value={skill} rows={4} onChange={(e) => onSkillChange(e.target.value)}></textarea>
  ) : (
    <p onClick={onRowSelection}>{skill}</p>
  );
  return <>{content}</>;
};

export default SkillRowContent;
