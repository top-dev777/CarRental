import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";

const CarBookingPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.blog")}
        pagesub={t("header-navigation.blog")}
      />
      <BlogList />
      <Footer />
    </Fragment>
  );
};
export default CarBookingPage;
