'use strict';

import React from 'react';
import AppGrid from './components/grid'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>Hello World! 2</div>
        <div className="ag-fresh">
          <AppGrid />
        </div>
      </div>
      );
  }
}