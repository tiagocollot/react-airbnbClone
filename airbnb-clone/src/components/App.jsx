import "bootstrap/dist/css/bootstrap.css";

import "./App.scss";

import Flat from "./Flat";
import json from "../flats"

const App = () => {
  const [flats ,setFlats] = useState(json);
  return (
    <div className="app">
      <div className="main">
        <input className="search" />
        <div className="flats">
          {flats.map((id, ...props) => {
            return <Flat key={id} {...props} />
          })}
          {/* <Flat
            price={380}
            name="Beautiful Flat"
            image="https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"
          />
          <Flat
            price={430}
            name="Terrible Flat"
            image="https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"
          />
          <Flat
            price={400}
            name="River view flat near the shore"
            image="https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"
          /> */}
        </div>
      </div>
      <div className="map"></div>
    </div>
  );
};

export default App;
