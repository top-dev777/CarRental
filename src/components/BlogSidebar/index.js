import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import pimg1 from "../../img/post-thumb-1.jpg";
import pimg2 from "../../img/post-thumb-2.jpg";
import pimg3 from "../../img/post-thumb-3.jpg";

import "./style.css";

const BlogSidebar = () => {
  const { t } = useTranslation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="blog-page-right">
      <div className="sidebar-widget">
        <form className="product_search" onSubmit={SubmitHandler}>
          <input type="search" placeholder={t("key_words")} />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="sidebar-widget">
        <h3>{t("blog_page.by_category")}</h3>
        <ul className="service-menu">
          <li className="active">
            <Link to="/" onClick={onClick}>
              headlamps <span>(2376)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              disk break <span>(237)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Turbo Oil <span>(23)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              tyre &amp; metal wheel <span>(258)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              battery <span>(67)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              suspension <span>(123)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Shock Absorber <span>(23)</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-widget">
        <h3>{t("blog_page.by_tags")}</h3>
        <ul className="Tags-catagory">
          <li>
            <Link to="/" onClick={onClick}>
              Apartment{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              garage{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Condo{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Villa{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Bungalow
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              garage{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Villa{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Electrical{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              Financial{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-widget">
        <h3>{t("blog_page.recent_post")}</h3>
        <ul className="top-products">
          <li>
            <div className="recent-img">
              <Link to="/blog-single">
                <img src={pimg1} alt="recent " />
              </Link>
            </div>
            <div className="recent-text">
              <h4>
                <Link to="/blog-single">
                  How to set goals for you and your team{" "}
                </Link>
              </h4>
            </div>
          </li>
          <li>
            <div className="recent-img">
              <Link to="/blog-single">
                <img src={pimg2} alt="recent" />
              </Link>
            </div>
            <div className="recent-text">
              <h4>
                <Link to="/blog-single">The best ways to pay Drivers</Link>
              </h4>
            </div>
          </li>
          <li>
            <div className="recent-img">
              <Link to="/blog-single">
                <img src={pimg3} alt="recent" />
              </Link>
            </div>
            <div className="recent-text">
              <h4>
                <Link to="/blog-single">
                  How to set goals for you and your team{" "}
                </Link>
              </h4>
            </div>
          </li>
          <li>
            <div className="recent-img">
              <Link to="/blog-single">
                <img src={pimg2} alt="recent" />
              </Link>
            </div>
            <div className="recent-text">
              <h4>
                <Link to="/blog-single">The best ways to pay Drivers</Link>
              </h4>
            </div>
          </li>
          <li>
            <div className="recent-img">
              <Link to="/blog-single">
                <img src={pimg1} alt="recent" />
              </Link>
            </div>
            <div className="recent-text">
              <h4>
                <Link to="/blog-single">
                  the sky love three boys of his own.{" "}
                </Link>
              </h4>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar-widget">
        <h3>{t("blog_page.archive")}</h3>
        <ul className="service-menu">
          <li>
            <Link to="/" onClick={onClick}>
              August - 2018 <span>(26)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              july - 2018 <span>(12)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              june - 2018 <span>(23)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              may - 2018 <span>(25)</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClick}>
              April - 2018 <span>(13)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
