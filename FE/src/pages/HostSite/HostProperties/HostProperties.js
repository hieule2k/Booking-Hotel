import React, { useEffect, useState } from "react";
import styles from "./HostProperties.module.css";
import NavBar from "../../../components/nav/nav";
import Footer from "../../../components/footer/footer";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import axios from "axios";
const cx = classNames.bind(styles);
function HostProperties() {
  const [customer, setCustomer] = useState(() => {
    const storageData = JSON.parse(localStorage.getItem("userData"));

    return storageData ?? [];
  });
  const [listHotels, setListHotels] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://103.184.113.181:81/customer/${customer.id}/hotels?page=1&limit=10`
      )
      .then(function (response) {
        setListHotels(response.data.items);
        console.log(response);
        console.log("succes");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className={cx("host-properties")}>
      <NavBar host />
      <div className={cx("top-properties")}>
        <div className={cx("top-container")}>
          <h2>Listed Properties</h2>
          <Link to="/addproperties">
            <Button medium rounded className={cx("add-button")}>
              Add New
            </Button>
          </Link>
        </div>
        <div className={cx("properties-container")}>
          {listHotels.map((x) => (
            <Card x={x} key={x.id} desc={x.address.street} wishlists host>
              {x.name}
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HostProperties;
