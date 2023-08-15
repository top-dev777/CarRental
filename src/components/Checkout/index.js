import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import img2 from "../../img/master-card.jpg";
import img3 from "../../img/paypal.jpg";

import "./style.css";

const Checkout = () => {
  const { t } = useTranslation();

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="checkout-page-area section_70">
      <Container>
        <Row>
          <Col lg={8} md={7}>
            <div className="checkout-left-box">
              <h3>{t("checkout_page.billing_details")}</h3>
              <form>
                <Row className="checkout-form">
                  <Col md={6}>
                    <label htmlFor="name23">{t("checkout_page.f_name")}</label>
                    <input type="text" name="firstname" id="name23" />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="name22">{t("checkout_page.l_name")}</label>
                    <input type="text" name="lastname" id="name22" />
                  </Col>
                </Row>
                <Row className="checkout-form">
                  <Col md={12}>
                    <label htmlFor="cntr2">{t("checkout_page.country")}</label>
                    <input type="text" name="country" id="cntr2" />
                  </Col>
                </Row>
                <Row className="checkout-form">
                  <Col md={12}>
                    <label htmlFor="addr2">{t("checkout_page.address")}</label>
                    <input type="text" name="address" id="addr2" />
                  </Col>
                </Row>
                <Row className="checkout-form">
                  <Col md={12}>
                    <label htmlFor="Town2">{t("checkout_page.town")} *</label>
                    <input type="text" name="town" id="Town2" />
                  </Col>
                </Row>
                <Row className="checkout-form">
                  <Col md={6}>
                    <label htmlFor="info2">{t("checkout_page.email")} *</label>
                    <input type="email" name="info2" id="info2" />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="info2">{t("checkout_page.mobile")} *</label>
                    <input type="text" name="info2" id="info12" />
                  </Col>
                </Row>
                <Row className="checkout-form">
                  <Col md={12}>
                    <label htmlFor="info2">{t("checkout_page.note")} *</label>
                    <textarea name="ordernote" defaultValue={""} />
                  </Col>
                </Row>
              </form>
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
            <div className="booking-right">
              <div className="gauto-payment clearfix">
                <div className="payment">
                  <input type="radio" id="ss-option" name="selector" />
                  <label htmlFor="ss-option">
                    {t("car_booking.bank_transfer")}
                  </label>
                  <div className="check">
                    <div className="inside" />
                  </div>
                  <p>{t("car_booking.payment_text")}</p>
                </div>
                <div className="payment">
                  <input type="radio" id="f-option" name="selector" />
                  <label htmlFor="f-option">
                    {t("car_booking.check_payment")}
                  </label>
                  <div className="check">
                    <div className="inside" />
                  </div>
                </div>
                <div className="payment">
                  <input type="radio" id="s-option" name="selector" />
                  <label htmlFor="s-option">
                    {t("car_booking.credit_card")}
                  </label>
                  <div className="check">
                    <div className="inside" />
                  </div>
                  <img src={img2} alt="credit card" />
                </div>
                <div className="payment">
                  <input type="radio" id="t-option" name="selector" />
                  <label htmlFor="t-option">Paypal</label>
                  <div className="check">
                    <div className="inside" />
                  </div>
                  <img src={img3} alt="credit card" />
                </div>
              </div>
              <div className="action-btn">
                <Link to="/" onClick={onClick} className="gauto-btn">
                  {t("researve_now")}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;
