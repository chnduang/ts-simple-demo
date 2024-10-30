/**
 * @description: 将一个数组旋转K 步
 * @return {*}
 */
//
/*
[1,2,3,4,5,6]

k=3 旋转3步

*/
const roateArray1 = (arr: number[], k: number): number[] => {
  const length = arr.length;
  console.log('init1', arr);
  if (!length || !k) {
    return arr;
  }

  const loop: number = Math.abs(k % length);

  for (let i = 0; i < loop; i++) {
    const popNumber = arr.pop();
    if (popNumber != null) {
      arr.unshift(popNumber);
    }
  }

  console.log('arr1--', arr);
  return arr;
};

const roateArray2 = (arr: number[], k: number): number[] => {
  const length = arr.length;
  console.log('init2', arr);
  if (!length || !k) {
    return arr;
  }

  const loop: number = Math.abs(k % length);

  const sliceArr = arr.slice(-loop);
  const restArr = arr.slice(0, length - loop);
  const arr2 = sliceArr.concat(restArr);
  console.log('arr2--', arr2);
  return arr2;
};
