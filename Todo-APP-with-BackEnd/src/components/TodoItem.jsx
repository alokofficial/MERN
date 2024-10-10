import React, { useContext } from "react";
import Button from "./Button";
import { Trash2 } from "lucide-react";
import { TodoContext } from "../store/TodoContext";

const TodoItem = ({ item }) => {
  const { todoItem, setTodoItem } = useContext(TodoContext);

  const onDeleteHandler = () => {
    setTodoItem(todoItem.filter((todo) => todo.id !== item.id));
  };

  return (
    <div className="container flex gap-2 items-center text-2xl my-2 justify-between w-8/12 text-left px-5">
      <p className="w-6/12">{item.todoText}</p>
      <p>{item.todoDate}</p>
      <Button color="bg-red-600 py-4" onClick={onDeleteHandler}>
        <Trash2 />
      </Button>
    </div>
  );
};

export default TodoItem;
