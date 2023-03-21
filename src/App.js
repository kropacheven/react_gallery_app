import React, {useEffect, useState} from 'react';
import axios from 'axios';
import apiKey from './config';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
//import NotFound404 from './components/NotFound404';
import { Route, Routes } from "react-router-dom";

//console.log(apiKey);

function App() {
  const [photo, setPhoto] = useState([]);
  const [query, setQuery] = useState("nature");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   setLoading(true);
   let activeFetch = true;
   axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      //handle success
      //console.log(response.data.photos.photo);
      if (activeFetch) {
        setPhoto(response.data.photos.photo);
        setLoading(false);
      }
    })
    .catch(error => {
      //handle error
      console.log("Error while fetching and parsing data", error);
    }) 
  }, [query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  return (
    <div>
      <SearchForm changeQuery={handleQueryChange}/>
      <Nav />
      {
      (loading)
      ? <p>Loading...</p>
      : <PhotoContainer data = {photo} />
      }
      <Routes>
        <Route path="/cats" element={<PhotoContainer />}></Route>
        <Route path="/dogs" element={<PhotoContainer />}></Route>
        <Route path="/computers" element={<PhotoContainer />}></Route>
        {/* <Route path="*" element={<NotFound404 />}/> */}
      </Routes>
    </div>
  );
}

export default App;
