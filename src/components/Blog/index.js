import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaEye, FaRegComments } from "react-icons/fa";

import img1 from "../../img/blog-1.jpg";
import img2 from "../../img/blog-2.jpg";
import img3 from "../../img/blog-3.jpg";

import "./style.css";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <section className="gauto-blog-area section_70">
      <Container>
        <Row>
          <Col md="12">
            <div className="site-heading">
              <h4>{t("latest")}</h4>
              <h2>{t("our_blog")}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="single-blog">
              <div className="blog-image">
                <Link to="/blog-single">
                  <img src={img1} alt="blog 1" />
                </Link>
              </div>
              <div className="blog-text">
                <h3>
                  <Link to="/blog-single">{t("blog-title.blog-1")}</Link>
                </h3>
                <div className="blog-meta-home">
                  <div className="blog-meta-left">
                    <p>July 13, 09:43 am</p>
                  </div>
                  <div className="blog-meta-right">
                    <p>
                      <FaEye /> 322
                    </p>
                    <p>
                      <FaRegComments /> 67
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="single-blog">
              <div className="blog-image">
                <Link to="/blog-single">
                  <img src={img2} alt="blog 1" />
                </Link>
              </div>
              <div className="blog-text">
                <h3>
                  <Link to="/blog-single">{t("blog-title.blog-2")}</Link>
                </h3>
                <div className="blog-meta-home">
                  <div className="blog-meta-left">
                    <p>July 13, 09:43 am</p>
                  </div>
                  <div className="blog-meta-right">
                    <p>
                      <FaEye /> 322
                    </p>
                    <p>
                      <FaRegComments /> 67
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="single-blog">
              <div className="blog-image">
                <Link to="/blog-single">
                  <img src={img3} alt="blog 1" />
                </Link>
              </div>
              <div className="blog-text">
                <h3>
                  <Link to="/blog-single">{t("blog-title.blog-3")}</Link>
                </h3>
                <div className="blog-meta-home">
                  <div className="blog-meta-left">
                    <p>July 13, 09:43 am</p>
                  </div>
                  <div className="blog-meta-right">
                    <p>
                      <FaEye /> 322
                    </p>
                    <p>
                      <FaRegComments /> 67
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
