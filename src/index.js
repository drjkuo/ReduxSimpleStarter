// Create a new component
// Add some HTML
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyDO0em5E-2Jg2qr22PyHmL0mddbJZyKraI";
YTSearch( {key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
})

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
