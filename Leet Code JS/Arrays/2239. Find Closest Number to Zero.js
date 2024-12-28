var findClosest = function (arr) {
  let distanceMap = {};

  let distance;

  for (let val of arr) {
    distance = Math.abs(val);

    distanceMap[val] = distance;
  }

  console.log(distanceMap);

  let minValue = Infinity;
  let closest = null;

  for (let key in distanceMap) {
    let value = distanceMap[key];

    if (value < minValue || (value === minValue && key > closest)) {
      minValue = value;
      closest = key;
    }
  }

  return parseInt(closest, 10);
};

console.log(findClosest([-10, 10, 10, 10]));
