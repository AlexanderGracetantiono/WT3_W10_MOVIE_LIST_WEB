import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Card,
  Button,
  Modal,
  Result,
  Row,
  Col,
  Avatar,
  Rate,
  Layout,
  Typography
} from 'antd';
import {
  useHistory,
  useParams
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function PageNotFound(props) {
  const history = useHistory();
  function handleClick() {
    history.goBack();
  }

  return (
    <Layout style={{backgroundColor:'white'}}>
      <Header
        title="Restaurants List" />
      <Result
         status="404"
         title="404"
         subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={handleClick} type="primary">Back Home</Button>}
      />
      <Footer />
    </Layout>
  );
}

export default PageNotFound;
