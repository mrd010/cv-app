const getRowSize = function getRowSize() {
  if (window.innerWidth < 481) {
    return 5;
  } else if (window.innerWidth < 769) {
    return 3;
  } else return 2;
};

export default getRowSize;
