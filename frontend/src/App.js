import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


const Home = lazy(() => import('./Page/Home/Home'));
const Articles = lazy(() => import('./Page/Articles/Articles'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
          
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
