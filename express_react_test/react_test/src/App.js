import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Person from './component/Person';
import PersonInsert from './component/PersonInsert';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/person" element={ <Person /> } />
        <Route path="/person/insert" element={ <PersonInsert/> } />
      </Routes>
    </Router>
  );
};

export default App;
