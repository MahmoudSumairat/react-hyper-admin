import "./index.scss";
import Sidenav from "./components/layout/Sidenav/Sidenav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidenav />
      </div>
    </BrowserRouter>
  );
}

export default App;
