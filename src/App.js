// import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home";

import Homecontainer from "./containers/Homecontainer";

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <h3>
        <Homecontainer />
      </h3>
    </div>
  );
}

export default App;
