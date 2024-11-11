// 找数组中和为指定值的数组对

function arrayFindPairs(arr: any[], target: number) {
  let result = [];
  let seen = new Set();

  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      result.push([num, complement]);
    }

    seen.add(num);
  }

  return result;
}

// const arr = [1, 2, 4, 3, 5, 7, 8, 9];
// const target = 10;

// console.log(arrayFindPairs(arr, target));

export { arrayFindPairs };
