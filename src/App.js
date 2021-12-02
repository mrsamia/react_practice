import React from 'react';

import Button from './component/Button';
import Nav from './component/Nav';
import './component/App_1.css';


function App(){

  return(
    
    <div className="content">
      <Nav></Nav>
      <h1>Our Medical Services </h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam </h4>
      <div>
        <Button></Button>
      </div>
      <div>
        <input type="text" placeholder="name"></input>
      </div>
      
    </div>
   
  );

}
export default App;