import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleDoubleRight, FaSearch, FaShoppingCart } from "react-icons/fa";

import img1 from "../../img/cart-1.png";
import img2 from "../../img/cart-2.jpg";
import product1 from "../../img/product-1.jpg";
import product2 from "../../img/product-2.jpg";
import product3 from "../../img/product-3.jpg";
import product4 from "../../img/product-4.jpg";
import product5 from "../../img/product-5.jpg";

import "./style.css";

const Product = () => {
  const { t } = useTranslation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-product-page section_70">
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <div className="product-page-left">
              <div className="sidebar-widget">
                <form className="product_search" onSubmit={SubmitHandler}>
                  <input type="search" placeholder={t("key_words")} />
                  <button type="submit">
                    <FaSearch />
                  </button>
                </form>
              </div>
              <div className="sidebar-widget">
                <h3>{t("by_category")}</h3>
                <ul className="service-menu">
                  <li className="active">
                    <Link to="/" onClick={onClick}>
                      headlamps <span>(2376)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      disk break <span>(237)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      Turbo Oil <span>(23)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      tyre &amp; metal wheel <span>(258)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      battery <span>(67)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      suspension <span>(123)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      Shock Absorber <span>(23)</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h3>{t("top_selling")}</h3>
                <ul className="top-products">
                  <li>
                    <div className="recent-img">
                      <Link to="/product-single">
                        <img src={img1} alt="recent" />
                      </Link>
                    </div>
                    <div className="recent-text">
                      <h4>
                        <Link to="/product-single">disk break</Link>
                      </h4>
                      <p>$78.60</p>
                    </div>
                  </li>
                  <li>
                    <div className="recent-img">
                      <Link to="/product-single">
                        <img src={img2} alt="recent" />
                      </Link>
                    </div>
                    <div className="recent-text">
                      <h4>
                        <Link to="/product-single">Shock Absorber</Link>
                      </h4>
                      <p>$39.40</p>
                    </div>
                  </li>
                  <li>
                    <div className="recent-img">
                      <Link to="/product-single">
                        <img src={img1} alt="recent" />
                      </Link>
                    </div>
                    <div className="recent-text">
                      <h4>
                        <Link to="/product-single">suspension</Link>
                      </h4>
                      <p>$52.50</p>
                    </div>
                  </li>
                  <li>
                    <div className="recent-img">
                      <Link to="/product-single">
                        <img src={img1} alt="recent" />
                      </Link>
                    </div>
                    <div className="recent-text">
                      <h4>
                        <Link to="/product-single">turbo oil</Link>
                      </h4>
                      <p>$78.60</p>
                    </div>
                  </li>
                  <li>
                    <div className="recent-img">
                      <Link to="/product-single">
                        <img src={img2} alt="recent" />
                      </Link>
                    </div>
                    <div className="recent-text">
                      <h4>
                        <Link to="/product-single">Shock Absorber</Link>
                      </h4>
                      <p>$39.40</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={12}>
            <div className="product-page-right">
              <Row>
                <Col md={4} sm={6}>
                  <div className="product-item">
                    <div className="product-image">
                      <Link to="/product-single">
                        <img src={product1} alt="product 1" />
                      </Link>
                    </div>
                    <div className="product-text">
                      <div className="product-title">
                        <h3>
                          <Link to="/product-single">car battery</Link>
                        </h3>
                        <p>$180.00</p>
                      </div>
                      <div className="product-action">
                        <Link to="/product-single">
                          <FaShoppingCart />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6}>
                  <div className="product-item">
                    <div className="product-image">
                      <Link to="/product-single">
                        <img src={product2} alt="product 1" />
                      </Link>
                    </div>
                    <div className="product-text">
                      <div className="product-title">
                        <h3>
                          <Link to="/product-single">Car disk brake</Link>
                        </h3>
                        <p>$80.00</p>
                      </div>
                      <div className="product-action">
                        <Link to="/product-single">
                          <FaShoppingCart />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6}>
                  <div className="product-item">
                    <div className="product-image">
                      <Link to="/product-single">
                        <img src={product3} alt="product 1" />
                      </Link>
                    </div>
                    <div className="product-text">
                      <div className="product-title">
                        <h3>
                          <Link to="/product-single">steering wheel</Link>
                        </h3>
                        <p>$132.00</p>
                      </div>
                      <div className="product-action">
                        <Link to="/product-single">
                          <FaShoppingCart />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6}>
                  <div className="product-item">
                    <div className="product-image">
                      <Link to="/product-single">
                        <img src={product4} alt="product 1" />
                      </Link>
                    </div>
                    <div className="product-text">
                      <div className="product-title">
                        <h3>
                          <Link to="/product-single">shock absorber</Link>
                        </h3>
                        <p>$90.00</p>
                      </div>
                      <div className="product-action">
                        <Link to="/product-single">
                          <FaShoppingCart />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6}>
                  <div className="product-item">
                    <div className="product-image">
                      <Link to="/product-single">
                        <img src={product5} alt="product 1" />
                      </Link>
                    </div>
                    <div className="product-text">
                      <div className="product-title">
                        <h3>
                          <Link to="/product-single">luxury seat</Link>
                        </h3>
                        <p>$320.00</p>
                      </div>
                      <div className="product-action">
                        <Link to="/product-single">
                          <FaShoppingCart />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6}>
                  <div className="product-item">
                    <div className="product-image">
                      <Link to="/product-single">
                        <img src={product1} alt="product 1" />
                      </Link>
                    </div>
                    <div className="product-text">
                      <div className="product-title">
                        <h3>
                          <Link to="/product-single">car battery</Link>
                        </h3>
                        <p>$132.00</p>
                      </div>
                      <div className="product-action">
                        <Link to="/product-single">
                          <FaShoppingCart />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6}>
                  <div className="product-item">
                    <div className="product-image">
                      <Link to="/product-single">
                        <img src={product3} alt="product 1" />
                      </Link>
                    </div>
                    <div className="product-text">
                      <div className="product-title">
                        <h3>
                          <Link to="/product-single">steering wheel</Link>
                        </h3>
                        <p>$132.00</p>
                      </div>
                      <div className="product-action">
                        <Link to="/product-single">
                          <FaShoppingCart />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6}>
                  <div className="product-item">
                    <div className="product-image">
                      <Link to="/product-single">
                        <img src={product1} alt="product 1" />
                      </Link>
                    </div>
                    <div className="product-text">
                      <div className="product-title">
                        <h3>
                          <Link to="/product-single">car battery</Link>
                        </h3>
                        <p>$180.00</p>
                      </div>
                      <div className="product-action">
                        <Link to="/product-single">
                          <FaShoppingCart />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6}>
                  <div className="product-item">
                    <div className="product-image">
                      <Link to="/product-single">
                        <img src={product2} alt="product 1" />
                      </Link>
                    </div>
                    <div className="product-text">
                      <div className="product-title">
                        <h3>
                          <Link to="/product-single">Car disk brake</Link>
                        </h3>
                        <p>$80.00</p>
                      </div>
                      <div className="product-action">
                        <Link to="/product-single">
                          <FaShoppingCart />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="pagination-box-row">
                    <p>Page 1 of 6</p>
                    <ul className="pagination">
                      <li className="active">
                        <Link to="/" onClick={onClick}>
                          1
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          2
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          3
                        </Link>
                      </li>
                      <li>...</li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          6
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaAngleDoubleRight />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Product;
