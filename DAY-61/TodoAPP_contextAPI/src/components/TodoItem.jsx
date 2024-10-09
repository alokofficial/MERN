import { useContext } from "react";
import Button from "./Button";
import { TodoItemsContext } from "../store/TodoItemContext";

const TodoItem = ({ id, todoText, todoDate}) => {
  const {deleteTodoItem}=useContext(TodoItemsContext)

  const deleteHandler = () => {
    deleteTodoItem(id);
    
  }

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-5 text-truncate">{todoText}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-2">
          <Button btnType="danger" btnText="Delete" handler={deleteHandler} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;