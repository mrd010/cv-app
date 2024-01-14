const capitalize = function capitalize(str) {
  return str
    .split(' ')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ');
};

const singlizeNoun = function singlizeNoun(noun) {
  return noun.charAt(noun.length - 1) === 's' ? noun.slice(0, -1) : noun;
};

export { capitalize, singlizeNoun };
