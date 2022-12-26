import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./header"
import SubHeader from "./subheader"
import Content from "./content"

function App() {

  const [ data, setData ] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then( res => {
      setData(res.data);
      console.log("data retrieved");
    }).catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <Header />
      <SubHeader title={data.title} date={data.date} />
      <Content 
        copyright={data.copyright}
        url={data.hdurl}
      />
    </div>
  );
}

export default App;
