// @ts-nocheck

function testArguments1(a) {
  console.log('1--', this, arguments);
  return a + 10;
}

export function testArguments(a, b) {
  console.log(this);
  const obj = {
    test: {
      name: 'tst',
      getName: () => {
        console.log(this.name);
      },
    },
  };
  obj['test'].getName();
  // console.log('2---', this, arguments);
}

// testArguments();
// testArguments.apply({ name: '11222' }, [2, 3]);
