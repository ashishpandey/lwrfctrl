'use strict';

import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-fresh.css';

export default class AppGrid extends React.Component {
  render() {
    return (
        <AgGridReact 
            columnDefs={[
                { headerName: "f1", field: "f1" }
            ]}
            
            rowData={[
                { f1: "row1" },
                { f1: "row2" },
                { f1: "row3" },
                { f1: "row4" },
                { f1: "row5" },
                { f1: "row6" }
            ]}
        />
        );
  }
}