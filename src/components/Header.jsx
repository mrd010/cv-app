const Header = ({ name, job }) => {
  return (
    <header className="header">
      <h1 className="header-name">
        <span className="title-name">{name}</span>
        <span className="title-suffix"> CV</span>
      </h1>
      <h2 className="header-job">{job}</h2>
    </header>
  );
};

export default Header;
