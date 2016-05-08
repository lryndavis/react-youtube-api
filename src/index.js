import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBoB5N2UWpJiETeMybdZsaOGzkN3fnktMM';


// Create a new component and this component should produce some html
const App = () => {
  return (
    <div>
    <SearchBar />
  </div>
  );
}

// Take this component's HTML and put it on the page(dom)

ReactDOM.render(<App />, document.querySelector('.container'))
