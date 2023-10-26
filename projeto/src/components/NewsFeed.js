import React from 'react';
import '../Styles/NewsFeed.css';
import Card from './Card';

import Img1 from '../img/11.jpg';
import Img2 from '../img/12.jpg';

const sampleData = [
    {
        title: "Notícia 1",
        description: "Esta é a descrição da notícia 1",
        author: "Autor 1",
        rating: 4,
        imageSrc: Img1,
    },
    {
        title: "Notícia 2",
        description: "Esta é a descrição da notícia 2",
        author: "Autor 2",
        rating: 3,
        imageSrc: Img2,
    }
];

function NewsFeed() {
    return (
        <div className="main-container">
            {sampleData.map((data, index) => (
                <Card
                    key={index}
                    title={data.title}
                    description={data.description}
                    author={data.author}
                    rating={data.rating}
                    imageSrc={data.imageSrc}
                />
            ))}
        </div>
    );
}

export default NewsFeed;
