import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaKey, FaLock, FaUser } from "react-icons/fa";

import "./style.css";

const Login = () => {
  const { t } = useTranslation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-login-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="login-box">
              <div className="login-page-heading">
                <FaKey />
                <h3>{t("login_page.singin")}</h3>
              </div>
              <form onSubmit={SubmitHandler}>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={t("login_page.user_email")}
                    name="username"
                  />
                  <FaUser />
                </div>
                <div className="account-form-group">
                  <input
                    type="password"
                    placeholder={t("login_page.password")}
                    name="password"
                  />
                  <FaLock />
                </div>
                <div className="remember-row">
                  <p className="lost-pass">
                    <Link to="/" onClick={onClick}>
                      {t("login_page.f_password")}
                    </Link>
                  </p>
                  <p className="checkbox remember">
                    <input
                      className="checkbox-spin"
                      type="checkbox"
                      id="Freelance"
                    />
                    <label htmlFor="Freelance">
                      <span />
                      {t("login_page.keep")}
                    </label>
                  </p>
                </div>
                <p>
                  <button type="submit" className="gauto-theme-btn">
                    {t("login_page.btn")}
                  </button>
                </p>
              </form>
              <div className="login-sign-up">
                <Link to="/register">{t("login_page.need_account")}</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
