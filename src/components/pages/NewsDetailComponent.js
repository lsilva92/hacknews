import React from 'react';
import noImg from '../../assets/img/noImg.avif';
import Button from 'react-bootstrap/Button';

export default function NewsDetailComponent({ news }) {
  return (
    <div className="imageContainer">
      <div
        className="detailImage"
        style={{
          backgroundImage: `url(${
            news[0].image === 'None' ? noImg : news[0].image
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>

      <div className="newsBody">
        <h1>{news[0].title}</h1>
        <p>{news[0].description}</p>
        <div>
          <p>Read More in:</p>
          <p>{news[0].url}</p>
        </div>
        <div>
          <p>Author:</p>
          <p>{news[0].author}</p>
        </div>
        <div className="btn">
          <Button href="/" variant="secondary" size="sm">
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
