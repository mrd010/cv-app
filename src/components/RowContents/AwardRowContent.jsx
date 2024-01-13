const AwardRowContent = ({ title, date, isEditing, onRowSelection, onAwardChange }) => {
  let dep = isEditing ? (
    <input
      id="title"
      value={title}
      onChange={(e) => onAwardChange('title', e.target.value)}
    ></input>
  ) : (
    <span className="value">{title}</span>
  );
  let d = isEditing ? (
    <input id="from" value={date} onChange={(e) => onAwardChange('date', e.target.value)}></input>
  ) : (
    <span className="value">{date}</span>
  );

  return (
    <div onClick={onRowSelection}>
      <div className="info-field title">
        <label htmlFor="title">Title</label>
        {dep}
      </div>
      <div className="info-field date-date">
        <label htmlFor="date">Year</label>
        {d}
      </div>
    </div>
  );
};

export default AwardRowContent;
