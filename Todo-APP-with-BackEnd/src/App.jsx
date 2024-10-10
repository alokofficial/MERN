import { AddTodo, AppName, TodoItems } from "./components";
import { TodoContextProvider } from "./store/TodoContext";
function App() {
  return (
  <TodoContextProvider>
      <center>
        <AppName />
        <AddTodo  />
        <TodoItems />
      </center>
    </TodoContextProvider>
  );
}
export default App;
