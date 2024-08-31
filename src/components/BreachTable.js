// src/components/BreachTable.js
import React from 'react';
import { Table } from 'antd';

const BreachTable = ({ data }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default BreachTable;
