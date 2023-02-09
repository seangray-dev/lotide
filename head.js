const head = function (array) {
  if (array.length) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;
