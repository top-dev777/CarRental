import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../img/gallery-1.jpg";
import img2 from "../../img/gallery-2.jpg";
import img3 from "../../img/gallery-3.jpg";
import img4 from "../../img/gallery-5.jpg";

import "./style.css";

const Gallery = () => {
  const { t } = useTranslation();

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-gallery-area section_70">
      <Container>
        <Row>
          <Col lg={4} sm={6}>
            <div className="single-gallery">
              <div className="img-holder">
                <img src={img1} alt="gallery 1" />
                <div className="overlay-content">
                  <div className="inner-content">
                    <div className="title-box">
                      <h3>
                        <Link to="/" onClick={onClick}>
                          Base Cabient Repair
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="single-gallery">
              <div className="img-holder">
                <img src={img2} alt="gallery 2" />
                <div className="overlay-content">
                  <div className="inner-content">
                    <div className="title-box">
                      <h3>
                        <Link to="/" onClick={onClick}>
                          Base Cabient Repair
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="single-gallery">
              <div className="img-holder">
                <img src={img3} alt="gallery 3" />
                <div className="overlay-content">
                  <div className="inner-content">
                    <div className="title-box">
                      <h3>
                        <Link to="/" onClick={onClick}>
                          Base Cabient Repair
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="single-gallery">
              <div className="img-holder">
                <img src={img3} alt="gallery 4" />
                <div className="overlay-content">
                  <div className="inner-content">
                    <div className="title-box">
                      <h3>
                        <Link to="/" onClick={onClick}>
                          Base Cabient Repair
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="single-gallery">
              <div className="img-holder">
                <img src={img4} alt="gallery 5" />
                <div className="overlay-content">
                  <div className="inner-content">
                    <div className="title-box">
                      <h3>
                        <Link to="/" onClick={onClick}>
                          Base Cabient Repair
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="single-gallery">
              <div className="img-holder">
                <img src={img1} alt="gallery 6" />
                <div className="overlay-content">
                  <div className="inner-content">
                    <div className="title-box">
                      <h3>
                        <Link to="/" onClick={onClick}>
                          Base Cabient Repair
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="load-more">
              <Link to="/" onClick={onClick} className="gauto-btn">
                {t("btn_gallery")}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
