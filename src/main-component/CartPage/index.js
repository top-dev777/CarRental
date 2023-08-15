import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import Cart from "../../components/Cart";
import Footer from "../../components/Footer";

const CartPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.shopping_cart")}
        pagesub={t("header-navigation.shopping_cart")}
      />
      <Cart />
      <Footer />
    </Fragment>
  );
};
export default CartPage;
