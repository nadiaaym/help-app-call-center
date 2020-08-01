import React, { useEffect, useState } from 'react';
import './App.css';
import ActiveCallsTable from './features/components/active.calls.table.component';
import MoreInfoDialog from './features/components/dialog.component';
import { urlencoded } from 'body-parser';
import { responsiveFontSizes } from '@material-ui/core';

function App() {
  const [calls, setCalls] = useState([]);

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
      <ActiveCallsTable rows={calls}/>
      <MoreInfoDialog />
    </div>
  );
}

export default App;
