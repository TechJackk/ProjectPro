import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import TaskPage from './components/TaskPage';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
  return (
    <AppLayout>
      <Toaster position="top-right" gutter={8} />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/:projectId" element={<TaskPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AppLayout>
  );
}

export default App;