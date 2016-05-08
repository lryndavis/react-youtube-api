import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBoB5N2UWpJiETeMybdZsaOGzkN3fnktMM';


// Create a new component and this component should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      //this.setState({ videos: videos});
    });
  }

//passing prop videos to video list
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList  videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's HTML and put it on the page(dom)

ReactDOM.render(<App />, document.querySelector('.container'))
