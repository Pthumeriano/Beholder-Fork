import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

function Card({ title, description, author, rating, imageSrc }) {
    return (
        <div className="feedcard-container">
            <div className="card-image-container">
                <img src={imageSrc} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-author">by {author}</p>
                <p className="card-description">{description}</p>
                <div className="card-rating">
                    {[...Array(5)].map((_, i) => (
                        i < rating 
                        ? <FaStar key={i} color="#8B0000" /> 
                        : <FaRegStar key={i} color="gray" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
