// @ts-nocheck
// bind

function selfBind() {
  console.log('self');
}

Function.prototype.customBind = function (context: any, ...bindArgs: any[]) {
  const self = this; // 当前函数本身
  return function (...args: any[]) {
    // bind 中的参数和自己传的参数
    const _args = bindArgs.concat(args);
    return self.apply(context, _args);
  };
};

// function testFn(a, b, c) {
//   console.log('a-----', a, b, c);
// }

// const fnBind = testFn.customBind({ a: 10 }, 20, 30);
// fnBind(40);

export { selfBind };
