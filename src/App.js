import React from 'react';
import apiKey from './config';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

//console.log(apiKey);


function App() {
  return (
    <div>
      <SearchForm />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;
