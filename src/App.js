import React from 'react'
import { withRouter } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/Header';
import { Row, Col } from 'antd';
import Index from './components/Index';
import ShChart from './components/ShChart';
import RankTable from './components/RankTable';
import { renderRoutes } from 'react-router-config';
import routes from './router/index';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Row>
        <Col span={6} style={{padding: '20px'}}>
          <Index />
          <ShChart />
        </Col>
        <Col span={18} style={{padding: '20px'}}>
          <RankTable />
        </Col>
      </Row>
      {/* {renderRoutes(routes)} */}
    </div>
  );
}

export default withRouter(App);
