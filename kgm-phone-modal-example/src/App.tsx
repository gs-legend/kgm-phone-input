import { AgGridReact } from "ag-grid-react";
import PhoneInput from "kgm-phone-input";
import { useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../../lib/style.css';

function PhoneInputRenderer(params: any) {
  return (
    <span>
      <PhoneInput appendToBody={params.data.test} country={'in'} value={params.value} />
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
