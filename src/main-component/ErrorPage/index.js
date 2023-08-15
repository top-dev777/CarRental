import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import Error from "../../components/Error";
import Footer from "../../components/Footer";

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.not_found")}
        pagesub={t("header-navigation.not_found")}
      />
      <Error />
      <Footer />
    </Fragment>
  );
};
export default ErrorPage;
