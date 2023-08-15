import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import BlogDetails from "../../components/BlogDetails";
import Footer from "../../components/Footer";

const CarBookingPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.blog_single")}
        pagesub={t("header-navigation.blog_single")}
      />
      <BlogDetails />
      <Footer />
    </Fragment>
  );
};
export default CarBookingPage;
