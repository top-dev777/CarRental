import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";

const GalleryPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.gallery")}
        pagesub={t("header-navigation.gallery")}
      />
      <Gallery />
      <Footer />
    </Fragment>
  );
};
export default GalleryPage;
