import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./AppContainer/AppContainer";

function App() {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
}

export default App;
