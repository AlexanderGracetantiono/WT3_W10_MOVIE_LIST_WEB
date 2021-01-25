import React, { useEffect, useState } from 'react';
import './App.css';
import { Card, Input } from 'antd';
import axios from 'axios';
import MovieCard from './MovieCard';
const { Search } = Input;

function MovieHomeScreen(props) {
  const [searchValue, setSearchValue] = useState([]);
  const [allSearchMovieList, setAllSearchMovieList] = useState([]);
  const onSearch = value => searchMovie(value);
  const searchMovie = (value) => {
    axios.get("http://www.omdbapi.com/?s=" + value + "&type=movie&" + props.APIKEY)
      .then((response) => {
        console.log(response.data.Search)
        setAllSearchMovieList(response.data.Search);
      }).catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {

  }, [])
  return (
    <>
      <Card
        style={{ width: '90%', display: 'inline-block', marginLeft: '5%', marginRight: '5%',paddingBottom:100 }}
      >
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <div className="restaurant-list">
          {allSearchMovieList.map((item) =>
            <MovieCard
              name={item.Title}
              img={item.Poster}
              year={item.Year}
              id={item.imdbID}
            />
          )}
        </div>
      </Card>
      
    </>
  );
}

export default MovieHomeScreen;
