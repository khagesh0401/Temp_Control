import { useState } from "react";

const Temp = () => {
  let [Temp, settemp] = useState(25);
  let [color, setcolor] = useState("neutral");
  function handleadd() {
    if (Temp < 40) settemp(Temp + 1);
    else alert("Can't go above 40 °C");
    if (Temp > 27 && Temp <= 40) {
      setcolor("hot");
    } else if (Temp >= 15 && Temp <= 21) {
      setcolor("cold");
    } else setcolor("neutral");
  }
  function handlesub() {
    if (Temp > 15) settemp(Temp - 1);
    else alert("Can't go below 15 °C");
    if (Temp > 27 && Temp <= 40) {
      setcolor("hot");
    } else if (Temp >= 15 && Temp <= 21) {
      setcolor("cold");
    } else setcolor("neutral");
  }

  return (
    <div className="parent">
      <h1 className="heading">Temperature Control</h1>
      <div className="area">
        <div className={`dis ${color}`}>
          <p className="ptag">{Temp}°C</p>
        </div>

        {/* <p>°C</p> */}
        <div className="buttons">
          <button type="button" className="add" onClick={handleadd}>
            +
          </button>

          <button type="button" className="sub" onClick={handlesub}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Temp;
