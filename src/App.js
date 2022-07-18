import "./index.scss";
import Sidenav from "./components/layout/Sidenav/Sidenav";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import PageRoutes from "./common/routes";
import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={styles.appContainer}>
          <Sidenav />
          <Header />
          <main className={styles.mainContent}>
            <PageRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
