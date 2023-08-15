import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaLinkedin,
  FaPaperPlane,
  FaPinterest,
  FaSkype,
  FaTwitter,
  FaVimeo,
} from "react-icons/fa";

import "./style.css";

const Contact = () => {
  const { t } = useTranslation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-contact-area section_70">
      <Container>
        <Row>
          <Col lg={7} md={6}>
            <div className="contact-left">
              <h3>{t("contact_page.get_touch")}</h3>
              <form onSubmit={SubmitHandler}>
                <Row>
                  <Col md={6}>
                    <div className="single-contact-field">
                      <input type="text" placeholder={t("contact_page.name")} />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="single-contact-field">
                      <input
                        type="email"
                        placeholder={t("contact_page.email")}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div className="single-contact-field">
                      <input
                        type="text"
                        placeholder={t("contact_page.subject")}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="single-contact-field">
                      <input type="tel" placeholder={t("contact_page.phone")} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="single-contact-field">
                      <textarea
                        placeholder={t("contact_page.msg")}
                        defaultValue={""}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="single-contact-field">
                      <button type="submit" className="gauto-theme-btn">
                        <FaPaperPlane /> {t("contact_page.send")}
                      </button>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
          <Col lg={5} md={6}>
            <div className="contact-right">
              <h3>{t("contact_page.info_title")} </h3>
              <div className="contact-details">
                <p>
                  <i className="fa fa-map-marker" /> 125 Big fella St. Road, New
                  York, Hi 5654775{" "}
                </p>
                <div className="single-contact-btn">
                  <h4>{t("contact_page.info_email")}</h4>
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
                <div className="single-contact-btn">
                  <h4>{t("contact_page.info_call")}</h4>
                  <a href="tel:123456789">+(09)-2134-76894-9</a>
                </div>
                <div className="social-links-contact">
                  <h4>{t("contact_page.info_follow")}</h4>
                  <ul>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaLinkedin />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaPinterest />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaSkype />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaVimeo />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
