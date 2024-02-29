const calculateNumber = (type, a, b) => {
  if(type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if(type === 'SUB') {
    return Math.round(a) - Math.round(b);
  }
  if(type === 'DIV') {
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
  return 0;
};

module.exports = calculateNumber;
