import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import Register from "../../components/Register";
import Footer from "../../components/Footer";

const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.register")}
        pagesub={t("header-navigation.register")}
      />
      <Register />
      <Footer />
    </Fragment>
  );
};
export default RegisterPage;
