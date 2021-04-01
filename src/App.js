import SpinningSquare from "./components/SpinningSquare";
import Menu from "./components/Menu";
import GestureBtn from "./components/GestureBtn";
import Drag from "./components/Drag";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpinningSquare />
        <Menu />
        <GestureBtn />
        <Drag />
      </header>
    </div>
  );
}

export default App;
