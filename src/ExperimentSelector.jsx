import React from 'react';
import './ExperimentSelector.css';

const ExperimentSelector = ({ experiments, selected, onChange }) => {
  const toggle = id => {
    if (selected.includes(id)) {
      onChange(selected.filter(i => i !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="experiment-selector">
      <h3 className="experiment-selector__title">Experiments:</h3>
      {experiments.map(id => (
        <div key={id}>
          <label className="experiment-selector__item">
            <input
              type="checkbox"
              checked={selected.includes(id)}
              onChange={() => toggle(id)}
            />
            {id}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ExperimentSelector;
