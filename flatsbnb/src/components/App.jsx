import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
// import ReactMapGL from "react-map-gl";
import ReactMapboxGl from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import "./App.scss";

import Flat from "./Flat";
import flatJson from "../flats";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY29sbG90IiwiYSI6ImNsNHBramp1ejBmeWQzZWxuMnA3aDYxd3gifQ.928CCkKJj6SVOEeU24O5sw",
});

const API_URL =
  "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";

const App = () => {
  const [flats, setFlats] = useState(flatJson);

  useEffect(() => {
    document.title = `FlatsBnB App - ${flats.length} flats`;
  }, [flats]);

  useEffect(() => {
    fetch(API_URL)
      //  .then((data) => data.json())
      //  .then((json) => setFlats(json));
      .then((response) => response.json())
      .then((data) => setFlats(data));
  }, []);

  return (
    <div className="app">
      <div className="main">
        <input className="search" />
        <div className="flats">
          {flats.map(({ id, ...props }) => {
            return <Flat key={id} {...props} />;
          })}
        </div>
      </div>
      <div className="map">
        <Map
          zoom={[14]}
          center={[2.3522, 48.8566]}
          containerStyle={{ height: "100vh", width: "100%" }}
          style="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </div>
  );
};

export default App;
