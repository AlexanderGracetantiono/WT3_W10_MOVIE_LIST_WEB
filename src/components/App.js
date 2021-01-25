import React from 'react';
import Footer from './Footer';
import MovieHomeScreen from './MovieHomeScreen';
import Header from './Header';
function App(props) {
 

  return (
    <>
      <Header />
      <MovieHomeScreen APIKEY={props.APIKEY}/>
      <Footer />
    </>
  );
}

export default App;
