import React from 'react';

const DataSummary = ({ data }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Data Summary</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Type</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Value</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.type}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.value}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(item.percent * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataSummary;
