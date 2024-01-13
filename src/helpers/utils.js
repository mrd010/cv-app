const capitalize = function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

const singlizeNoun = function singlizeNoun(noun) {
  return noun.charAt(noun.length - 1) === 's' ? noun.slice(0, -1) : noun;
};

export { capitalize, singlizeNoun };
