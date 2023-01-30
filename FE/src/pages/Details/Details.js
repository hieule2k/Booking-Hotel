import React, { useState } from "react";
import avatar from "../../assets/img/avatar.jpg";
import map from "../../assets/img/map.jpg";
import Button from "../../components/Button/Button";
import NavBar from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import styles from "../Details/Details.module.css";
import classNames from "classnames/bind";

import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineWifi,
  AiFillStar,
  AiOutlineArrowRight,
  AiOutlinePhone,
} from "react-icons/ai";
import { TbToolsKitchen } from "react-icons/tb";
import { FaDesktop } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { BiBed, BiBuilding } from "react-icons/bi";
import { GiWashingMachine } from "react-icons/gi";
import { MdBalcony, MdOutlineHealthAndSafety } from "react-icons/md";
import { useParams } from "react-router-dom";
import data from "../../json/hotel.json";
import data2 from "../../json/hotelNearby.json";
import data3 from "../../json/hotelTopRated.json";
import data4 from "../../json/hotel6.json";
import data5 from "../../json/hotel3.json";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
const cx = classNames.bind(styles);

function Details() {
  const [status, setStatus] = useState(() => {
    const storageData = JSON.parse(localStorage.getItem("rooms"));

    return storageData ?? [];
  });
  const { id } = useParams();
  console.log(id);
  if (data.find((product) => product.id === id)) {
    var product = data.find((product) => product.id === id);
  } else if (data2.find((product) => product.id === id)) {
    var product = data2.find((product) => product.id === id);
  } else if (data3.find((product) => product.id === id)) {
    var product = data3.find((product) => product.id === id);
  } else if (data4.find((product) => product.id === id)) {
    var product = data4.find((product) => product.id === id);
  } else if (data5.find((product) => product.id === id)) {
    var product = data5.find((product) => product.id === id);
  }
  const { name, address, prices, images, detailRoom, description } = product;
  const reserveStorage = () => {
    setStatus((prev) => {
      const newData = [...prev, product];
      const jsonData = JSON.stringify(newData);
      localStorage.setItem("rooms", jsonData);
      return newData;
    });
  };
  return (
    <div className={cx("details")}>
      <NavBar />

      <ImageGallery images={images} />
      <div className={cx("details-container")}>
        <div className={cx("col-left")}>
          <div className={cx("top-title")}>
            <div className={cx("top-left")}>
              <h3 className={cx("top-heading")}>{name}</h3>
              <p className={cx("top-desc")}>{address}</p>
            </div>
            <div className={cx("top-icon")}>
              <i className={cx("top-heart__icon")}>
                <AiOutlineHeart />
              </i>
              <i className={cx("top-share__icon")}>
                <AiOutlineShareAlt />
              </i>
            </div>
          </div>
          <div className={cx("main-amanities")}>
            {detailRoom.map((detail) => (
              <div key={detail.id} className={cx("amanitie")}>
                <i className={cx("amanitie-icon")}>
                  <BiBed />
                </i>
                <div className={cx("amanitie-desc")}>
                  {detail.total} {detail.name}
                </div>
              </div>
            ))}
          </div>
          <div className={cx("details-description")}>
            <h2 className={cx("description-heading")}>Apartment Description</h2>
            <p className={cx("description-desc")}>
              {description}
              <br />
              <br />
              {description}
            </p>
          </div>
          <div className={cx("offered-amenities")}>
            <div style={{ fontSize: "40px", fontWeight: "600" }}>
              Offered Amenities
            </div>
            <div className={cx("offered-amenities-container")}>
              <div className={cx("offered-icon__wrapper")}>
                <i className={cx("offered-icon")}>
                  <TbToolsKitchen />
                </i>
                <p className={cx("offered-name")}>Kitchen</p>
              </div>
              <div className={cx("offered-icon__wrapper")}>
                <i className={cx("offered-icon")}>
                  <FaDesktop />
                </i>
                <p className={cx("offered-name")}>Television with Netflix</p>
              </div>
              <div className={cx("offered-icon__wrapper")}>
                <i className={cx("offered-icon")}>
                  <BsSnow />
                </i>
                <p className={cx("offered-name")}>Air Conditioner</p>
              </div>
              <div className={cx("offered-icon__wrapper")}>
                <i className={cx("offered-icon")}>
                  <AiOutlineWifi />
                </i>
                <p className={cx("offered-name")}>Free Wireless Internet</p>
              </div>
              <div className={cx("offered-icon__wrapper")}>
                <i className={cx("offered-icon")}>
                  <GiWashingMachine />
                </i>
                <p className={cx("offered-name")}>Washer</p>
              </div>
              <div className={cx("offered-icon__wrapper")}>
                <i className={cx("offered-icon")}>
                  <MdBalcony />
                </i>
                <p className={cx("offered-name")}>Balcony or Patio</p>
              </div>
            </div>
            <div className={cx("show-more__amenitites")}>
              <Button outline mediumx textBlack backGroundWhite>
                Show All 10 Amenities
              </Button>
            </div>
          </div>
          <div className={cx("safety")}>
            <h2 className={cx("safety-heading")}>Safety and Hygiene</h2>
            <div className={cx("safety-wrapper")}>
              <div className={cx("safety-icon__container")}>
                <i className={cx("safety-icon")}>
                  <MdOutlineHealthAndSafety />
                </i>
                <p className={cx("safety-name")}>Daily Cleaning</p>
              </div>
              <div className={cx("safety-icon__container")}>
                <i className={cx("safety-icon")}>
                  <MdOutlineHealthAndSafety />
                </i>
                <p className={cx("safety-name")}>Fire Extinguishers</p>
              </div>
              <div className={cx("safety-icon__container")}>
                <i className={cx("safety-icon")}>
                  <MdOutlineHealthAndSafety />
                </i>
                <p className={cx("safety-name")}>
                  Disinfections and Sterilizations
                </p>
              </div>
              <div className={cx("safety-icon__container")}>
                <i className={cx("safety-icon")}>
                  <MdOutlineHealthAndSafety />
                </i>
                <p className={cx("safety-name")}>Smoke Detectors</p>
              </div>
            </div>
          </div>
          <div className={cx("map-container")}>
            <img className={cx("map-img")} src={map} alt="hieu" />
          </div>
          <div className={cx("nearby-services__container")}>
            <h2 className={cx("nearby-sevices__heading")}>Nearby Services</h2>
            <div className={cx("nearby-services__item--wrapper")}>
              <div className={cx("nearby-sevices__item")}>
                <div className={cx("services__item--name")}>
                  Grill Restro & Bar
                </div>
                <div className={cx("services__item--distance")}>
                  100 meters away
                </div>
                <div className={cx("services__item--rating")}>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                </div>
              </div>
              <div className={cx("nearby-sevices__item")}>
                <div className={cx("services__item--name")}>
                  Grill Restro & Bar
                </div>
                <div className={cx("services__item--distance")}>
                  100 meters away
                </div>
                <div className={cx("services__item--rating")}>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                </div>
              </div>
              <div className={cx("nearby-sevices__item")}>
                <div className={cx("services__item--name")}>
                  Grill Restro & Bar
                </div>
                <div className={cx("services__item--distance")}>
                  100 meters away
                </div>
                <div className={cx("services__item--rating")}>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                  <i className={cx("item--rating__star")}>
                    <AiFillStar />
                  </i>
                </div>
              </div>
              <div className={cx("nearby-sevices-icon__container")}>
                <i className={cx("nearby-services__arrow")}>
                  <AiOutlineArrowRight />
                </i>
              </div>
            </div>
            <Button
              black
              mediumx
              rounded
              className={cx("nearby-services__button")}
            >
              Show On Map
            </Button>
          </div>
          <div className={cx("reviews")}>
            <div className={cx("reviews-heading")}>
              <div className={cx("reviews-star")}>
                <h2 style={{ fontSize: "20px", fontWeight: "700" }}>Reviews</h2>
                <i className={cx("reviews-icon")}>
                  <AiFillStar />
                </i>
              </div>
              <div className={cx("reviews-rate")}>5.0</div>
            </div>
            <div className={cx("reviews-point__container")}>
              <div className={cx("reviews-point")}>
                <div className={cx("reviews-name")}>Amenities</div>
                <div className={cx("reviews-point__rate")}>5.0</div>
              </div>
              <div className={cx("reviews-point")}>
                <div className={cx("reviews-name")}>Hygiene</div>
                <div className={cx("reviews-point__rate")}>5.0</div>
              </div>
              <div className={cx("reviews-point")}>
                <div className={cx("reviews-name")}>Communication</div>
                <div className={cx("reviews-point__rate")}>5.0</div>
              </div>
              <div className={cx("reviews-point")}>
                <div className={cx("reviews-name")}>Location of Property</div>
                <div className={cx("reviews-point__rate")}>5.0</div>
              </div>
              <div className={cx("reviews-point")}>
                <div className={cx("reviews-name")}>Value for Money</div>
                <div className={cx("reviews-point__rate")}>5.0</div>
              </div>
            </div>
            <div className={cx("reviewers-container")}>
              <div className={cx("reviewers")}>
                <div className={cx("reviewers-information")}>
                  <div className={cx("reviewers-avatar")}>
                    <img
                      className={cx("reviewers-img")}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAMFBMVEXk5ueutLfo6eqssbTq7O2orrK7wMPa3d7S1dfGyszMz9Hg4+TCxsnd4OG4vcCzuLuHxgkrAAAC/0lEQVR4nO2a626rMAyAwSYXAiTv/7YntIytFQ022Kl0lE+bNG0//DVxnIvXdY1Go9FoNBqNRqPxPwKQv39++Ep8F2YbU4p29lN1CQBvjcF+A00/u6Fm/C4g7uE3CUy+2kCA79/CbxLRVVGALh7GfziECgrgPsbPmDhpO0AoCeRRSIuuwpnA6jCpCjhzJpDRFFgoAn3SM5go8fM8zFqpAPNpEmwKXkmhuA5fFXQMBmr8XBZGDQXwpDTcUFmSiSGACoNAKwU7CisSLDkPV4z8ciDWgn0arPiBhZWHK9ICA7Ua7ThpA85KWMEgbMBMg3VzEE6EhWvQJ2EDxzbohQ08NxHFdye+gWkG4gb8TETptcAeA+m1MHENMEpvTdwRED+jDJFr4GUFOhiZ04CLsAE/FeUPirztGUfxMxJ3GqQPKJmFZRDlBfJhmSGgcFTOcC4MSeXiONBvDEbpUY18VpSvyBuER6TNQLwa7Qq0edBJww1KWdK4N/9C2KTRqj4owqmCWhb+KqSig5G+Kh1hC5XJ1Hjazovy+HG/wqPyrjDN5sDBYKjX6xmmuX+VQEwV469A521CRPP46tPs6jfccsTFh3Ecg3fLNxp+AMNfqhrAAJ3Ln97GlKf/0XSLdh6Dm9a/qEeHyYX4DIwvifj4RRz9ojka+aM/o3+uSGjWpNTJCgA3p6MycGRhPUgX52EZe86TJqLo8syjb0tD/8Eh+k7IAVxkx39KJBEHWEp74Qkm+bv5sG5Cl+M/He4d3D912TngeH0qoGM/qB8qXB4GcPcHYHMIl7IBwr0M+IuxVwS4zzZFMLKTgdzhpSpwm29wowh8UOA1nuBmFTgkMfqwsjnwA+M6B/yHdJoC+T41KUzBA+q1HriNPYYCKRXILyUXwEgZBHZnkaVAmAfpUvQGoTBdaKZwOP/PNeUh6Alv7toCZytSckv+wEllBG4zhw+eTIL6EJxMA/Mfbi5RfvDU2RTfKDY/WF2Mq5TPCfqJmCm+vCfUxxSbYFCDkkCj0Wg0vss/Bz8hBPfP7w0AAAAASUVORK5CYII="
                      alt="hieu"
                    />
                  </div>
                  <div className={cx("reviewers-personal-information")}>
                    <div className={cx("reviewers-name")}>John Doberman</div>
                    <div className={cx("reviewers-date")}>Mar 12 2020</div>
                  </div>
                </div>
                <div className={cx("reviewers-desc")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className={cx("reviewers")}>
                <div className={cx("reviewers-information")}>
                  <div className={cx("reviewers-avatar")}>
                    <img
                      className={cx("reviewers-img")}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAMFBMVEXk5ueutLfo6eqssbTq7O2orrK7wMPa3d7S1dfGyszMz9Hg4+TCxsnd4OG4vcCzuLuHxgkrAAAC/0lEQVR4nO2a626rMAyAwSYXAiTv/7YntIytFQ022Kl0lE+bNG0//DVxnIvXdY1Go9FoNBqNRqPxPwKQv39++Ep8F2YbU4p29lN1CQBvjcF+A00/u6Fm/C4g7uE3CUy+2kCA79/CbxLRVVGALh7GfziECgrgPsbPmDhpO0AoCeRRSIuuwpnA6jCpCjhzJpDRFFgoAn3SM5go8fM8zFqpAPNpEmwKXkmhuA5fFXQMBmr8XBZGDQXwpDTcUFmSiSGACoNAKwU7CisSLDkPV4z8ciDWgn0arPiBhZWHK9ICA7Ua7ThpA85KWMEgbMBMg3VzEE6EhWvQJ2EDxzbohQ08NxHFdye+gWkG4gb8TETptcAeA+m1MHENMEpvTdwRED+jDJFr4GUFOhiZ04CLsAE/FeUPirztGUfxMxJ3GqQPKJmFZRDlBfJhmSGgcFTOcC4MSeXiONBvDEbpUY18VpSvyBuER6TNQLwa7Qq0edBJww1KWdK4N/9C2KTRqj4owqmCWhb+KqSig5G+Kh1hC5XJ1Hjazovy+HG/wqPyrjDN5sDBYKjX6xmmuX+VQEwV469A521CRPP46tPs6jfccsTFh3Ecg3fLNxp+AMNfqhrAAJ3Ln97GlKf/0XSLdh6Dm9a/qEeHyYX4DIwvifj4RRz9ojka+aM/o3+uSGjWpNTJCgA3p6MycGRhPUgX52EZe86TJqLo8syjb0tD/8Eh+k7IAVxkx39KJBEHWEp74Qkm+bv5sG5Cl+M/He4d3D912TngeH0qoGM/qB8qXB4GcPcHYHMIl7IBwr0M+IuxVwS4zzZFMLKTgdzhpSpwm29wowh8UOA1nuBmFTgkMfqwsjnwA+M6B/yHdJoC+T41KUzBA+q1HriNPYYCKRXILyUXwEgZBHZnkaVAmAfpUvQGoTBdaKZwOP/PNeUh6Alv7toCZytSckv+wEllBG4zhw+eTIL6EJxMA/Mfbi5RfvDU2RTfKDY/WF2Mq5TPCfqJmCm+vCfUxxSbYFCDkkCj0Wg0vss/Bz8hBPfP7w0AAAAASUVORK5CYII="
                      alt="hieu"
                    />
                  </div>
                  <div className={cx("reviewers-personal-information")}>
                    <div className={cx("reviewers-name")}>John Doberman</div>
                    <div className={cx("reviewers-date")}>Mar 12 2020</div>
                  </div>
                </div>
                <div className={cx("reviewers-desc")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className={cx("reviewers")}>
                <div className={cx("reviewers-information")}>
                  <div className={cx("reviewers-avatar")}>
                    <img
                      className={cx("reviewers-img")}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAMFBMVEXk5ueutLfo6eqssbTq7O2orrK7wMPa3d7S1dfGyszMz9Hg4+TCxsnd4OG4vcCzuLuHxgkrAAAC/0lEQVR4nO2a626rMAyAwSYXAiTv/7YntIytFQ022Kl0lE+bNG0//DVxnIvXdY1Go9FoNBqNRqPxPwKQv39++Ep8F2YbU4p29lN1CQBvjcF+A00/u6Fm/C4g7uE3CUy+2kCA79/CbxLRVVGALh7GfziECgrgPsbPmDhpO0AoCeRRSIuuwpnA6jCpCjhzJpDRFFgoAn3SM5go8fM8zFqpAPNpEmwKXkmhuA5fFXQMBmr8XBZGDQXwpDTcUFmSiSGACoNAKwU7CisSLDkPV4z8ciDWgn0arPiBhZWHK9ICA7Ua7ThpA85KWMEgbMBMg3VzEE6EhWvQJ2EDxzbohQ08NxHFdye+gWkG4gb8TETptcAeA+m1MHENMEpvTdwRED+jDJFr4GUFOhiZ04CLsAE/FeUPirztGUfxMxJ3GqQPKJmFZRDlBfJhmSGgcFTOcC4MSeXiONBvDEbpUY18VpSvyBuER6TNQLwa7Qq0edBJww1KWdK4N/9C2KTRqj4owqmCWhb+KqSig5G+Kh1hC5XJ1Hjazovy+HG/wqPyrjDN5sDBYKjX6xmmuX+VQEwV469A521CRPP46tPs6jfccsTFh3Ecg3fLNxp+AMNfqhrAAJ3Ln97GlKf/0XSLdh6Dm9a/qEeHyYX4DIwvifj4RRz9ojka+aM/o3+uSGjWpNTJCgA3p6MycGRhPUgX52EZe86TJqLo8syjb0tD/8Eh+k7IAVxkx39KJBEHWEp74Qkm+bv5sG5Cl+M/He4d3D912TngeH0qoGM/qB8qXB4GcPcHYHMIl7IBwr0M+IuxVwS4zzZFMLKTgdzhpSpwm29wowh8UOA1nuBmFTgkMfqwsjnwA+M6B/yHdJoC+T41KUzBA+q1HriNPYYCKRXILyUXwEgZBHZnkaVAmAfpUvQGoTBdaKZwOP/PNeUh6Alv7toCZytSckv+wEllBG4zhw+eTIL6EJxMA/Mfbi5RfvDU2RTfKDY/WF2Mq5TPCfqJmCm+vCfUxxSbYFCDkkCj0Wg0vss/Bz8hBPfP7w0AAAAASUVORK5CYII="
                      alt="hieu"
                    />
                  </div>
                  <div className={cx("reviewers-personal-information")}>
                    <div className={cx("reviewers-name")}>John Doberman</div>
                    <div className={cx("reviewers-date")}>Mar 12 2020</div>
                  </div>
                </div>
                <div className={cx("reviewers-desc")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className={cx("reviewers")}>
                <div className={cx("reviewers-information")}>
                  <div className={cx("reviewers-avatar")}>
                    <img
                      className={cx("reviewers-img")}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAMFBMVEXk5ueutLfo6eqssbTq7O2orrK7wMPa3d7S1dfGyszMz9Hg4+TCxsnd4OG4vcCzuLuHxgkrAAAC/0lEQVR4nO2a626rMAyAwSYXAiTv/7YntIytFQ022Kl0lE+bNG0//DVxnIvXdY1Go9FoNBqNRqPxPwKQv39++Ep8F2YbU4p29lN1CQBvjcF+A00/u6Fm/C4g7uE3CUy+2kCA79/CbxLRVVGALh7GfziECgrgPsbPmDhpO0AoCeRRSIuuwpnA6jCpCjhzJpDRFFgoAn3SM5go8fM8zFqpAPNpEmwKXkmhuA5fFXQMBmr8XBZGDQXwpDTcUFmSiSGACoNAKwU7CisSLDkPV4z8ciDWgn0arPiBhZWHK9ICA7Ua7ThpA85KWMEgbMBMg3VzEE6EhWvQJ2EDxzbohQ08NxHFdye+gWkG4gb8TETptcAeA+m1MHENMEpvTdwRED+jDJFr4GUFOhiZ04CLsAE/FeUPirztGUfxMxJ3GqQPKJmFZRDlBfJhmSGgcFTOcC4MSeXiONBvDEbpUY18VpSvyBuER6TNQLwa7Qq0edBJww1KWdK4N/9C2KTRqj4owqmCWhb+KqSig5G+Kh1hC5XJ1Hjazovy+HG/wqPyrjDN5sDBYKjX6xmmuX+VQEwV469A521CRPP46tPs6jfccsTFh3Ecg3fLNxp+AMNfqhrAAJ3Ln97GlKf/0XSLdh6Dm9a/qEeHyYX4DIwvifj4RRz9ojka+aM/o3+uSGjWpNTJCgA3p6MycGRhPUgX52EZe86TJqLo8syjb0tD/8Eh+k7IAVxkx39KJBEHWEp74Qkm+bv5sG5Cl+M/He4d3D912TngeH0qoGM/qB8qXB4GcPcHYHMIl7IBwr0M+IuxVwS4zzZFMLKTgdzhpSpwm29wowh8UOA1nuBmFTgkMfqwsjnwA+M6B/yHdJoC+T41KUzBA+q1HriNPYYCKRXILyUXwEgZBHZnkaVAmAfpUvQGoTBdaKZwOP/PNeUh6Alv7toCZytSckv+wEllBG4zhw+eTIL6EJxMA/Mfbi5RfvDU2RTfKDY/WF2Mq5TPCfqJmCm+vCfUxxSbYFCDkkCj0Wg0vss/Bz8hBPfP7w0AAAAASUVORK5CYII="
                      alt="hieu"
                    />
                  </div>
                  <div className={cx("reviewers-personal-information")}>
                    <div className={cx("reviewers-name")}>John Doberman</div>
                    <div className={cx("reviewers-date")}>Mar 12 2020</div>
                  </div>
                </div>
                <div className={cx("reviewers-desc")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={cx("reviewers-showmore")}>
              <Button
                mediumx
                backGroundWhite
                outline
                textBlack
                className={cx("reviewers-showmore-button")}
              >
                Show All 100 Reviews
              </Button>
            </div>
          </div>
        </div>
        <div className={cx("col-right")}>
          <div className={cx("side-bar")}>
            <div className={cx("price-range")}>$1000 - 2000$</div>
            <div className={cx("price-container")}>
              {prices.map((price) => (
                <div key={price.id} className={cx("price")}>
                  {price.name}: {price.price}
                </div>
              ))}
            </div>
            <Button
              large
              black
              rounded
              to="/ReservationForm"
              onClick={reserveStorage}
            >
              Reserve Now
            </Button>
            <div className={cx("contact")}>
              <div className={cx("contact-information")}>
                <div className={cx("contact-name")}>Property Inquiry</div>
                <i className={cx("contact-icon")}>
                  <BiBuilding />
                </i>
              </div>
              <div className={cx("contact-information")}>
                <div className={cx("contact-name")}>Contact Host</div>
                <i className={cx("contact-icon")}>
                  <AiOutlinePhone />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Details;
