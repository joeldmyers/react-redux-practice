import React from 'react';
import ReactDOM from 'react-dom';

// create new component.  should make some HTML

const App = function() {
  return <div>Hello wassap</div>;
}
// put this component into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
