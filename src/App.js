import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TableViewPage from './pages/TableViewPage';
import PieChartPage from './pages/PieChartPage';

const { Header, Content } = Layout;

function App() {
  const menuItems = [
    {
      key: '1',
      label: <Link to="/">Table View</Link>,
    },
    {
      key: '2',
      label: <Link to="/charts">Pie Chart View</Link>,
    },
  ];

  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} />
        </Header>
        <Content style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<TableViewPage />} />
            <Route path="/charts" element={<PieChartPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
