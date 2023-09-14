import funkoImage from "./images/KirbyFunko.png";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header className=""></header>
      <body className="App-body">
        <Nav />
        <img src={funkoImage} className="kirby-logo" alt="logo" />
        <p className="Secondary-teal boxy">Howdy! My name is</p>
        <h1 className="Primary-white boxy">Patrick Kirby</h1>
      </body>
    </div>
  );
}

export default App;
