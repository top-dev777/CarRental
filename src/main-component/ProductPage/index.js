import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import Product from "../../components/Products";
import Footer from "../../components/Footer";

const ProductPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.product")}
        pagesub={t("header-navigation.product")}
      />
      <Product />
      <Footer />
    </Fragment>
  );
};
export default ProductPage;
