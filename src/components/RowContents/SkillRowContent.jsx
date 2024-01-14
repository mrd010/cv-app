const SkillRowContent = ({ skill, isEditing, onSkillChange }) => {
  const content = isEditing ? (
    <textarea value={skill} rows={4} onChange={(e) => onSkillChange(e.target.value)}></textarea>
  ) : (
    <p>{skill}</p>
  );

  return <>{content}</>;
};

export default SkillRowContent;
