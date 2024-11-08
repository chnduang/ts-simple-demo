export const outPut1 = () => {
  console.log(
    'prototype',
    console.log.call.call.call.call.apply((a: any) => a + 3, [2, 4]),
  );
};

// fn.apply()
// outPut1();
