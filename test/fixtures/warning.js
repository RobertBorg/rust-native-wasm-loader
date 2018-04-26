export const run = async () => {
  const result = await import('./mywarninglib/src/lib.rs');
  return result.add(1, 2);
};

run().then((res) => console.log(res));