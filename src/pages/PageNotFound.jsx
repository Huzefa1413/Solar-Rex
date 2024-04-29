import React from 'react';
import { Link } from 'react-router-dom';

export function PageNotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page not found!</h2>
        <p className="not-found-message">
          Oops! It looks like the page you're looking for doesn't exist.
        </p>
        <Link to="/" className="not-found-link">
          Go back to home
        </Link>
      </div>
    </div>
  );
}
