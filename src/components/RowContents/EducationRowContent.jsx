const EducationRowContent = ({
  department,
  start,
  end,
  gpa,
  isEditing,
  onRowSelection,
  onEduChange,
}) => {
  let dep = isEditing ? (
    <input
      id="department"
      value={department}
      onChange={(e) => onEduChange('department', e.target.value)}
    ></input>
  ) : (
    <span className="value">{department}</span>
  );
  let sDate = isEditing ? (
    <input id="from" value={start} onChange={(e) => onEduChange('start', e.target.value)}></input>
  ) : (
    <span className="value">{start}</span>
  );
  let eDate = isEditing ? (
    <input id="to" value={end} onChange={(e) => onEduChange('end', e.target.value)}></input>
  ) : (
    <span className="value">{end}</span>
  );
  let g = isEditing ? (
    <input id="GPA" value={gpa} onChange={(e) => onEduChange('gpa', e.target.value)}></input>
  ) : (
    <span className="value">{gpa}</span>
  );

  return (
    <div onClick={onRowSelection}>
      <div className="info-field department">
        <label htmlFor="department">Department</label>
        {dep}
      </div>
      <div className="info-field start-date">
        <label htmlFor="start-date">From</label>
        {sDate}
      </div>
      <div className="info-field end-date">
        <label htmlFor="end-date">To</label>
        {eDate}
      </div>
      <div className="info-field gpa">
        <label htmlFor="gpa">GPA</label>
        {g}
      </div>
    </div>
  );
};

export default EducationRowContent;
