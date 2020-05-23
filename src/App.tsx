import React, { Component } from 'react'
import './App.css';
import ColorField from './components/ColorField/ColorField';
import ColorTable from './components/ColorTable/ColorTable';
import {listGenerator} from './components/helper'
import { withAuthenticator } from 'aws-amplify-react'

/*const AddTripButton = (props) => {
  return <button className="ShowBtn" onClick={props.addTrip}>Go!</button>
}*/

 function App(){

  
 return (
   <div className="Main">
     <button className="ShowBtn" onClick={listGenerator}>Generate field</button>
      
     <ColorField/>
     <ColorTable/>
     
     </div>
      
    );
  
}

export default withAuthenticator(App, true);
