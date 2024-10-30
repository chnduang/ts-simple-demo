export const outPut1 = () => {
  console.log(
    'prototype',
    console.log.call.call.call.call.apply((a: any) => a, [2, 4]),
  );
};

outPut1();
