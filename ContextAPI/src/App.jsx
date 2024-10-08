import { Button,Header } from "./components";
import {ThemeProvider} from "./store/ThemeContext";
const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Button />
    </ThemeProvider>
  );
};

export default App;
