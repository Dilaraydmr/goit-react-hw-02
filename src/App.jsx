import React from 'react'
import Feedback from "../src/components/Feedback/Feedback";
import Options from "../src/components/Options/Options";
import Notification from "../src/components/Notification/Notification";
import Description from "../src/components/Description/Description";
import "./App.css";

function App() {


  return (
    <div className="App">

      <Description />
      <Options />
      <Feedback />
      <Notification />

    </div>
  );
}

export default App;
