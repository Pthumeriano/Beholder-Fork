import React from 'react';

function Card({ title, content, customColor  }) {
    const cardStyle = {
        backgroundColor: customColor || 'rgba(218, 10, 10, 0.918)',
      };
  return (
    <div className="card custom-card" style={cardStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
