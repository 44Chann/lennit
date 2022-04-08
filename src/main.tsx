import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, ArticleDeatils, Profile, ProfileOVerview } from '.';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          {/* tabs following */}
          <Route index element={<Feed />} />
          {/* trending */}
          <Route
            path='trending' element={
              <Feed />
            }
          />

          {/* random 25 stories */}
          <Route path='random' element={<Feed />} />
          {/* articles details page */}
          <Route path='articles' element={
            <ArticleDeatils />
          } />


          {/* user profile  */}
          <Route path='profile/:id' element={<Profile />}>
            <Route index element={
              <ProfileOVerview />
            } />
            <Route path='posts' element={
              <main>
                <h2>all posts are here
                </h2>
              </main>
            } />
            <Route path='followers' element={
              <main>
                <h2>All followers are here </h2>
              </main>
            } />

            <Route path='communities' element={
              <main>
                <h2>All communities that you are following are here  </h2>
              </main>
            } />


          </Route>



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
