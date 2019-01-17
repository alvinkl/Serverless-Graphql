export const getTodo = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  const data = await res.json();

  return data;
};

export const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  const data = await res.json();

  return data;
};
