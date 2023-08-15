import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../img/toyota-offer-2.png";

import "./style.css";

const Promo = () => {
  const { t } = useTranslation();

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-promo-area">
      <Container>
        <Row className="align-items-center">
          <Col md="6">
            <div className="promo-box-left">
              <img src={img1} alt="promo car" />
            </div>
          </Col>
          <Col md="6">
            <div className="promo-box-right">
              <h3>{t("promo_text")}</h3>
              <Link to="/" onClick={onClick} className="gauto-btn">
                {t("promo_btn")}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Promo;
