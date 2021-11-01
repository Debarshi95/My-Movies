import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="pageNotFound">
      <h2>Oops! We can&apos;t find the page you&apos;re looking for</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;
