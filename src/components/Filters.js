// src/components/Filters.js
import React, { memo } from 'react';
import { Select } from 'antd';

const Filters = ({
  users = [],
  categories = [],
  selectedUser,
  selectedCategory,
  onUserChange,
  onCategoryChange,
}) => {
  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
      <Select
        value={selectedUser}
        onChange={onUserChange}
        style={{ width: 200 }}
        allowClear
        aria-label="Select User"
        options={[
          { label: 'User', value: '', disabled: true }, // Default option with text inside the box
          ...users.map((user) => ({ label: user, value: user })),
        ]}
        placeholder="User" // Shows 'User' when nothing is selected
      />

      <Select
        value={selectedCategory}
        onChange={onCategoryChange}
        style={{ width: 200 }}
        allowClear
        aria-label="Select Category"
        options={[
          { label: 'Category', value: '', disabled: true }, // Default option with text inside the box
          ...categories.map((category) => ({ label: category, value: category })),
        ]}
        placeholder="Category" // Shows 'Category' when nothing is selected
      />
    </div>
  );
};

export default memo(Filters);
