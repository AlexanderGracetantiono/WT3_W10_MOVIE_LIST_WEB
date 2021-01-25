import { PageHeader,Button } from 'antd';
import React from 'react';
import './App.css';

function Header(props) {
  return (
    <PageHeader
      title="IMBD List"
      subTitle="directory for your movie preference"
    />
  );
}

export default Header;
