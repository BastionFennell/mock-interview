import React from 'react';
import './App.css';

import Header from './Header';
import Blog from './Blog';
import { PostProvider } from './state/PostContext';

function App() {
  return (
    <>
      <Header />
      <PostProvider>
        <Blog />
      </PostProvider>
    </>
  );
}

export default App;
