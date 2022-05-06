import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, ArticleDeatils, ProfileTabs, ProfileOVerview, Board, BoardOverviewTab } from '.';

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
          <Route path='profile/:id' element={<ProfileTabs />}>
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

          <Route path='Board/:id' element={<BoardOverviewTab />}>
            <Route index element={
              <Board />
            } />
            <Route path='posts' element={
              <main>
                <h2>all posts are here
                </h2>
              </main>
            } />
            <Route path='members' element={
              <main>
                <h2>All followers are here </h2>
              </main>
            } />

            <Route path='faqs' element={
              <main>
                <h2>All communities that you are following are here  </h2>
              </main>
            } />
            <Route path='modrators' element={
              <main>
                <h2>All communities that you are following are here  </h2>
              </main>
            } />
            <Route path='rules' element={
              <main>
                <h2>All communities rules  </h2>
              </main>
            } />
          </Route>
          {/* board profile */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
)
