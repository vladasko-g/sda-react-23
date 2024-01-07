import { useEffect, useState } from "react";

export const useTodos = () => {
  const [page, setPage] = useState(1);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const url = `https://jsonplaceholder.typicode.com/todos?_page=${page}`;

      const response = await fetch(url);

      const todos = await response.json();

      setTodos(todos);
    };

    fetchTodos();
  }, [page]);

  return {
    setPage,
    page,
    finalPage: 20,
    todos,
  };
};
