/*
  实现 数组扁平化

 */

// 递归
const selfFlatten1 = (arr: any[]): any[] => {
  if (!arr?.length) {
    return;
  }
  const tempArr: any[] = [];
  const forArr = (iterArr: any[]) => {
    for (let i = 0; i < iterArr.length; i++) {
      const item = iterArr[i];
      if (Array.isArray(item)) {
        forArr(item);
        continue;
      }
      tempArr.push(item);
    }
  };
  forArr(arr);
  return tempArr;
};

// 只展开一次
const selfFlatten2 = (arr: any[]): any[] => {
  if (!arr?.length) {
    return;
  }
  let tempArr: any[] = [];
  arr.forEach((item) => {
    tempArr = tempArr.concat(item);
  });
  return tempArr;
};

// 展开多次
const selfFlatten3 = (arr: any[]): any[] => {
  if (!arr?.length) {
    return;
  }
  let tempArr: any[] = [];
  arr.forEach((item) => {
    if (!Array.isArray(item)) {
      tempArr = tempArr.concat(item);
    } else {
      const concatItem = selfFlatten3(item);
      tempArr = tempArr.concat(concatItem);
    }
  });
  return tempArr;
};

//  reduce
const selfFlatten4 = (arr: any[]) => {
  if (!arr?.length) {
    return;
  }
  const reduceArr = arr.reduce((preVal, curVal) => {
    console.log('curVal', preVal, curVal);
    if (!Array.isArray(curVal)) {
      return preVal.concat(curVal);
    }
    const currentVal = selfFlatten4(curVal);
    return preVal.concat(currentVal);
  }, []);
  return reduceArr;
};

//output
// const flat1 = selfFlatten1([1, [2, [6, 4], 8], 4, [343, 32]]);
// const flat3 = selfFlatten3([1, [2, [6, 4], 8], 4, [343, 32]]);
// const flat4 = selfFlatten4([1, [2, [6, 4], 8], 4, [343, 32]]);
// console.log('flatA-', flat4);

// 导出
export { selfFlatten1, selfFlatten2, selfFlatten3, selfFlatten4 };
