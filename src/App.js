import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

setInterval(App, 1000);
export default App;