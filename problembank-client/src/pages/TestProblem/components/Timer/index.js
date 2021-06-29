import React, { useState, useEffect } from "react";
import '../../pages/DetailProblem/index';
import DetailProblem from '../../pages/DetailProblem/index';

var moment = require('moment');
export default function App(props) {
  var min = 0;
  if(props.level ==='상'){
    min = 20;
  }
  else if(props.level==='중'){
    min = 15;
  }
  else {
    min = 1;
  }

  let [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          alert("Time Up! 시험을 종료합니다. ");
          document.location.href="/AfterTest/"+ 0;
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);


  return (
    <div className="App">
      <h3>남은 시간은 {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h3>
    </div>
  );
}

