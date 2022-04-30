import { useEffect, useState } from "react";

export function Timer({ start, end }) {
  const [time, setTime] = useState(start);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        if (prev === end) {
          clearInterval(id);
          return start;
        }
        return prev + 1;
      });
    }, 1000);
  }, [start, end]);
  return (
    <>
      <h1>Timer</h1>
      <h2>Time : {time}</h2>
    </>
  );
}
