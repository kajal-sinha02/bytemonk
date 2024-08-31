// src/pages/TableViewPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreachTable from '../components/BreachTable';
import Filters from '../components/Filters';

const TableViewPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios
      .get('https://66d3057f184dce1713cf0fd8.mockapi.io/bytemonk/incidents') // Replace with your actual API endpoint
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);

        const uniqueUsers = [...new Set(response.data.map((item) => item.user))];
        const uniqueCategories = [...new Set(response.data.map((item) => item.category))];

        setUsers(uniqueUsers);
        setCategories(uniqueCategories);
      });
  }, []);

  useEffect(() => {
    let filtered = data;
    if (selectedUser) {
      filtered = filtered.filter((item) => item.user === selectedUser);
    }
    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }
    setFilteredData(filtered);
  }, [selectedUser, selectedCategory, data]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Table View</h1>
      <Filters
        users={users}
        categories={categories}
        selectedUser={selectedUser}
        selectedCategory={selectedCategory}
        onUserChange={setSelectedUser}
        onCategoryChange={setSelectedCategory}
      />
      <BreachTable data={filteredData} />
    </div>
  );
};

export default TableViewPage;
