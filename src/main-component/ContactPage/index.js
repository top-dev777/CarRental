import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={t("header-navigation.contact")}
        pagesub={t("header-navigation.contact")}
      />
      <Contact />
      <Footer />
    </Fragment>
  );
};
export default ContactPage;
