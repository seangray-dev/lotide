const flatten = function (array) {
  const flattenedArray = [];
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        flattenedArray.push(...flatten(array[i]));
      } else {
        flattenedArray.push(array[i]);
      }
    }
  } else {
    return `This is not an array`;
  }
  return flattenedArray;
};

module.exports = flatten;
