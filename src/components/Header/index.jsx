import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * @since 2022-12-22
 */

const Header = () => {
  const path = useLocation();

  return (
    <header>
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              ></svg>
            </a>
            <form className="w-50 me-3">
              <input
                type="search"
                className="form-control"
                placeholder="Tìm kiếm sản phẩm ..."
                aria-label="Search"
                spellCheck="false"
                data-ms-editor="true"
              />
            </form>
            <div className="d-flex align-items-center"></div>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className="nav-link text-secondary">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile" className="nav-link text-white">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  >
                    <use
                      xlinkHref={require('../../assets/svg/house-door.svg')}
                    ></use>
                  </svg>
                  Đơn hàng
                </Link>
              </li>
              <li>
                <Link to="/product" className="nav-link text-white">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link text-white">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Giỏ hàng
                </Link>
              </li>
              <li>
                <Link to="/auth/login" className="nav-link text-white">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Tài khoản
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {(path.pathname === '/' || path.pathname === '/product') && (
        <div className="px-3 py-2 border-bottom mb-3">
          <div className="container d-flex flex-wrap justify-content-center">
            <ul className="nav">
              {['asus', 'acer', 'lenovo'].map(x => (
                <li>
                  <Link to={'/brand/' + x} className="nav-link">
                    {x.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
