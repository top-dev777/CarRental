import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { registerLicense } from "@syncfusion/ej2-base";

import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";
import "./style.css";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1jXX9cc3dRR2BbWEM="
);
const FindCar = () => {
  const { t } = useTranslation();
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-find-area">
      <Container>
        <Row>
          <Col md={12}>
            <div className="find-box">
              <Row className="align-items-center">
                <Col md={4}>
                  <div className="find-text">
                    <h3>{t("search_best_car")}</h3>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="find-form">
                    <form onSubmit={SubmitHandler}>
                      <Row>
                        <Col md={4}>
                          <p>
                            <input
                              type="text"
                              placeholder={t("from_address")}
                            />
                          </p>
                        </Col>
                        <Col md={4}>
                          <p>
                            <input type="text" placeholder={t("to_address")} />
                          </p>
                        </Col>
                        <Col md={4}>
                          <p>
                            <select placeholder={t("SelectCar")}>
                              <option>{t("ac_car")}</option>
                              <option>{t("non_ac_car")}</option>
                            </select>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <p>
                            <DatePickerComponent
                              id="datepicker"
                              placeholder={t("journey_date")}
                            ></DatePickerComponent>
                          </p>
                        </Col>
                        <Col md={4}>
                          <p>
                            <TimePickerComponent
                              id="timepicker"
                              placeholder={t("journey_time")}
                            ></TimePickerComponent>
                          </p>
                        </Col>
                        <Col md={4}>
                          <p>
                            <button type="submit" className="gauto-theme-btn">
                              {t("find_car")}
                            </button>
                          </p>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FindCar;
