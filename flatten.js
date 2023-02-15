const flatten = function (array) {
  const flattenedArray = [];
  if (Array.isArray(array)) {
    return flattenedArray.concat(...array);
  } else {
    return `This is not an array`;
  }
};

module.exports = flatten;
