// this solution uses bootstrap classes
// added <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" > to index.html

import React from "react";
import "./App.css";
import ContactsList from "./components/ContactsList";

function App() {
  return (
    <div className="App">
      <ContactsList />
    </div>
  );
}

export default App;
