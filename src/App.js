import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Prices from "./components/Price/Prices";
import Qualities from "./components/Qualities/Qualities";
import Reviews from "./components/Reviews/Reviews";
import Strategies from "./components/Strategies/Strategies";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Qualities />
        <Strategies />
        <Prices />
        <Reviews />
      </main>
    </>
  );
}

export default App;
