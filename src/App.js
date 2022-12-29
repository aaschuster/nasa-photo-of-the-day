import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import "./App.css";
import Header from "./header"
import SubHeader from "./subheader"
import Content from "./content"
import dummyData from "./dummydata"

function App() {

  const [ data, setData ] = useState({});

  useEffect(() => {
    setData(dummyData);
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then( res => {
      setData(res.data);
      console.log("data retrieved");
    }).catch(err => {
      console.log(err);
    });
  }, [])

  const StyledSmallText =  styled.p`
    font-style: italic;
    font-size: 0.8rem;
    color: dimgray;
`

  return (
    <div className="App">
      <Header />
      <SubHeader title={data.title} date={data.date} StyledSmallText={StyledSmallText} />
      <Content 
        copyright={data.copyright}
        url={data.hdurl}
        StyledSmallText={StyledSmallText}
      />
    </div>
  );
}

export default App;
