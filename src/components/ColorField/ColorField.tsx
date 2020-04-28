import * as React from 'react'
import './ColorField.css';
//import _ from "lodash"
let data = [-1,
  0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1,
  2, 2, 2, 2, 2, 2, 2, 2, 2];

  function resortArray(data:number[])
  {

      for (let i = data.length - 1; i >= 1; i--)
      {
          let j = Math.floor(Math.random()* Math.floor(i+1));
          var temp = data[j];
          data[j] = data[i];
          data[i] = temp;
      }
      return data;
  }

function printBtn() {
  const colorFieldDiv = document.getElementById('ColorField');
  const oldGrid= document.getElementById('GridCon');
  if (oldGrid) oldGrid.remove(); 
  const myDiv = document.createElement("div");
  myDiv.id='GridCon'
  resortArray(data);
  for (let i = 0; i < 25; i++) {
    let btn = document.createElement("button");
    //let t = document.createTextNode(`${i + 1}`);
    if (data[i] === -1)
      btn.className = "Darkgreybutton";
    else if (data[i] === 0)
      btn.className = "Lightbutton";
    else if (data[i] === 1)
      btn.className = "Redbutton";
    else
      btn.className = "Bluebutton";
    //btn.appendChild(t);
    myDiv.appendChild(btn);
  
  }
  colorFieldDiv?.appendChild(myDiv);
   return myDiv;
}
function ColorField() {
   return (
    <div id="ColorField">
        <button className="ShowBtn" onClick={printBtn}>Show field</button>
    </div>
  );
}

export default ColorField;
