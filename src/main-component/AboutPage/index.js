import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import AboutPageList from "../../components/AboutPage";
import Team from "../../components/Team";
import Promo from "../../components/Promo";
import Footer from "../../components/Footer";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.about")}
        pagesub={t("header-navigation.about")}
      />
      <AboutPageList />
      <Promo />
      <Team />
      <Footer />
    </Fragment>
  );
};
export default AboutPage;
