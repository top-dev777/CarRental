import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaHome, FaAngleRight } from "react-icons/fa";

import "./style.css";

const PageTitle = (props) => {
  const { t } = useTranslation();

  return (
    <section className="gauto-breadcromb-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="breadcromb-box">
              <h3>{props.pageTitle}</h3>
              <ul>
                <li>
                  <FaHome />
                </li>
                <li>
                  <Link to="/">{t("header-navigation.home")}</Link>
                </li>
                <li>
                  <FaAngleRight />
                </li>
                <li>{props.pagesub}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageTitle;
