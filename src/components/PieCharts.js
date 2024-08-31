import React from 'react';
import { Pie } from '@ant-design/charts';
import DataSummary from './DataSummary'; // Import the DataSummary component

const PieCharts = ({ data }) => {
  // Transform the data to get counts per category
  const categoryData = Object.entries(
    data.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {})
  ).map(([type, value]) => ({ type, value, percent: value / data.length }));

  // Transform the data to get counts per user
  const userData = Object.entries(
    data.reduce((acc, item) => {
      acc[item.user] = (acc[item.user] || 0) + 1;
      return acc;
    }, {})
  ).map(([type, value]) => ({ type, value, percent: value / data.length }));

  // Configuration for Pie Charts
  const pieConfig = (title, data) => ({
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    interactions: [{ type: 'element-active' }],
    legend: { position: 'bottom' },
    tooltip: {
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} ({percentage})</li>',
    },
    title: { visible: true, text: title },
    // Remove label configuration as per your requirement
  });

  return (
    <div>
      <Pie {...pieConfig('Breaches by Category', categoryData)} />
      <DataSummary data={categoryData} /> {/* Add DataSummary below the chart */}
      <Pie {...pieConfig('Breaches by User', userData)} />
      <DataSummary data={userData} /> {/* Add DataSummary below the chart */}
    </div>
  );
};

export default PieCharts;
