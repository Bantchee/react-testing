import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    (heading === "Magnificent Monkeys") ?
      setHeading("Radical Rhinos") :
      setHeading("Magnificent Monkeys");
  };

  return (
    <div>
      <button
        type="button"
        onClick={clickHandler}
      >
        Click Me!
      </button>
      <h1>{heading}</h1>
    </div>
  )
}

export default App;