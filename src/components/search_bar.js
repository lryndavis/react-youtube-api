import React, { Component } from 'react';

//each instance of a class based component has its own copy of state
class SearchBar extends Component {
  constructor(props) {
    super(props);

//initialize state by creating a new object
//term is where the change is recorded
    this.state = {term: ''};
    //inside constructor is the ONLY time you manually change state
    //setState should be used EVERYWHERE else
    //initial value is empty 
  }

  render() {
    //event handler triggers whenever event occurs
    //onChange is a react defined prop
    //define method for event handler, called with event object
    //refactored to be included in onChange
    //pass event handler to element to be watched for event
    return (
    //whenever value changes, this runs and new value of input is rendered into state
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})} />
      </div>
      //controlled component only has value changed by state
    );
  }
}


export default SearchBar;
