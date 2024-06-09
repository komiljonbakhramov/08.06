import Header from "./components/Header/Header";
import Products from "./components/Main/MainProducts";
import "./styles/css/main.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <Products />
      </div>
    </>
  );
}

export default App;
