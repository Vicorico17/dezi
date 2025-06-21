import React from 'react';
import './Reviews.css';

const reviewsData = [
  {
    text: '"Una dintre cele mai bune dezinsecții din oraș, lucrează rapid, vin la tine instantaneu dacă ai nevoie și oferă garanții."',
    author: '- Un client mulțumit',
  },
  {
    text: '"Foarte profesioniști și eficienți! Ne-au rezolvat problema în cel mai scurt timp."',
    author: '- Maria P.',
  },
  {
    text: '"Servicii excelente! Echipa a fost amabilă și meticuloasă. Recomand cu căldură."',
    author: '- Andrei V.',
  },
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h3>Ce spun clienții noștri</h3>
      <div className="reviews-grid">
        {reviewsData.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-text">{review.text}</p>
            <p className="review-author">{review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews; 