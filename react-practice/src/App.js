import React from 'react';
// import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList/MovieList';
import MovieCard from './components/MovieCard/MovieCard';

function App() {
  return (
    <div className="App">
      <MovieList />
      <MovieCard />
    </div>
  );
}

export default App;
