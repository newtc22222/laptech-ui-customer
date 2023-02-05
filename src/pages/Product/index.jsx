import React from 'react';
import useFetch from '../../hooks/useFetch';

/**
 * @since 2022-12-22
 */

const ProductPage = () => {
  const {
    data: products,
    loading,
    error
  } = useFetch('/products', { method: 'GET' });

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {products ? (
        products.map((product, index) => <p key={index}>{product.name}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
