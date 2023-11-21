import React, { useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Alert/Button";


function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && <Alert onClick={() => setShow(false)} />}
      <Button onClick={() => setShow(true)} />
    </div>
  );
}

export default App;
