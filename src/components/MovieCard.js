import React, { useState } from 'react';
import './App.css';
import { Card, Button, Image, Row, Col, Avatar, Rate } from 'antd';

const { Meta } = Card;
function MovieCard(props) {
  return (
    <Card
    hoverable
    style={{ width: 240,display: 'inline-block',margin:20 }}
    cover={<img alt="img-id" src={props.img} />}
    actions={[
      <Button type="primary" href={"movie/"+props.id}>View Detail</Button>,
    ]}
  >
    <Meta title={props.name} description={props.year} />
  </Card>
   
  );
}

export default MovieCard;
