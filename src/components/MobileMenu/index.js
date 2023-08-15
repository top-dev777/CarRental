import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },

  {
    id: 2,
    title: "About",
    link: "/about",
  },

  {
    id: 3,
    title: "Service",
    link: "/service",
    submenu: [
      {
        id: 31,
        title: "All Services",
        link: "/service",
      },
      {
        id: 32,
        title: "Service Details",
        link: "/service-single",
      },
    ],
  },
  {
    id: 4,
    title: "Cars",
    link: "/car-listing",
    submenu: [
      {
        id: 41,
        title: "Car Listing",
        link: "/car-listing",
      },
      {
        id: 42,
        title: "Car Booking",
        link: "/car-booking",
      },
    ],
  },
  {
    id: 5,
    title: "Gallery",
    link: "/gallery",
  },
  {
    id: 6,
    title: "Shop",
    link: "/product",
    submenu: [
      {
        id: 61,
        title: "Product",
        link: "/product",
      },
      {
        id: 62,
        title: "Product Details",
        link: "/product-single",
      },
      {
        id: 63,
        title: "Shopping Cart",
        link: "/cart",
      },
      {
        id: 64,
        title: "Checkout",
        link: "/checkout",
      },
    ],
  },
  {
    id: 7,
    title: "Pages",
    link: "/",
    submenu: [
      {
        id: 71,
        title: "Blog",
        link: "/blog",
      },
      {
        id: 72,
        title: "Blog Single",
        link: "/blog-single",
      },
      {
        id: 73,
        title: "404 Not Found",
        link: "/error",
      },
      {
        id: 74,
        title: "Login",
        link: "/login",
      },
      {
        id: 75,
        title: "Register",
        link: "/register",
      },
    ],
  },
  {
    id: 8,
    title: "Contact",
    link: "/contact",
  },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;
    return (
      <div className="responsiveMenu">
        <nav
          id="mobileMenu"
          className={`mobileMenu ${isMenuShow ? "active" : ""}`}
        >
          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p
                      onClick={this.setIsOpen(item.id)}
                      aria-expanded={isMenuShow}
                    >
                      {item.title}
                      {item.submenu ? "" : ""}
                      <span>+</span>
                    </p>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}

                  {item.submenu ? (
                    <Collapse in={item.id === isOpen}>
                      <ul className="sub-menu">
                        {item.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link className="active" to={submenu.link}>
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`spinner-master ${isMenuShow ? "active" : ""}`}
          onClick={this.menuHandler}
        >
          <div id="spinner-form" className="spinner-spin">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
