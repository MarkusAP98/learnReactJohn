import React from "react";
import Like from "./Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Clicked!")}></Like>
    </div>
  );
}

export default App;
