import React, { useEffect, useState } from 'react';
import './App.css';
import ActiveCallsTable from './features/components/active.calls.table.component';
import { urlencoded } from 'body-parser';
import { responsiveFontSizes } from '@material-ui/core';
import MoreCallInfo from './features/components/more.call.info.component';

function App() {
  const [calls, setCalls] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const callServer = (url) => {
    return fetch(url)
      .then(response => response.json())
  };

  useEffect(() => {
    callServer('http://localhost:9000/api/calls')
      .then(setCalls)
  }, []);

  return (
    <div className="App">
      <ActiveCallsTable rows={calls} onSelected={() => setSelectedRow(!selectedRow)} />
      <button onClick={() => setSelectedRow(null)}>less info</button>
      {selectedRow && <MoreCallInfo row={selectedRow} />}
    </div>
  );
}

export default App;
