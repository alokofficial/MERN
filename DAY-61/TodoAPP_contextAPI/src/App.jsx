import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
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
