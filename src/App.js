import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./header"
import Content from "./content"

function App() {

  const [ data, setData ] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then( res => {
      setData(res.data);
    }).catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <Header />
      <Content 
        copyright={data.copyright}
        date={data.date}
        url={data.hdurl}
        mediaType={data["media_type"]}
        title={data.title} 
      />
    </div>
  );
}

export default App;
