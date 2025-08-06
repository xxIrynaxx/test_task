import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import './MetricsChartViewer.css';

const MetricsChart = ({ data, selectedExperiments }) => {
  const metrics = [...new Set(data.map(d => d.metric_name))];

  return (
    <div className="metrics">
      {metrics.map(metric => {
        const filtered = data.filter(
          d =>
            d.metric_name === metric &&
            selectedExperiments.includes(d.experiment_id)
        );

        const groupedByExperiment = {};
        filtered.forEach(item => {
          const key = item.experiment_id;
          if (!groupedByExperiment[key]) groupedByExperiment[key] = [];
          groupedByExperiment[key].push({
            step: Number(item.step),
            value: Number(item.value),
          });
        });

        return (
          <div key={metric}>
            <h4>{metric}</h4>
            <LineChart width={600} height={300}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="step" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.entries(groupedByExperiment).map(([expId, points], i) => (
                <Line
                  key={expId}
                  type="monotone"
                  data={points}
                  dataKey="value"
                  name={expId}
                  stroke={`hsl(${i * 60}, 70%, 50%)`}
                />
              ))}
            </LineChart>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsChart;
