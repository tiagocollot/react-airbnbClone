import "./App.scss"

import Flat from "./Flat";

const App = () => {
    return (
      <div className="app">
        <div className="main">
          <input className="search"/>
          <div className="flats">
            <Flat/>
            <Flat/>
            <Flat/>
          </div>
        </div>
        <div className="map"></div>
      </div>
    );
  }


export default App;
