import React, { useState } from 'react';
import { Col, Row, Carousel } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';

/**
 * @since 2022-12-22
 */

const images = [
  {
    src: require('../../assets/images/banner_001.png'),
    alt: 'Laptop traditionnal'
  },
  {
    src: require('../../assets/images/banner_002.png'),
    alt: 'Ultra display'
  },
  {
    src: require('../../assets/images/banner_003.jpg'),
    alt: 'Always the best choice'
  },
  {
    src: require('../../assets/images/banner_004.jpg'),
    alt: 'Nice choice, nice life!'
  },
  {
    src: require('../../assets/images/banner_005.webp'),
    alt: 'Keep yourself secure!'
  }
];

const date = new Date();
const today =
  date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

const AdvertiseCarousel = () => {
  const {
    data: banners,
    loading,
    error
  } = useFetch(`/banners?date=${today}`, { method: 'GET' });

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Row className="mt-3 mb-3">
      <Col md={8}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {banners ? (
            banners.map((banner, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    // style={{width: '44vw', height: '12.48vw'}}
                    src={banner.path}
                    alt={banner.type}
                  />
                </Carousel.Item>
              );
            })
          ) : (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/900x240?text=Not+Have+Banner"
                alt="Loading..."
              />
            </Carousel.Item>
          )}
        </Carousel>
      </Col>
      <Col md={4}>
        <Row>
          <img
            className="w-100" // 450:120 => 5:3
            height="120px"
            src="https://via.placeholder.com/440x120?text=Not+Have+Image"
          />
        </Row>
        <Row>
          <img
            className="w-100"
            height="120px"
            src="https://via.placeholder.com/440x120?text=Not+Have+Image"
          />
        </Row>
      </Col>
    </Row>
  );
};

export default AdvertiseCarousel;
