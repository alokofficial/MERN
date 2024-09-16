import AddTodo from "./components/AddTodo";
import Heading from "./components/Heading";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  
  return (
    <>
      <center>
        <Heading />
        <AddTodo />
        <TodoItems />
      </center>
    </>
  );
}

export default App;
