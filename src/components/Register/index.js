import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaKey, FaLock, FaUser, FaRegEnvelope } from "react-icons/fa";

import "./style.css";

const Register = () => {
  const { t } = useTranslation();

  const SubmitHandler = (e) => {
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
                <h3>{t("register_page.singup")}</h3>
              </div>
              <form onSubmit={SubmitHandler}>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={t("register_page.username")}
                    name="username"
                  />
                  <FaUser />
                </div>
                <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={t("register_page.email")}
                    name="username"
                  />
                  <FaRegEnvelope />
                </div>
                <div className="account-form-group">
                  <input
                    type="password"
                    placeholder={t("register_page.password")}
                    name="password"
                  />
                  <FaLock />
                </div>
                <div className="account-form-group">
                  <input
                    type="password"
                    placeholder={t("register_page.c_password")}
                    name="password"
                  />
                  <FaLock />
                </div>
                <div className="remember-row">
                  <p className="checkbox remember signup">
                    <input
                      className="checkbox-spin"
                      type="checkbox"
                      id="Freelance"
                    />
                    <label htmlFor="Freelance">
                      <span />
                      {t("register_page.terms")}
                    </label>
                  </p>
                </div>
                <p>
                  <button type="submit" className="gauto-theme-btn">
                    {t("register_page.register_now")}
                  </button>
                </p>
              </form>
              <div className="login-sign-up">
                <Link to="/login">{t("register_page.have_account")}</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
