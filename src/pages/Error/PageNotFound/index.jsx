import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * @since 2022-12-22
 */
const PageNotFound = () => {
  return (
    <>
      <Container className="d-flex justify-content-center p-4">
        <Link to="/">
          <img
            className="w-100"
            alt="Page not found"
            src={require('./page-not-found.png')}
          />
        </Link>
      </Container>
    </>
  );
};

export default PageNotFound;
