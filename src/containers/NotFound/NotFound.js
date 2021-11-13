import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notFound__root">
      <h2>404 | Page not found</h2>
      <Link to="/">MyMovies</Link>
    </div>
  );
}

export default NotFound;
