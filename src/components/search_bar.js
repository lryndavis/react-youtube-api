import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    //event handler triggers whenever event occurs
    //onChange is a react defined prop
    //pass event handler to element to be watched for event
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

//event handler
//define method for event handler, called with event object
//refactored to be included in onChange



export default SearchBar;
