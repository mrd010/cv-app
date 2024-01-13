const ProjectRowContent = ({ title, start, end, isEditing, onRowSelection, onPrjChange }) => {
  let tit = isEditing ? (
    <input id="title" value={title} onChange={(e) => onPrjChange('title', e.target.value)}></input>
  ) : (
    <span className="value">{title}</span>
  );
  let sDate = isEditing ? (
    <input id="from" value={start} onChange={(e) => onPrjChange('start', e.target.value)}></input>
  ) : (
    <span className="value">{start}</span>
  );
  let eDate = isEditing ? (
    <input id="to" value={end} onChange={(e) => onPrjChange('end', e.target.value)}></input>
  ) : (
    <span className="value">{end}</span>
  );

  return (
    <div onClick={onRowSelection}>
      <div className="info-field title">
        <label htmlFor="title">Title</label>
        {tit}
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

export default ProjectRowContent;
