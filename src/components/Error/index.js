import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

const Error = () => {
  const { t } = useTranslation();

  return (
    <section className="gauto-notfound-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="notfound-box">
              <h2>
                4<span>0</span>4
              </h2>
              <h3>{t("error_page.error")}</h3>
              <p>{t("error_page.desc")}</p>
              <Link to="/" className="gauto-btn">
                {t("error_page.back_home")}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Error;
