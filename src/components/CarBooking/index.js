import React from "react";
import { Link } from "react-router-dom";
import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaStar,
  FaStarHalfAlt,
  FaCar,
  FaCogs,
  FaTachometerAlt,
  FaEmpire,
  FaDesktop,
  FaKey,
  FaLock,
  FaEye,
} from "react-icons/fa";

import img1 from "../../img/booking.jpg";
import img2 from "../../img/master-card.jpg";
import img3 from "../../img/paypal.jpg";

import "./style.css";

const CarBooking = () => {
  const { t } = useTranslation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="gauto-car-booking section_70">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="car-booking-image">
                <img src={img1} alt="car" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="car-booking-right">
                <p className="rental-tag">{t("rental")}</p>
                <h3>mercedes S-class</h3>
                <div className="price-rating">
                  <div className="price-rent">
                    <h4>
                      $50.00<span>/ {t("day")}</span>
                    </h4>
                  </div>
                  <div className="car-rating">
                    <ul>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStarHalfAlt />
                      </li>
                    </ul>
                    <p>(123 {t("rating")})</p>
                  </div>
                </div>
                <p>
                  {" "}
                  consectetur adipiscing elit. Donec luctus tincidunt aliquam.
                  Aliquam gravida massa at sem vulputate interdum et vel eros.
                  Maecenas eros enim, tincidunt vel turpis vel,dapibus tempus
                  nulla. Donec vel nulla dui.
                </p>
                <div className="car-features clearfix">
                  <ul>
                    <li>
                      <FaCar /> {t("model")}:2017
                    </li>
                    <li>
                      <FaCogs /> {t("automatic")}
                    </li>
                    <li>
                      <FaTachometerAlt /> 20kmpl
                    </li>
                    <li>
                      <FaEmpire /> V-6 Cylinder
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <FaEye /> GPS Navigation
                    </li>
                    <li>
                      <FaLock /> Anti-Lock Brakes
                    </li>
                    <li>
                      <FaKey /> Remote Keyless
                    </li>
                    <li>
                      <FaDesktop /> Rear-Seat DVD
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <FaCar /> {t("model")}:2017
                    </li>
                    <li>
                      <FaCogs /> {t("automatic")}
                    </li>
                    <li>
                      <FaTachometerAlt /> 20kmpl
                    </li>
                    <li>
                      <FaEmpire /> V-6 Cylinder
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="gauto-booking-form section_70">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="booking-form-left">
                <div className="single-booking">
                  <h3>{t("car_booking.personal_information")}</h3>
                  <form onSubmit={SubmitHandler}>
                    <Row>
                      <Col md={6}>
                        <p>
                          <input
                            type="text"
                            placeholder={t("car_booking.first_name")}
                          />
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <input
                            type="text"
                            placeholder={t("car_booking.last_name")}
                          />
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>
                          <input
                            type="email"
                            placeholder={t("car_booking.email")}
                          />
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <input
                            type="tel"
                            placeholder={t("car_booking.phn")}
                          />
                        </p>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="single-booking">
                  <h3>{t("car_booking.booking_details")}</h3>
                  <form>
                    <Row>
                      <Col md={6}>
                        <p>
                          <input type="text" placeholder={t("from_address")} />
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <input type="text" placeholder={t("to_address")} />
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>
                          <select>
                            <option data-display="Select">1 person</option>
                            <option>2 person</option>
                            <option>3 person</option>
                            <option>4 person</option>
                            <option>5-10 person</option>
                          </select>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <select>
                            <option data-display="Select">1 luggage</option>
                            <option>2 luggage</option>
                            <option>3 luggage</option>
                            <option>4(+) luggage</option>
                          </select>
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>
                          <DatePickerComponent
                            id="datepicker"
                            placeholder={t("journey_date")}
                          ></DatePickerComponent>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <TimePickerComponent
                            id="timepicker"
                            placeholder={t("journey_time")}
                          ></TimePickerComponent>
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <p>
                          <textarea
                            placeholder="Write Here..."
                            defaultValue={""}
                          />
                        </p>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="booking-right">
                <h3>{t("car_booking.payment_method")}</h3>
                <div className="gauto-payment clearfix">
                  <div className="payment">
                    <input type="radio" id="ss-option" name="selector" />
                    <label htmlFor="ss-option">
                      {t("car_booking.bank_transfer")}
                    </label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <p>{t("car_booking.payment_text")}</p>
                  </div>
                  <div className="payment">
                    <input type="radio" id="f-option" name="selector" />
                    <label htmlFor="f-option">
                      {t("car_booking.check_payment")}
                    </label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                  </div>
                  <div className="payment">
                    <input type="radio" id="s-option" name="selector" />
                    <label htmlFor="s-option">
                      {t("car_booking.credit_card")}
                    </label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <img src={img2} alt="credit card" />
                  </div>
                  <div className="payment">
                    <input type="radio" id="t-option" name="selector" />
                    <label htmlFor="t-option">Paypal</label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <img src={img3} alt="credit card" />
                  </div>
                </div>
                <div className="action-btn">
                  <Link to="/" onClick={onClick} className="gauto-btn">
                    {t("researve_now")}
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CarBooking;
