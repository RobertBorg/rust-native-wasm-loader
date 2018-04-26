export const run = async () => {
  const {add} = await import('./mywasmbindgenlib/src/lib.rs');
  return add('Hello, ', 'World!');
};

run().then((res) => console.log(res));
