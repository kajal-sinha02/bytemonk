// src/pages/PieChartPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieCharts from '../components/PieCharts';
import Filters from '../components/Filters';

const PieChartPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://66d3057f184dce1713cf0fd8.mockapi.io/bytemonk/incidents'); // Ensure this URL is correct
        setData(response.data);
        setFilteredData(response.data);
  
        const uniqueUsers = [...new Set(response.data.map((item) => item.user))];
        const uniqueCategories = [...new Set(response.data.map((item) => item.category))];
  
        setUsers(uniqueUsers);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response) {
          // The request was made, but the server responded with a status code that falls out of the range of 2xx
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Request data:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
        }
      }
    };
  
    fetchData();
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
      <h1>Pie Chart View</h1>
      <Filters
        users={users}
        categories={categories}
        selectedUser={selectedUser}
        selectedCategory={selectedCategory}
        onUserChange={setSelectedUser}
        onCategoryChange={setSelectedCategory}
      />
      <PieCharts data={filteredData} />
    </div>
  );
};

export default PieChartPage;
