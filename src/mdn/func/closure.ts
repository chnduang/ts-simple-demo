//  闭包

// @ts-nocheck

function createClosure(x, y) {
  const a = 'test';
  const clos = function () {
    const test = {
      a,
    };
    console.log('this', this, test, y);
    return test;
  };
  return clos();
}
// console.log('----', createClosure(1, 2));

export { createClosure };
