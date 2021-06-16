const idChecker = (array, product) => {
  const found = array.some((item) => item._id === product._id);
  return found;
};

export default idChecker;
