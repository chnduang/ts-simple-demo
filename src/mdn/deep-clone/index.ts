// 深拷贝

// weekMap 避免循环引用
function deepClone(obj: any, map = new WeakMap()): any {
  // 值类型
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  // 避免循环引用
  const objFromMap = map.get(obj);
  if (objFromMap) {
    return objFromMap;
  }
  let target: any = {};
  map.set(obj, target);

  // map
  if (obj instanceof Map) {
    target = new Map();
    obj.forEach((val, key) => {
      const valClone = deepClone(val, map);
      const keyClone = deepClone(key, map);
      target.set(keyClone, valClone);
    });
  }
  // set
  if (obj instanceof Set) {
    target = new Set();
    obj.forEach((val) => {
      const valClone = deepClone(val, map);
      target.add(valClone);
    });
  }
  // array
  if (obj instanceof Array) {
    target = obj.map((item) => deepClone(item, map));
  }
  // Object
  for (const key in obj) {
    const val = obj[key];
    const valClone = deepClone(val, map);
    target[key] = valClone;
  }
  return target;
}

// const testObj = {
//   x: 1,
//   y: 2,
//   '1': [{ a: 2, b: 3 }, { c: 1 }],
//   set: new Set([10, 20, 30]),
//   map: new Map([
//     ['x', 10],
//     ['y', 20],
//   ]),
// };

// const testObj = new Map([
//   ['x', 10],
//   ['y', 20],
// ]);

// console.log('deep-clone',deepClone(testObj))

export { deepClone };
