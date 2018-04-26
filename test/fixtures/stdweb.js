export const run = async () => {
  const result = await import('./mystdweblib/src/main.rs');
  return result.add('Hello, ', 'World!');
};

run().then((res) => console.log(res));