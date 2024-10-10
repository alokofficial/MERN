import React, { useRef, useContext } from "react";
import Button from "./Button";
import { ClipboardPlus } from "lucide-react";
import { TodoContext } from "../store/TodoContext";

const AddTodo = () => {
  const { todoItem, setTodoItem } = useContext(TodoContext);

  const todoItemRef = useRef();
  const todoDateRef = useRef();
  const onClickHandler = () => {
    if (todoItemRef.current.value === "" || todoDateRef.current.value === "") {
      alert("Please Enter Todo and Date");
      return;
    }
    setTodoItem([
      ...todoItem,
      {
        id: Date.now(),
        todoText: todoItemRef.current.value,
        todoDate: todoDateRef.current.value,
      },
    ]);
    todoItemRef.current.value = "";
    todoDateRef.current.value = "";
  };

  return (
    <div className="container w-2/3 flex gap-2 justify-around  text-3xl p-4 ">
      <input
        className="p-3 rounded-lg"
        type="text"
        placeholder="enter todo..."
        ref={todoItemRef}
      ></input>
      <input className="p-3 rounded-lg" type="date" ref={todoDateRef}></input>
      <Button color="bg-green-600" onClick={onClickHandler}>
        <ClipboardPlus />
      </Button>
    </div>
  );
};

export default AddTodo;
