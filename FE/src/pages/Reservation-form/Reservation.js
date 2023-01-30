import React, { useState } from "react";
import styles from "./Reservation.module.css";
import NavBar from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import ReservationFormFirst from "../../components/ReservationFormFirst/ReservationFormFirst";
import ReservationPaymentMethod from "../../components/ReservationPaymentMethod/ReservationPaymentMethod";
import classNames from "classnames/bind";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);
function ReservationForm() {
  const [status, setStatus] = useState(() => {
    const storageData = JSON.parse(localStorage.getItem("status"));

    return storageData ?? [];
  });

  const [checkBill, setCheckBill] = useState(true);
  const handleSetCheckBill = (x) => {
    setCheckBill(!checkBill);
    localStorage.removeItem("rooms");
    setStatus((prev) => {
      const newData = [...prev, x];
      const jsonData = JSON.stringify(newData);
      localStorage.setItem("status", jsonData);
      return newData;
    });
  };

  return (
    <div className={cx("reservation")}>
      <NavBar />
      <div className={cx("reservation-container")}>
        <div className={cx("col-left")}>
          <h1 className={cx("h1")}>
            Reservation <br /> Form Details
          </h1>
          <Button medium black rounded>
            Go To Home
          </Button>
        </div>
        <div className={cx("col-right")}>
          {checkBill ? (
            <ReservationFormFirst handleSetCheckBill={handleSetCheckBill} />
          ) : (
            <ReservationPaymentMethod
              handleSetCheckBill={() => {
                setCheckBill(!checkBill);
              }}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReservationForm;
