const MaterialIcon = ({ children }) => {
  const iconType = 'rounded';
  return <span className={`material-symbols-${iconType}`}>{children}</span>;
};

export default MaterialIcon;
