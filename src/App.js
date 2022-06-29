import './styles/App.css';
import React from 'react';
function App() {
  return (
    <>
      <div id="sidebar">
        <button id="close">Close &times;</button>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>

      <div id="main">
        <button id="open" class="w3-button w3-teal w3-xlarge" onClick={w3_open}>
          &#9776;
        </button>
        <div id="content"></div>
      </div>
    </>
  );
}

export default App;
