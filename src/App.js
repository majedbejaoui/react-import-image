import React from 'react';
import Video from "./tesla.mp4";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div style={{border: '5px solid red', maxWidth:295}}>
      <h1> Majed bejaoui</h1>
      <br/>
    <img src="/imageInPublic.jpg" alt="123456" />
    <br/>
   


<video controls autostart autoPlay src={Video} width={320} height={240} type="video/mp4" />
</div>
  );
}

export default App;
