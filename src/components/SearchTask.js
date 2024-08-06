// Import necessary modules from React
import React from 'react';

export const SearchTask = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="SearchTask">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks..."
        className="todo-input"
      />
    </div>
  );
};
