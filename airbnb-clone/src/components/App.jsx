import "./App.scss";

import Flat from "./Flat";

const App = () => {
    return (
      <div className="app">
        <div className="main">
          <input className="search"/>
          <div className="flats">
            <Flat price={100} name="Beautiful Flat"/>
            <Flat price={98} name="Terrible Flat"/>
            <Flat price={10} name="River view flat near the shore"/>
          </div>
        </div>
        <div className="map"></div>
      </div>
    );
  }


export default App;
