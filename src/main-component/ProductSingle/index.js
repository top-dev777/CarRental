import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import ProductDetails from "../../components/ProductDetails";
import Footer from "../../components/Footer";

const ProductSinglePage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.product_details")}
        pagesub={t("header-navigation.product_details")}
      />
      <ProductDetails />
      <Footer />
    </Fragment>
  );
};
export default ProductSinglePage;
