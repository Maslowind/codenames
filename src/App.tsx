import React, { Component } from 'react'
import './App.css';
import ColorField from './components/ColorField/ColorField';

import { withAuthenticator } from 'aws-amplify-react'

/*const AddTripButton = (props) => {
  return <button className="ShowBtn" onClick={props.addTrip}>Go!</button>
}*/

class App extends Component <{},{isAddTripState:boolean,isEmptyState:boolean}>{

  
  render() {
    
    return (
     <ColorField/>
    );
  }
}

export default withAuthenticator(App, true);
