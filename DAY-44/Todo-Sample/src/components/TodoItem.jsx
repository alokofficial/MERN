import { AiOutlineDelete } from "react-icons/ai";
const TodoItem=({id, todoText, todoDate})=>{
    return(
        <div className="container text-center mt-3">
          <div className="row">
            <div className="col-5 text-truncate">
              {todoText}
            </div>

            <div className="col-4">{todoDate}</div>
            <div className="col-3">
              <button type="button" className="btn btn-danger">
                {<AiOutlineDelete />}
              </button>
            </div>
          </div>
        </div>
    )
}
export default TodoItem