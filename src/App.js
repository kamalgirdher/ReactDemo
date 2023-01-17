import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  let timex = new Date().toLocaleTimeString();
  
  const [ctime2, setTime2] = useState(timex);

  let newTime2 = new Date().toLocaleTimeString();

  useEffect(
    setTimeout(() => {
        console.log('Here');
      setTime2(newTime2);
    }, 1000),
    [ctime2]
  );

  return (
    <>
      <span>{ctime}</span>
      <span>{ctime2}</span>
    </>
  );
};

export default App;
