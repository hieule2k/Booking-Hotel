import React, { useState } from "react";
import styles from "./AddRooms.module.css";
import classNames from "classnames/bind";
import RadioFormik from "../../../components/RadioFormik/RadioFormik";
import Counter from "../../../components/Counter/Counter";
import data from "../../../json/hotel.json";
import ScrollToTop from "../../../components/ScrollToTop";
import InputRadio from "../../../components/InputRadio/InputRadio";
import NavBar from "../../../components/nav/nav";
import Footer from "../../../components/footer/footer";
import Button from "../../../components/Button/Button";
import { BiEdit } from "react-icons/bi";
import * as Yup from "yup";
import axios from "axios";
import { Formik } from "formik";
import MyInput from "../../../components/MyInput/MyInput";
import TextAreaFormik from "../../../components/TextAreaFormik/TextAreaFormik";

const cx = classNames.bind(styles);

function AddProperties() {
  const [hotelId, setHotelId] = useState(() => {
    const storageData = JSON.parse(localStorage.getItem("hotelData"));

    return storageData ?? [];
  });
  const [tab, setTab] = useState("addproperty1");
  const handleChangeTab = (x) => {
    setTab(x);
  };
  // const [text, setText] = useState("haha");
  // const product = data[0];
  // const { images } = product;

  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };
  // const resetTab = () => {
  //   alert("Successfull");
  //   handleChangeTab("addproperty1");
  // };

  return (
    <div>
      <ScrollToTop />

      <NavBar host />
      <Formik
        initialValues={{
          name: "hieulq",
          type: "",
          price: "",
          description: "",
        }}
        initialTouched={{
          field: true,
        }}
        validateOnMount
        validationSchema={Yup.object({})}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            axios
              .post(
                `http://103.184.113.181:82/hotel/${hotelId}/room`,
                JSON.stringify(values)
              )
              .then(function (response) {
                window.location.href = "/HostProperties";

                console.log(response);
                console.log("succes");
              })
              .catch(function (error) {
                console.log(error);
              });
            resetForm({ name: "", type: "", price: "", description: "" });

            setSubmitting(false);
          }, 1000);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className={cx("sign-up__form")}
            >
              {tab === "addproperty1" && (
                <div>
                  <div className={cx("content-add1-container")}>
                    <h1 id={styles["title"]}>
                      What kind of place will you host?{" "}
                    </h1>
                    <div className={cx("add1-container")}>
                      <RadioFormik name="type" value="Apartment">
                        Apartment
                      </RadioFormik>
                      <RadioFormik name="type" value="Rooms">
                        Rooms
                      </RadioFormik>
                      <RadioFormik name="type" value="Villa">
                        Villa
                      </RadioFormik>
                    </div>
                    <Button
                      onClick={() => {
                        handleChangeTab("addproperty3");
                      }}
                      small
                      black
                      rounded
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}

              {/* {tab === "addproperty2" && (
              <div className={cx("add-properties")}>
                <div className={cx("add2-container")}>
                  <h2>List of properties</h2>
                  <div className={cx("add-container")}>
                    <div className={cx("banner")}>
                      Add some properties to your palace
                    </div>
                    <i className={cx("add-icon")}>
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.4286 14.1429H21.8571V2.57143C21.8571 1.15152 20.7056 0 19.2857 0H16.7143C15.2944 0 14.1429 1.15152 14.1429 2.57143V14.1429H2.57143C1.15152 14.1429 0 15.2944 0 16.7143V19.2857C0 20.7056 1.15152 21.8571 2.57143 21.8571H14.1429V33.4286C14.1429 34.8485 15.2944 36 16.7143 36H19.2857C20.7056 36 21.8571 34.8485 21.8571 33.4286V21.8571H33.4286C34.8485 21.8571 36 20.7056 36 19.2857V16.7143C36 15.2944 34.8485 14.1429 33.4286 14.1429Z"
                          fill="#9A9A9A"
                        />
                      </svg>
                    </i>
                  </div>
                  <div className={cx("properties-lists")}>
                    <div className={cx("properties-item")}>
                      <div className={cx("item-information")}>
                        <h2 className={cx("item-name")}>Villa 001</h2>
                        <p className={cx("total-people")}>For 4-6 people</p>
                      </div>
                      <i
                        className={cx("edit-icon")}
                        onClick={() => {
                          handleChangeTab("addproperty3");
                        }}
                      >
                        <BiEdit />
                      </i>
                    </div>
                    <div className={cx("properties-item")}>
                      <div className={cx("item-information")}>
                        <h2 className={cx("item-name")}>Villa 001</h2>
                        <p className={cx("total-people")}>For 4-6 people</p>
                      </div>
                      <i
                        className={cx("edit-icon")}
                        onClick={() => {
                          handleChangeTab("addproperty3");
                        }}
                      >
                        <BiEdit />
                      </i>
                    </div>
                    <div className={cx("properties-item")}>
                      <div className={cx("item-information")}>
                        <h2 className={cx("item-name")}>Villa 001</h2>
                        <p className={cx("total-people")}>For 4-6 people</p>
                      </div>
                      <i
                        className={cx("edit-icon")}
                        onClick={() => {
                          handleChangeTab("addproperty3");
                        }}
                      >
                        <BiEdit />
                      </i>
                    </div>
                    <div className={cx("properties-item")}>
                      <div className={cx("item-information")}>
                        <h2 className={cx("item-name")}>Villa 001</h2>
                        <p className={cx("total-people")}>For 4-6 people</p>
                      </div>
                      <i
                        className={cx("edit-icon")}
                        onClick={() => {
                          handleChangeTab("addproperty3");
                        }}
                      >
                        <BiEdit />
                      </i>
                    </div>
                    <div className={cx("properties-item")}>
                      <div className={cx("item-information")}>
                        <h2 className={cx("item-name")}>Villa 001</h2>
                        <p className={cx("total-people")}>For 4-6 people</p>
                      </div>
                      <i
                        className={cx("edit-icon")}
                        onClick={() => {
                          handleChangeTab("addproperty3");
                        }}
                      >
                        <BiEdit />
                      </i>
                    </div>
                    <div className={cx("properties-item")}>
                      <div className={cx("item-information")}>
                        <h2 className={cx("item-name")}>Villa 001</h2>
                        <p className={cx("total-people")}>For 4-6 people</p>
                      </div>
                      <i
                        className={cx("edit-icon")}
                        onClick={() => {
                          handleChangeTab("addproperty3");
                        }}
                      >
                        <BiEdit />
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
              {tab === "addproperty3" && (
                <div className={cx("add3-properties")}>
                  <div>
                    <div className={cx("content3-container")}>
                      <div className={cx("facilities-container")}>
                        <h3 className={cx("title")}>
                          Add facilities available at your place.
                        </h3>
                        <div className={cx("counter-container")}>
                          <Counter>Bedrooms</Counter>
                          <Counter>Bathrooms</Counter>
                          <Counter>Parking</Counter>
                        </div>
                      </div>
                      <div className={cx("prices")}>
                        <MyInput
                          className={cx("input")}
                          name="price"
                          type="text"
                          label="Hotel price"
                        ></MyInput>
                      </div>
                      <div>
                        <h3 className={cx("title3")}>
                          Add amenities available at your place.
                        </h3>
                        <div className={cx("amenities-list")}>
                          <InputRadio name="select_amenities">
                            Television
                          </InputRadio>
                          <InputRadio name="select_amenities">Wifi</InputRadio>
                          <InputRadio name="select_amenities">
                            Washer
                          </InputRadio>
                          <InputRadio name="select_amenities">
                            Balcony
                          </InputRadio>
                          <InputRadio name="select_amenities">
                            Cleaner
                          </InputRadio>
                          <InputRadio name="select_amenities">Radio</InputRadio>
                          <InputRadio name="select_amenities">Lift</InputRadio>
                          <InputRadio name="select_amenities">Other</InputRadio>
                        </div>
                      </div>
                      <div>
                        <h3 className={cx("title")}>
                          Add description at your place.
                        </h3>
                      </div>
                      <div>
                        {/* <textarea
                          className={cx("text-area")}
                          value={text}
                          onChange={handleChange}
                        ></textarea> */}
                        <TextAreaFormik
                          label="Introduce yourself"
                          name="description"
                          placeholder="Enter your introduce"
                          id="intro"
                        ></TextAreaFormik>
                      </div>
                      <Button
                        className={cx("save")}
                        small
                        green
                        type="submit"
                        // onClick={() => {
                        //   handleChangeTab("addproperty4");
                        // }}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              {tab === "addproperty4" && (
                <div>
                  <div className={cx("add4-content-container")}>
                    <h1 id={styles["title"]}>
                      Information can be added in similar way.
                    </h1>
                    <p>
                      The other required information can be added in a similar
                      presentation for listing the property fluently...
                    </p>
                    <Button
                      className={cx("save")}
                      medium
                      secondary
                      rounded
                      type="submit"
                      // onClick={resetTab}
                    >
                      Post My Property
                    </Button>
                  </div>
                </div>
              )}
              <Button
                className={cx("sign-up__button", "disabled")}
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Sign Up
              </Button>
            </form>
          );
        }}
      </Formik>

      <Footer />
    </div>
  );
}

export default AddProperties;
