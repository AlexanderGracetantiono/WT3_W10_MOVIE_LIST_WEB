import React, { useEffect, useState } from 'react';
import './App.css';
import { Descriptions, Button, Image, Row, Col } from 'antd';
import { useParams } from "react-router";
import axios from 'axios';
function MovieDetail(props) {
  let { movieId } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);
  useEffect(() => {
    axios.get("http://www.omdbapi.com/?" + props.APIKEY + "&i=" + movieId)
      .then((response) => {
        console.log(response.data)
        setDetailMovie(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }, [])
  return (
    <Row style={{padding: 50}}>
      <Col span={6}>
        <Image
          width={300}
          src={detailMovie.Poster}
        />
        <br />
        <br />
        <br />
        <Button type="primary" href="/">&lt; Back Home</Button>
      </Col>
      <Col span={18}>
        <Descriptions title={detailMovie.Title} bordered column={{ xs: 2, sm: 2, md: 2 }}>
          <Descriptions.Item label="Genre">{detailMovie.Genre}</Descriptions.Item>
          <Descriptions.Item label="Runtime" >{detailMovie.Runtime}</Descriptions.Item>
          <Descriptions.Item label="Production">{detailMovie.Production}</Descriptions.Item>
          <Descriptions.Item label="Released">{detailMovie.Released}</Descriptions.Item>
          <Descriptions.Item label="Actors" span={2}>{detailMovie.Actors}</Descriptions.Item>
          <Descriptions.Item label="Director" span={2}>{detailMovie.Director}</Descriptions.Item>
          <Descriptions.Item label="Writer" span={2}>{detailMovie.Writer}</Descriptions.Item>
          <Descriptions.Item label="Plot" span={2}>{detailMovie.Plot}</Descriptions.Item>
          <Descriptions.Item label="Awards" span={2}>{detailMovie.Awards}</Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  );
}

export default MovieDetail;
