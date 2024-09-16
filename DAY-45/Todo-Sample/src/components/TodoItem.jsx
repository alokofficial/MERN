import Button from "./Button"
import { AiOutlineDelete } from "react-icons/ai";

const TodoItem=({id, todoText, todoDate})=>{

  const deleteHandler = ()=>{
    console.log('item deleted')
  }
    return(
        <div className="container text-center mt-3">
          <div className="row">
            <div className="col-5 text-truncate">
              {todoText}
            </div>

            <div className="col-4">{todoDate}</div>
            <div className="col-3">
              <Button children={<AiOutlineDelete />} className="btn btn-danger" handler={deleteHandler}/>
            </div>
          </div>
        </div>
    )
}
export default TodoItem