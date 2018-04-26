export const run = async () => {
  return import("./mywasmbindgenlib/src/lib.rs")
    .then(({add}) => add('Hello, ', 'World!'));
};

run().then((res) => console.log(res));