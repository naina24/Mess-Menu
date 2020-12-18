import React, { useState} from "react";
import Menu from "./Menu";
import './Item.css';


const Item= () => {
    const [inputList, setInputList] = useState("");

    const[Items, setItems]= useState([]);

    const itemEvent= (event) => {
        setInputList(event.target.value);
    };

    const listOfItems= () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };
    return(
        <>
        <div className="main_div">
            <div className="centre_div">
                <br />
                <h1 className="todo">Create List</h1>
                <br/>
                <input 
                type="text"
                 placeholder="Add a Item"
                val={inputList}
                onChange={itemEvent}
                />
                <button className="plus" onClick={listOfItems}> + </button>
                <ol>
                   { Items.map((itemval) => {
                        return <Menu text={itemval} />;
                    })}
                </ol>
            </div>
        </div>
        </>
    );
}

export default Item;