import * as React from 'react'
import './ColorField.css';
import { loadData } from '../../JSONs/jsonServer'
import { listGenerator, getField } from '../helper'



function ColorField() {
  return (
    <div id="ColorField">
      <button className="ShowBtn" onClick={getField}>Show field</button>
    </div>

  );
}

export default ColorField;
