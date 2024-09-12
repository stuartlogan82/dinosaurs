// src/components/DinosaurList.jsx
import React, { useState, useEffect } from 'react';
import { getDinosaurs } from '../sanity/lib/queries';

const DinosaurList = ({ initialDinosaurs, groups, periods, diets, habitats }) => {
  const [dinosaurs, setDinosaurs] = useState(initialDinosaurs);
  const [filters, setFilters] = useState({
    group: null,
    period: null,
    diet: null,
    habitat: null
  });

  useEffect(() => {
    const fetchDinosaurs = async () => {
      const results = await getDinosaurs(filters);
      setDinosaurs(results);
    };
    fetchDinosaurs();
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value === '' ? null : value }));
  };

  return (
    <div>
      <div className="filters">
        <select onChange={(e) => handleFilterChange('group', e.target.value)}>
          <option value="">All Groups</option>
          {groups.map(group => (
            <option key={group._id} value={group._id}>{group.name}</option>
          ))}
        </select>
        <select onChange={(e) => handleFilterChange('period', e.target.value)}>
          <option value="">All Periods</option>
          {periods.map(period => (
            <option key={period._id} value={period._id}>{period.name}</option>
          ))}
        </select>
        <select onChange={(e) => handleFilterChange('diet', e.target.value)}>
          <option value="">All Diets</option>
          {diets.map(diet => (
            <option key={diet._id} value={diet._id}>{diet.name}</option>
          ))}
        </select>
        <select onChange={(e) => handleFilterChange('habitat', e.target.value)}>
          <option value="">All Habitats</option>
          {habitats.map(habitat => (
            <option key={habitat._id} value={habitat._id}>{habitat.name}</option>
          ))}
        </select>
      </div>
      <ul className="dinosaur-list">
        {dinosaurs.map((dino) => (
          <li key={dino._id} className="dinosaur-item">
            <h2>{dino.name}</h2>
            <p>Scientific Name: {dino.scientificName}</p>
            <p>Group: {dino.group}</p>
            <p>Period: {dino.period}</p>
            <p>Diet: {dino.diet}</p>
            <p>Habitat: {dino.habitat}</p>
            <p>{dino.description}</p>
            <p>Fun Fact: {dino.funFact}</p>
            <p>Length: {dino.length} feet</p>
            <p>Weight: {dino.weight} tons</p>
            {dino.imageUrl && <img src={dino.imageUrl} alt={dino.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DinosaurList;