import React from "react";

function ToDoItem(props){
   

    function handleClick(){
        
    }

     return (<div onClick={() => {
         props.onChecked(props.id)
     }}>
      <li >{props.item}</li>
      </div>
      );
    
}

export default ToDoItem;