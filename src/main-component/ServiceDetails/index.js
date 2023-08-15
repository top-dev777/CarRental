import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import ServiceDetailsPage from "../../components/ServiceDetails";
import Footer from "../../components/Footer";

const ServiceSingle = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.service_details")}
        pagesub={t("header-navigation.service_details")}
      />
      <ServiceDetailsPage />
      <Footer />
    </Fragment>
  );
};
export default ServiceSingle;
