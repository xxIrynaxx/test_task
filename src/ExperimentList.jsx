import React from 'react';
import './ExperimentList.css';

const ExperimentList = ({ experiments }) => {
  return (
    <div className="experiment-list">
      <h3 className="experiment-list__title">List of experiments</h3>
      <ul>
        {experiments.map(exp => {
          return (
            <li
              className="experiment-list__item"
              key={exp.experiment_id}
            >{`experiment_id: ${exp.experiment_id}, metric_name: ${exp.metric_name}, step: ${exp.step}, value: ${exp.value}`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperimentList;
