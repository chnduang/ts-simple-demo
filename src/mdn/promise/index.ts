const tempPromise = () => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
};

export const proFunc = async () => {
  const res = await tempPromise;
};

Promise.all([]).then((res) => {
  console.log('res', res);
});

// for await (let res of  promiseAll) {

// }
