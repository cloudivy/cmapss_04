import React from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import './DriftCharts.css';

const DriftCharts = ({ driftData }) => {
  const driftScoreData = {
    labels: driftData.map(data => data.date),
    datasets: [
      {
        label: 'Drift Score Trends',
        data: driftData.map(data => data.driftScore),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const componentScoreData = {
    labels: driftData.map(data => data.component),
    datasets: [
      {
        label: 'Component-wise Scores',
        data: driftData.map(data => data.componentScore),
        backgroundColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  const asiBreakdownData = {
    labels: ['ASI 1', 'ASI 2', 'ASI 3'],
    datasets: [
      {
        label: 'ASI Breakdown',
        data: [10, 20, 30], // Example data, replace with dynamic data
        backgroundColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  return (
    <div className="drift-charts">
      <h2>Drift Visualization Charts</h2>
      <div className="chart">
        <h3>Drift Score Trends</h3>
        <Line data={driftScoreData} />
      </div>
      <div className="chart">
        <h3>Component-wise Scores</h3>
        <Bar data={componentScoreData} />
      </div>
      <div className="chart">
        <h3>Visual ASI Breakdown</h3>
        <Bar data={asiBreakdownData} />
      </div>
    </div>
  );
};

export default DriftCharts;
