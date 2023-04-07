import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
