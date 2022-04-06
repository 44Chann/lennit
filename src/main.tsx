import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed } from '.';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Feed />} />
          <Route
            path='trending' element={
              <Feed />
            }
          />
          <Route path='random' element={<Feed />} />

          <Route path='articles' element={
            <main>
              <h2>Article</h2>
            </main>
          } />
          {/* user profile  */}

          <Route path='profile/:id' element={
            <main>
              <h2>Profile</h2>
            </main>
          } />
          {/* board profile */}
          <Route path='boards/:id' element={
            <main>
              <h2>Board</h2>
            </main>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
)
