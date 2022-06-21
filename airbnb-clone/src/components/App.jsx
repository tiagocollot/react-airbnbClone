import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import "./App.scss";

import Flat from "./Flat";
import flatJson from '../flats';

const API_URL =
  "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";

const App = () => {
  const [flats, setFlats] = useState(flatJson);

  useEffect(() => {
    document.title = `Airbnb App - ${flats.length} flats`;
  },[flats]);

 useEffect(() => {
   fetch(API_URL)
     .then((data) => data.json())
     .then((json) => setFlats(json));
 }, []);

  return (
    <div className="app">
      <div className="main">
        <input className="search" />
        <div className="flats">
          {flats.map(({ id, ...props }) => {
            return <Flat key={id} {...props} />
          })}

        </div>
      </div>
      <div className="map"></div>
    </div>
  );
};

export default App;
