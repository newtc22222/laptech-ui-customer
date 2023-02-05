import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

/**
 *
 * @since 2022-12-22
 */

const ProductCard = ({ product }) => {
  return (
    <Col>
      <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/160px100" />
          <Card.Body>
            <Card.Title>{product?.name}</Card.Title>
            <Card.Text>Nothing to show...</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
