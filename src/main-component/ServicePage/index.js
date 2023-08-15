import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import ServiceList from "../../components/ServiceList";
import Footer from "../../components/Footer";

const ServicePage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.service")}
        pagesub={t("header-navigation.service")}
      />
      <ServiceList />
      <Footer />
    </Fragment>
  );
};
export default ServicePage;
