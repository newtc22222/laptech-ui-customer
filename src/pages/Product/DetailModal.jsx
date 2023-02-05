import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

/**
 * @since 2022-12-22
 */

const DetailModal = () => {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error
  } = useFetch(`/products/${id}`, { method: 'GET' });

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      <div>{'Product: ' + product?.name}</div>
      <div>{'Product price: ' + product?.price}</div>
    </>
  );
};

export default DetailModal;
