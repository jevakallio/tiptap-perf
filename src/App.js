import { useState } from "react";

import Tiptap from "./Tiptap.jsx";
import "./App.css";

const App = () => {
  const [check, setCheck] = useState(false);

  return (
    <div className="App">
      <div style={{ position: "absolute", top: 20, left: 20 }}>
        <input
          type="checkbox"
          checked={check}
          onChange={(e) => setCheck(e.target.checked)}
        ></input>
        Spellcheck
      </div>
      <Tiptap key={`tiptap-check-${check}`} spellcheck={check} />
    </div>
  );
};

export default App;
