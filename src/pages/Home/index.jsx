import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import AdvertiseCarousel from './AdvertiseCarousel';
import ProductBrandBox from './ProductBrandBox';
import ProductOnSaleBox from './ProductCardBox';
// import {} from 'react-bootstrap';

/**
 * @since 2022-12-22
 */

const Home = () => {
  const {
    data: brands,
    loading,
    error
  } = useFetch('/brands', { method: 'GET' });

  return (
    <>
      <AdvertiseCarousel />
      <ProductOnSaleBox />
      {brands ? (
        brands.map((brand, index) => {
          return <ProductBrandBox key={index} brand={brand} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
