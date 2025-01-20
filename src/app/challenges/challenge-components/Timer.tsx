"use client";
import { useState } from "react";

/* 
to solve this problem we just need to keep count of seconds:
If we can increase the value of a variably by one every second, we just have to handle the display logic:

second=60 -> show one minute

second=90 -> one minute and 30 seconds

At some point you should come up with functions:

1) increase fn -> increase the value of a variable by one every second

2) display fn -> input: a number of seconds -> output: minutes and seconds
*/
const Timer = () => {
  /*
    We need a while loop based on a stateful variable:
    while(state){setSeconds}

    the initial state value will be false.
    ON click, the state var will be true
    while(false) -> while(true)
    */
  const [seconds, setSeconds] = useState(0);
  const [loop, setLoop] = useState(false);
  let intervalId: undefined | NodeJS.Timeout = undefined;
  function recursiveLoop(done: boolean) {
    if (!done) {
      return;
    }
    const lol = new Promise((_) => setTimeout(setSeconds, 1000, seconds + 1));
    lol.then((_) => recursiveLoop(loop));
  }
  recursiveLoop(loop);
  return (
    <div>
      <h3>Timer</h3>
      <button
        onClick={() => {
          console.log("clicked");
          setLoop(true);
        }}
      >
        START
      </button>
      <p>**********</p>
      <button onClick={() => setLoop(false)}>STOP</button>
      <p>**********</p>
      <button
        onClick={() => {
          setLoop(false);
          setSeconds(0);
        }}
      >
        RESET
      </button>
      <p>{seconds}</p>
    </div>
  );
};

export default Timer;
