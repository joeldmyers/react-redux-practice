import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAZ3KCurjF0XhgeXu0Jpfn7lSKsfVA8p5U';
// create new component.  should make some HTML

const App = () => {
  return <div>
            <SearchBar />
        </div>;
}
// put this component into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
