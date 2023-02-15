function findKeyByValue(obj, value) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKeyByValue;
