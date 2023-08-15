import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import img1 from "../../img/cart-1.png";
import img2 from "../../img/cart-2.jpg";

import "./style.css";

const Cart = () => {
  const { t } = useTranslation();

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-cart-page-area section_70">
      <Container>
        <Row>
          <Col lg={8} md={7}>
            <div className="cart-table-left">
              <h3>{t("cart.shopping_cart")}</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>{t("cart.preview")}</th>
                      <th>{t("cart.product")}</th>
                      <th>{t("cart.price")}</th>
                      <th>{t("cart.quantity")}</th>
                      <th>{t("cart.total")}</th>
                      <th>{t("cart.action")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="shop-cart-item">
                      <td className="gauto-cart-preview">
                        <Link to="/product-single">
                          <img src={img1} alt="cart-1" />
                        </Link>
                      </td>
                      <td className="gauto-cart-product">
                        <Link to="/product-single">
                          <p>car disk break</p>
                        </Link>
                      </td>
                      <td className="gauto-cart-price">
                        <p>$180</p>
                      </td>
                      <td className="gauto-cart-quantity">
                        <input type="number" defaultValue={1} />
                      </td>
                      <td className="gauto-cart-total">
                        <p>$180</p>
                      </td>
                      <td className="gauto-cart-close">
                        <Link to="/" onClick={onClick}>
                          <FaTimes />
                        </Link>
                      </td>
                    </tr>
                    <tr className="shop-cart-item">
                      <td className="gauto-cart-preview">
                        <Link to="/product-single">
                          <img src={img2} alt="cart-1" />
                        </Link>
                      </td>
                      <td className="gauto-cart-product">
                        <Link to="/product-single">
                          <p>shock absorber</p>
                        </Link>
                      </td>
                      <td className="gauto-cart-price">
                        <p>$90</p>
                      </td>
                      <td className="gauto-cart-quantity">
                        <input type="number" defaultValue={1} />
                      </td>
                      <td className="gauto-cart-total">
                        <p>$90</p>
                      </td>
                      <td className="gauto-cart-close">
                        <Link to="/" onClick={onClick}>
                          <FaTimes />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="cart-clear">
                <Link to="/" onClick={onClick}>
                  {t("cart.clear_cart")}
                </Link>
                <Link to="/" onClick={onClick}>
                  {t("cart.update_cart")}
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={4} md={5}>
            <div className="order-summury-box">
              <h3>{t("cart.summury")}</h3>
              <table>
                <tbody>
                  <tr>
                    <td>{t("cart.subtotal")}</td>
                    <td>$270</td>
                  </tr>
                  <tr>
                    <td>{t("cart.shipping")}</td>
                    <td>{t("cart.free_shipping")}</td>
                  </tr>
                  <tr>
                    <td>{t("cart.order_total")}</td>
                    <td>$270</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="checkout-action">
              <Link to="/checkout" className="gauto-btn">
                {t("cart.proceed")}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
