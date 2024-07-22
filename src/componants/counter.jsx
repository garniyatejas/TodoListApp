import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  function increCount(count) {
    count++;
    console.log("increCount count::>>>", count);
    setCount(count);
  }
  function decreCount(count) {
    if (count > 0) {
      count--;
    }
    console.log("decreCount count::>>>", count);
    setCount(count);
  }
  return (
    <>
      <h1>Counter is : {count}</h1>
      <br />
      <button
        onClick={() => {
          increCount(count);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          decreCount(count);
        }}
      >
        Decrement
      </button>
    </>
  );
}
