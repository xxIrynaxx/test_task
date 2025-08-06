import React, { useState, useMemo } from 'react';
import FileUploader from './FileUploader';
import ExperimentSelector from './ExperimentSelector';
import MetricsChart from './MetricsChartViewer';
import ExperimentList from './ExperimentList';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [selectedExperiments, setSelectedExperiments] = useState([]);

  const experimentIds = useMemo(() => {
    return [...new Set(data.map(d => d.experiment_id))];
  }, [data]);

  return (
    <div className="app">
      <h2 className="app__title">Visualization of experiment metrics</h2>
      <FileUploader onParsed={setData} />
      {data.length > 0 && (
        <>
          <ExperimentList experiments={data} />
          <ExperimentSelector
            experiments={experimentIds}
            selected={selectedExperiments}
            onChange={setSelectedExperiments}
          />
          <MetricsChart data={data} selectedExperiments={selectedExperiments} />
        </>
      )}
    </div>
  );
}

export default App;
