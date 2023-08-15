import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import signature from "../../img/signature.png";
import Img1 from "../../img/about.png";
import "./style.css";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className="gauto-about-area section_70">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about-left">
              <h4>{t("about_us_title")}</h4>
              <h2>{t("welcome_title")}</h2>
              <p>{t("about_text")}</p>
              <div className="about-list">
                <ul>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    {t("trusted_name")}
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    {t("deal_brands")}
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    {t("larger_stocks")}
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    {t("worldwide_location")}
                  </li>
                </ul>
              </div>
              <div className="about-signature">
                <div className="signature-left">
                  <img src={signature} alt="signature" />
                </div>
                <div className="signature-right">
                  <h3>Robertho Garcia</h3>
                  <p>{t("president")}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-right">
              <img src={Img1} alt="car" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
