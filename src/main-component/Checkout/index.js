import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import Checkout from "../../components/Checkout";
import Footer from "../../components/Footer";

const CheckoutPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.checkout")}
        pagesub={t("header-navigation.checkout")}
      />
      <Checkout />
      <Footer />
    </Fragment>
  );
};
export default CheckoutPage;
