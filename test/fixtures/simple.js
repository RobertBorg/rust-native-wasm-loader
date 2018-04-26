
export const run = async () => {
  const result = await import('./myrustlib/src/lib.rs');
  return result.add(1, 2);  
};

run().then((e) => console.log(e));
