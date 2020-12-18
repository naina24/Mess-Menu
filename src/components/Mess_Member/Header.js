import React from "react";
import './Style.css';

function Header() {
  return (
    
    <header>
      <div className="row block">
      <h1 className="food">Breakfast</h1>
      <button onClick>Add Item</button>
      </div>
      <div className="block row">
    <h1 className="food">Lunch</h1>
    <button>Add Item</button>
  </div>
  <div className="row block">  
      <h1 className="food">Dinner</h1>
      <button>Add Item</button>
      
    </div>
    </header>
    

  );
}


export default Header;