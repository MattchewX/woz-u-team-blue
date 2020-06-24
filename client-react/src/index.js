import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    React.createElement(
      'ul',
      {},
      React.createElement('li', {}, 'Pizza'),
      React.createElement('li', {}, 'Pizza'),
      React.createElement('li', {}, 'Pizza')
      
    ),
    
    document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
alert("Erik Says- I'm hoping to have homepage and menu done late tonight")
