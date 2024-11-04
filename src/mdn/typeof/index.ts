// 获取数据类型

const getType = (data: any): string => {
  const originType = Object.prototype.toString.call(data); // '[Object String]'
  const emptyIndex = originType.indexOf(' ');
  const type = originType.slice(emptyIndex + 1, -1);
  return type.toLowerCase();
};

// const arr: any = { id: '232' };
// arr[Symbol.toStringTag] = 'myArray';

// console.log('t', arr[Symbol.toStringTag]);
// console.log('type--', getType(arr));
// console.log('type--', getType(null));
// console.log('type--', getType(Symbol('test')));
// console.log('type--', getType(new Date()));
// console.log('type--', getType(new Error()));

export { getType };
