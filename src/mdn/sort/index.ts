const REPLACE_CODE = '$';

const selfSort = (arr: any[]) => {
  const sortArr: any = [];
  const noSortArr: any = [];
  arr.forEach((item) => {
    const fistCode = item.charCodeAt(0);
    if (49 <= fistCode && fistCode <= 57) {
      const splitArr = item.replace('-', REPLACE_CODE).split(REPLACE_CODE);
      sortArr.push(splitArr);
      return;
    }
    noSortArr.push(item);
  });
  const tempSortArr = sortArr
    .sort((a: any, b: any) => a[0] - b[0])
    .map((item: any) => item[1]);
  const resSortArr = tempSortArr.concat(noSortArr);
  console.log('sortArr', resSortArr);
  return resSortArr;
};

const arr = ['1-test', 'z-1-x', '10-dd-cc', '2-es', '12-qaaa', 'qwe', 'ere2'];

selfSort(arr);

export { selfSort };
