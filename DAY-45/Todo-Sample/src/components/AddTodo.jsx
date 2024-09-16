import Button from "./Button";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function AddTodo(){

  const addHandler=()=>{
    console.log('item added')
  }
    return (
        <div className="container text-center mt-3">
          <div className="row">
            <div className="col-5">
             
              <input
                type="text"
                className="form-control"
                placeholder="Enter Todo"
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div className="col-3">
              <Button children={<IoMdAddCircleOutline />} className="btn btn-success" handler={addHandler}/>
            </div>
          </div>   
        </div>
    )
}