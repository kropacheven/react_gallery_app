import React, {useEffect, useState} from 'react';
import axios from 'axios';
import apiKey from './config';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

//console.log(apiKey);

function App() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
   axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      //handle success
      //console.log(response.data.photos.photo);
      setPhoto(response.data.photos.photo);
    })
    .catch(error => {
      //handle error
      console.log("Error while fetching and parsing data", error);
    }) 
  }, []);

  return (
    <div>
      <SearchForm />
      <Nav />
      <PhotoContainer data = {photo} />
    </div>
  );
}

export default App;
