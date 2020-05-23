import * as React from 'react'
import './ColorTable.css';
import {getTable } from '../helper'



function ColorTable() {
  return (
    <div id="ColorTable">
      <button className="ShowBtn" onClick={getTable}>Show table</button>
    </div>

  );
}

export default ColorTable;
