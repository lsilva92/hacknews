import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import noImg from '../../assets/img/noImg.avif';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { NewsContext } from '../../context/newsContext';

export default function NewsListComponent({ news }) {
  const { bookMark, setBookMark } = useContext(NewsContext);

  function handleFavourite(id) {
    if (bookMark.includes(id)) {
      const removeArrElement = bookMark.filter((el) => el !== id);
      setBookMark(removeArrElement);
    } else {
      setBookMark([...bookMark, id]);
    }
  }

  if (!news.length)
    return (
      <>
        <h1>Sorry, there are no News!!!</h1>
      </>
    );

  return (
    <Container className="mt-2">
      <Row>
        {news.map((item) => {
          const { id } = item;
          return (
            <Col key={id}>
              <Card
                style={{ width: '20rem', height: '30rem' }}
                className="mb-3"
              >
                <Card.Img
                  variant="top"
                  src={item.image === 'None' ? noImg : item.image}
                  className="itemImage"
                />
                <Link
                  to={`/detail/${item.id}`}
                  key={item.id}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <Card.Body className="card__Body">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Link>
                <div className="bookmark">
                  {bookMark.includes(id) ? (
                    <FaBookmark onClick={() => handleFavourite(id)} />
                  ) : (
                    <FaRegBookmark onClick={() => handleFavourite(id)} />
                  )}
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
