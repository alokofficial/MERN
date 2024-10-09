import {AddTodo,AppName,TodoItems} from "./components";
import { TodoItemsProvider } from "./store/TodoItemContext";

function App() {
  return (
    <TodoItemsProvider>
      <center>
        <AppName />
        <AddTodo />
        <TodoItems />
      </center>
    </TodoItemsProvider>
  );
}

export default App;
