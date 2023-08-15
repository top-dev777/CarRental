import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import CarList from "../../components/CarList";
import Footer from "../../components/Footer";

const CarListingPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.car_listing")}
        pagesub={t("header-navigation.car_listing")}
      />
      <CarList />
      <Footer />
    </Fragment>
  );
};
export default CarListingPage;
