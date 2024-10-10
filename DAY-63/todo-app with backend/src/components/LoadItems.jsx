import React, { useContext, useEffect, useState } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import {todoItemToClient} from "../utils/ModelUtil";

const LoadItems = () => {
  const [loading, setLoading] = useState(false);
  const { todoItems, addAllTodoItem } = useContext(TodoItemsContext);

  useEffect(() => {
    setLoading(true);
    // const abortController = new AbortController();
    fetch("http://localhost:3000/todos", 
      // { signal: abortController.signal }
      )
      .then((response) => response.json())
      .then((items) => {
        const newItems = items.map(todoItemToClient);
        addAllTodoItem(newItems);
      })
      .finally(() => setLoading(false));
    // return () => abortController.abort();
  }, []);
  return (
    <>
      {loading ? (
        <div
          className="spinner-grow"
          style={{ width: "15rem", height: "15rem", margin: "5rem" }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      ) : (
        todoItems.length === 0 && <h1>Enjoy your day !!</h1>
      )}
    </>
  );
};

export default LoadItems;
