const without = function (source, itemsToRemove) {
  return source.filter((item) => {
    return !itemsToRemove.includes(item);
  });
};

module.exports = without;
