import React, { useState, useEffect, useMemo, useCallback } from 'react';
import MealList from './components/MealList';
import SearchBar from './components/SearchBar';

const mockData = [
  { id: '1', name: 'Spaghetti', category: 'Pasta' },
  { id: '2', name: 'Tacos', category: 'Mexican' },
  { id: '3', name: 'Sushi', category: 'Japanese' },
  { id: '4', name: 'Pizza', category: 'Italian' },
  { id: '5', name: 'Burrito', category: 'Mexican' },
  { id: '6', name: 'Ramen', category: 'Japanese' },
  { id: '7', name: 'Lasagna', category: 'Pasta' },
  { id: '8', name: 'Risotto', category: 'Italian' },
];

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  useEffect(() => {
 
    setTimeout(() => {
      setMeals(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);


  const handleSort = useCallback(() => {
    setSortAlphabetically((prev) => !prev);
  }, []);

  
  const filteredAndSortedMeals = useMemo(() => {
   
    const filtered = meals.filter((meal) =>
      meal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    
    if (sortAlphabetically) {
      return filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [meals, searchTerm, sortAlphabetically]);

  return (
    <div>
      <h1>Meal List Application</h1>
      <SearchBar onSearch={handleSearch} onSort={handleSort} sortAlphabetically={sortAlphabetically} />
      <MealList meals={filteredAndSortedMeals} loading={loading} />
    </div>
  );
}

export default App;
