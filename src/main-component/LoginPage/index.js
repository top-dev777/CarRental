import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import Login from "../../components/Login";
import Footer from "../../components/Footer";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.login")}
        pagesub={t("header-navigation.login")}
      />
      <Login />
      <Footer />
    </Fragment>
  );
};
export default LoginPage;
