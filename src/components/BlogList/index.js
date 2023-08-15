import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUser,
  FaCalendarAlt,
  FaCommentAlt,
  FaAngleDoubleRight,
} from "react-icons/fa";
import BlogSidebar from "../BlogSidebar";
import img1 from "../../img/blog-1.jpg";
import img2 from "../../img/blog-2.jpg";
import img3 from "../../img/blog-3.jpg";

import "./style.css";

const BlogList = () => {
  const { t } = useTranslation();

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-blog-page-area section_70">
      <Container>
        <Row>
          <Col lg={8} md={7}>
            <div className="blog-page-left">
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
                  <ul>
                    <li>
                      <FaUser />{" "}
                      <Link to="/" onClick={onClick}>
                        Bizkit
                      </Link>
                    </li>
                    <li>
                      <FaCalendarAlt />
                      <Link to="/" onClick={onClick}>
                        27 Aug, 2019
                      </Link>
                    </li>
                    <li>
                      <FaCommentAlt />
                      <Link to="/" onClick={onClick}>
                        (05) {t("blog_page.comments")}
                      </Link>
                    </li>
                  </ul>
                  <p>
                    Fusce quis nulla volutpat, rhoncus ligula ut, pulvinar nisi.
                    In dapibus urna sit amet accumsan tristique. Donec odio
                    ligula, luctus venenatis varius id, tincidunt ac ipsum. Cras
                    commodo, velit nec aliquam dictum, tortor velit dictum
                    ipsum, sed ornare nunc leo nec ipsum. Vestibulum sagittis
                  </p>
                  <Link to="/blog-single" className="gauto-btn">
                    {t("blog_page.read_more")}
                  </Link>
                </div>
              </div>
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
                  <ul>
                    <li>
                      <FaUser />{" "}
                      <Link to="/" onClick={onClick}>
                        Bizkit
                      </Link>
                    </li>
                    <li>
                      <FaCalendarAlt />
                      <Link to="/" onClick={onClick}>
                        27 Aug, 2019
                      </Link>
                    </li>
                    <li>
                      <FaCommentAlt />
                      <Link to="/" onClick={onClick}>
                        (05) {t("blog_page.comments")}
                      </Link>
                    </li>
                  </ul>
                  <p>
                    Fusce quis nulla volutpat, rhoncus ligula ut, pulvinar nisi.
                    In dapibus urna sit amet accumsan tristique. Donec odio
                    ligula, luctus venenatis varius id, tincidunt ac ipsum. Cras
                    commodo, velit nec aliquam dictum, tortor velit dictum
                    ipsum, sed ornare nunc leo nec ipsum. Vestibulum sagittis
                  </p>
                  <Link to="/blog-single" className="gauto-btn">
                    {t("blog_page.read_more")}
                  </Link>
                </div>
              </div>
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
                  <ul>
                    <li>
                      <FaUser />{" "}
                      <Link to="/" onClick={onClick}>
                        Bizkit
                      </Link>
                    </li>
                    <li>
                      <FaCalendarAlt />
                      <Link to="/" onClick={onClick}>
                        27 Aug, 2019
                      </Link>
                    </li>
                    <li>
                      <FaCommentAlt />
                      <Link to="/" onClick={onClick}>
                        (05) {t("blog_page.comments")}
                      </Link>
                    </li>
                  </ul>
                  <p>
                    Fusce quis nulla volutpat, rhoncus ligula ut, pulvinar nisi.
                    In dapibus urna sit amet accumsan tristique. Donec odio
                    ligula, luctus venenatis varius id, tincidunt ac ipsum. Cras
                    commodo, velit nec aliquam dictum, tortor velit dictum
                    ipsum, sed ornare nunc leo nec ipsum. Vestibulum sagittis
                  </p>
                  <Link to="/blog-single" className="gauto-btn">
                    {t("blog_page.read_more")}
                  </Link>
                </div>
              </div>
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
                  <ul>
                    <li>
                      <FaUser />{" "}
                      <Link to="/" onClick={onClick}>
                        Bizkit
                      </Link>
                    </li>
                    <li>
                      <FaCalendarAlt />
                      <Link to="/" onClick={onClick}>
                        27 Aug, 2019
                      </Link>
                    </li>
                    <li>
                      <FaCommentAlt />
                      <Link to="/" onClick={onClick}>
                        (05) {t("blog_page.comments")}
                      </Link>
                    </li>
                  </ul>
                  <p>
                    Fusce quis nulla volutpat, rhoncus ligula ut, pulvinar nisi.
                    In dapibus urna sit amet accumsan tristique. Donec odio
                    ligula, luctus venenatis varius id, tincidunt ac ipsum. Cras
                    commodo, velit nec aliquam dictum, tortor velit dictum
                    ipsum, sed ornare nunc leo nec ipsum. Vestibulum sagittis
                  </p>
                  <Link to="/blog-single" className="gauto-btn">
                    {t("blog_page.read_more")}
                  </Link>
                </div>
              </div>
              <div className="pagination-box-row">
                <p>{t("blog_page.page")} 1 of 6</p>
                <ul className="pagination">
                  <li className="active">
                    <Link to="/" onClick={onClick}>
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      3
                    </Link>
                  </li>
                  <li>...</li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      6
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaAngleDoubleRight />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={4} md={5}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogList;
