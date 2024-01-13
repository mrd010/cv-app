const ExperienceRowContent = ({ position, start, end, isEditing, onRowSelection, onExpChange }) => {
  let pos = isEditing ? (
    <input
      id="position"
      value={position}
      onChange={(e) => onExpChange('position', e.target.value)}
    ></input>
  ) : (
    <span className="value">{position}</span>
  );
  let sDate = isEditing ? (
    <input id="from" value={start} onChange={(e) => onExpChange('start', e.target.value)}></input>
  ) : (
    <span className="value">{start}</span>
  );
  let eDate = isEditing ? (
    <input id="to" value={end} onChange={(e) => onExpChange('end', e.target.value)}></input>
  ) : (
    <span className="value">{end}</span>
  );

  return (
    <div onClick={onRowSelection}>
      <div className="info-field position">
        <label htmlFor="position">Position</label>
        {pos}
      </div>
      <div className="info-field start-date">
        <label htmlFor="start-date">From</label>
        {sDate}
      </div>
      <div className="info-field end-date">
        <label htmlFor="end-date">To</label>
        {eDate}
      </div>
    </div>
  );
};

export default ExperienceRowContent;
