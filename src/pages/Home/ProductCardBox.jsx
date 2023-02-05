import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 *
 * @since 2022-12-22
 */

const ProductOnSaleBox = () => {
  return (
    <Container className="p-3">
      <div className="position-relative">
        <h3 style={{ color: '#0277BD' }}>Sản phẩm đang giảm giá</h3>
        <Link
          to="/product"
          className="position-absolute top-0 end-0 btn btn-info"
        >
          {'Xem thêm'}
        </Link>
      </div>
      <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/160px100"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductOnSaleBox;
