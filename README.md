# Kagami Phone Input
Kagami Phone Input to display Country flag dropdown inside a container like AgGrid

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install kgm-phone-input
    $ yarn add kgm-phone-input

## Usage

In order to use, you must follow the steps below:

#### 1. Configure Kgm Phone Input
At first, you need to configure the modal at the root of your project as shown bellow

```jsx
import React from 'react'
import PhoneInput from 'kgm-phone-input'
 
function App() {
  return (
    <div className="App">
       <PhoneInput country={'in'} value="919999999999" />
    </div>
  )
}

export default App
``` 

### Examples

#### 1. Simple example 
```jsx
import React from 'react'
import PhoneInput from 'kgm-phone-input'
 
function App() {
  return (
    <div className="App">
       <PhoneInput country={'in'} value="919999999999" />
    </div>
  )
}

export default App
```
#### 2. Example to use within Grid
```jsx
import { AgGridReact } from "ag-grid-react";
import PhoneInput from "kgm-phone-input";
import { useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'kgm-phone-input/lib/style.css';

function PhoneInputRenderer(params: any) {
  return (
    <span>
      <PhoneInput dropdownContainerId={params.data.test ? "id" + Math.random() : undefined} country={'in'} value={params.value} />
    </span>
  );
}

function App() {
  const [rowData] = useState([
    { field1: "9199999888888", field2: "9199999888887", field3: "919999888886", test: true },
    { field1: "9199999888888", field2: "9199999888887", field3: "919999888886", test: false },
    { field1: "9199999888888", field2: "9199999888887", field3: "919999888886", test: true },
    { field1: "9199999888888", field2: "9199999888887", field3: "919999888886", test: false },
    { field1: "9199999888888", field2: "9199999888887", field3: "919999888886", test: true },
    { field1: "9199999888888", field2: "9199999888887", field3: "919999888886", test: false },
  ]);

  const [columnDefs] = useState([
    { field: 'field1', cellRenderer: PhoneInputRenderer },
    { field: 'field2', cellRenderer: PhoneInputRenderer },
    { field: 'field3', cellRenderer: PhoneInputRenderer }
  ])
  return (
    <>
      <PhoneInput country={'in'} value="919999999999" />
      <div style={{ height: '500px', width: '100%' }} className="ag-theme-alpine">
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </>
  )
}

export default App


``` 