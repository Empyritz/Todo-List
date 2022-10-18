import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Home/HomePage';
import NewTodoPage from './New/NewTodoPage';
import EditTodoPage from './Edit/EditTodoPage';

// ----------------------------------------- APP ----------------------
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit:id" element={<EditTodoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
