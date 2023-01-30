import React from "react";
import styles from "./HostPage.module.css";
import NavBar from "../../../components/nav/nav";
import Card from "../../../components/Card/Card";
import CardList from "../../../components/CardList/CardList";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import Footer from "../../../components/footer/footer";

const cx = classNames.bind(styles);
function HostPage() {
  return (
    <div className={cx("host-page")}>
      <NavBar host />
      <div className={cx("banner")}>
        <div className={cx("banner-wrapper")}>
          <h2 className={cx("banner-heading")}>Try Hosting With Us</h2>
          <p className={cx("banner-desc")}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti <br /> atque corrupti
            quos dolores et quas molestias.
          </p>
        </div>
        <Button
          black
          to="/HostProperties"
          rounded
          medium
          className={cx("banner-button")}
        >
          Lets Get Started
        </Button>
      </div>
      <div className={cx("mid-section-container")}>
        <div className={cx("mid-section-card-wrapper")}>
          <Card className={cx("custom-card")} guide featured />
        </div>
        <div className={cx("mid-section-information-wrapper")}>
          <div className={cx("mid-section-information")}>
            <h2 className={cx("mid-section-header")}>SOME TITLE HERE</h2>
            <p className={cx("mid-section-desc")}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias.
              <br />
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias.
              <br />
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias.
            </p>
          </div>
        </div>
      </div>
      <CardList grid desc="Hosting Tips & Guides">
        <Card guide featured />
        <Card guide featured />
        <Card guide featured />
      </CardList>
      <Footer />
    </div>
  );
}

export default HostPage;
