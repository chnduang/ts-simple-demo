// @ts-nocheck
// apply call

function selfApply() {
  console.log('apply-call---');
}

Function.prototype.customCall = function (context: any, ...args: any[]) {
  if (context == null) {
    context = globalThis;
  }
  // 值类型的处理
  if (typeof context !== Object) {
    context = new Object(context);
  }
  // const obj = { key(){} };
  // 使用对象挂载的方式，修改this
  const fnSymbolKey = Symbol();
  context[fnSymbolKey] = this;
  const fnResult = context[fnSymbolKey](...args);
  return fnResult;
};

Function.prototype.customApply = function (context: any, args: any[]) {
  if (context == null) {
    context = globalThis;
  }
  // 值类型的处理
  if (typeof context !== Object) {
    context = new Object(context);
  }
  // const obj = { key(){} };
  // 使用对象挂载的方式，修改this
  const fnSymbolKey = Symbol();
  context[fnSymbolKey] = this;
  const fnResult = context[fnSymbolKey](...args);
  return fnResult;
};

// function fn(a, b, c) {
//   console.log(this, a, b, c);
// }

// fn.customCall({ x: 10 }, 10, 2);

export { selfApply };
