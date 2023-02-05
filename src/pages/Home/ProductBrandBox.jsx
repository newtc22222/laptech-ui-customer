import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Container } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import ProductCard from './ProductCard';

/**
 *
 * @since 2022-12-22
 */

const ProductBrandBox = ({ brand }) => {
  const {
    data: products,
    loading,
    error
  } = useFetch(`/brands/${brand.id}/products`);

  if (products) {
    return (
      <Container className="p-3 mt-2 border border-secondary rounded-1">
        <div className="position-relative">
          <h3 style={{ color: '#0277BD' }}>Sản phẩm của hãng {brand.name}</h3>
          <Link
            to="/product"
            className="position-absolute top-0 end-0 btn btn-info"
          >
            {'Xem thêm'}
          </Link>
        </div>
        <Row xs={2} md={4} className="g-4">
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Row>
      </Container>
    );
  }
  return <></>;
};

export default ProductBrandBox;
