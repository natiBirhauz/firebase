import Route from "./components/routing/Route"
import Header from "./components/Header";
import "./components/layout/App.css";

function App() {
  return (
    <div className="login">
      <div className="container">
        <Header />
        <Route />
      </div>
    </div>
  );
}

export default App;