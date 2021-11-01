import React from "react";
import emojipedia from "../emojipedia";
import createEntry from "./CreateEntry";
import Footer from "./Footer";
function App() {
  return (<div>
    <h1>
      <span>emoji wiki-ish</span>
    </h1>
    <dl className="dictionary">{emojipedia.map(createEntry)}
    </dl>
    <Footer/>
  </div>);
}

export default App;
