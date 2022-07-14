import "./index.scss";
import Sidenav from "./components/layout/Sidenav/Sidenav";
import { BrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import PageRoutes from "./common/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-container">
          <Sidenav />
          <Header />
          <main className="main-content">
            <PageRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
