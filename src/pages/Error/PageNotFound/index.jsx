import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

/**
 * @since 2022-12-22
 */

const PageNotFound = () => {
  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center p-4">
        <Link to="/">
          <img className="w-100" alt="Page not found" src={require('./page-not-found.png')} />
        </Link>
      </Container>
      <Footer />
    </>
  )
}

export default PageNotFound;