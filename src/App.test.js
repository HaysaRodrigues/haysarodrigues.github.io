import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('tests about render component correctly', function () {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
