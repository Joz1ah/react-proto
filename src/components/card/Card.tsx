// Card.tsx
import React from 'react';
import './card.scss';

interface CardProps {
    position: string;
    company: string;
    description: string;
    salary: string;
  }

  const Card: React.FC<CardProps> = ({ position, company, description, salary }) => {
    return (
        <div className="card">
        <div className="card-header">
          <div className="company-logo">{company[0].toUpperCase()}</div>
          <div className="company-info">
            <h2 className="card-title">{position}</h2>
            <h3 className="card-subtitle">{company}</h3>
          </div>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <span className="salary-tag">{salary}</span>
        </div>
      </div>
    );
  };

export { Card }