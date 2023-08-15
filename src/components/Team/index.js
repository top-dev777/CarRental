import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import img1 from "../../img/driver-1.jpg";
import img2 from "../../img/driver-2.jpg";
import img3 from "../../img/driver-4.jpg";
import img4 from "../../img/driver-3.jpg";

import "./style.css";

const Team = () => {
  const { t } = useTranslation();

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-driver-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="site-heading">
              <h4>{t("experts")}</h4>
              <h2>{t("our_members")}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3} sm={6}>
            <div className="single-driver">
              <div className="driver-image">
                <img src={img1} alt="driver 1" />
                <div className="hover">
                  <ul className="social-icon">
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="driver-text">
                <div className="driver-name">
                  <Link to="/">
                    <h3>Marco Ghaly</h3>
                  </Link>
                  <p>4 {t("year_experience")}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="single-driver">
              <div className="driver-image">
                <img src={img2} alt="driver 1" />
                <div className="hover">
                  <ul className="social-icon">
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="driver-text">
                <div className="driver-name">
                  <Link to="/">
                    <h3>Sheref joe</h3>
                  </Link>
                  <p>7 {t("year_experience")}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="single-driver">
              <div className="driver-image">
                <img src={img3} alt="driver 1" />
                <div className="hover">
                  <ul className="social-icon">
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="driver-text">
                <div className="driver-name">
                  <Link to="/">
                    <h3>Arafa lep</h3>
                  </Link>
                  <p>3 {t("year_experience")}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="single-driver">
              <div className="driver-image">
                <img src={img4} alt="driver 1" />
                <div className="hover">
                  <ul className="social-icon">
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="driver-text">
                <div className="driver-name">
                  <Link to="/">
                    <h3>Endly Kent</h3>
                  </Link>
                  <p>4 {t("year_experience")}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="load-more">
              <Link to="/" onClick={onClick} className="gauto-btn">
                {t("more_member")}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;
