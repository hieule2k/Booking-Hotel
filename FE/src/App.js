import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Checkout from "./pages/checkout";
import Details from "./pages/Details/Details";
import HomeBooking from "./pages/Home-Booking/Home-Booking";
import Search from "./pages/Search/search";
import SignUp from "./pages/SignUp/SignUp";
import Login1 from "./pages/Login1/Login1";
import ButtonTest from "./pages/ButtonTest/ButtonTest";
import Account from "./pages/Account/Account";
import Wishlists from "./pages/Wishlists/Wishlists";
import ReservationForm from "./pages/Reservation-form/Reservation";
import ReservationStatus from "./pages/ReservationStatus/ReservationStatus";
import HostPage from "./pages/HostSite/HostPage/HostPage";
import SignUpHost from "./pages/HostSite/SignUpHost/SignUpHost";
import HostProperties from "./pages/HostSite/HostProperties/HostProperties";
import Admin from "./pages/Admin/Admin";
import AddProperties from "./pages/HostSite/AddProperties/AddProperties";
import AddRooms from "./pages/HostSite/AddRooms/AddRooms";
import HostReservation from "../src/pages/HostSite/HostReservation/HostReservation";
import TransactionHistory from "./pages/HostSite/TransactionHistory/TransactionHistory";
import ScrollToTop from "./components/ScrollToTop";
import "@fontsource/mulish"; // Import font
import HostSelect from "./pages/HostSite/HostSelect/HostSelect";
import LoginHost from "./pages/LoginHost/LoginHost";

function App() {
  // const [data, getData] = useState();
  // useEffect(() => {
  //   axios
  //     .post("103.184.113.181/customer", data)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [data]);
  // const handleApi = async () => {
  //   const response = await axios.get("/103.184.113.181/customer");

  //   console.log(response);
  // };
  // useEffect(() => {
  //   handleApi();
  // }, []);
  // axios
  //   .get("http://103.184.113.181:81/hotel/1")
  //   .then(function (response) {
  //     console.log(response);
  //     console.log("succes");
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  const [wishlist, setWishList] = useState(() => {
    const storageData = JSON.parse(localStorage.getItem("wishlist"));

    return storageData ?? [];
  });

  const [currentAccount, setCurrentAccount] = useState(() => {
    const storageData = JSON.parse(localStorage.getItem("currentAccount"));

    return storageData ?? false;
  });

  const handleLike = (item) => {
    const itemExist = wishlist.find((exa) => exa.id === item.id);
    if (currentAccount) {
      if (itemExist) {
        const newWishList = wishlist.filter((i) => i.id !== item.id);
        setWishList(() => {
          const jsonData = JSON.stringify(newWishList);
          localStorage.setItem("wishlist", jsonData);
          return newWishList;
        });
      } else {
        setWishList((prev) => {
          const newData = [...prev, item];
          const jsonData = JSON.stringify(newData);
          localStorage.setItem("wishlist", jsonData);
          return newData;
        });
      }
    } else {
      alert("jehe");
    }
  };

  const clearAll = () => {
    setWishList(() => {
      const newData = [];
      localStorage.removeItem("wishlist");
      return newData;
    });
  };
  const handleRemove = (id) => {
    const newWishList = wishlist.filter((item) => item.id !== id);

    setWishList(() => {
      const jsonData = JSON.stringify(newWishList);
      localStorage.setItem("wishlist", jsonData);
      return newWishList;
    });
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route
          path="/HomeBooking"
          element={<HomeBooking handleLike={handleLike} />}
        />
        <Route path="/Search" element={<Search />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login1" element={<Login1 />} />
        <Route path="/ButtonTest" element={<ButtonTest />} />
        <Route path="/Account" element={<Account />} />
        <Route
          path="/Wishlists"
          element={
            <Wishlists
              wishlist={wishlist}
              clearAll={clearAll}
              handleRemove={handleRemove}
            />
          }
        />
        <Route path="/ReservationForm" element={<ReservationForm />} />
        <Route path="/ReservationStatus" element={<ReservationStatus />} />
        <Route path="/HostPage" element={<HostPage />} />
        <Route path="/SignUpHost" element={<SignUpHost />} />
        <Route path="/HostProperties" element={<HostProperties />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AddProperties" element={<AddProperties />} />
        <Route path="/AddRooms" element={<AddRooms />} />
        <Route path="/HostReservation" element={<HostReservation />} />
        <Route path="/TransactionHistory" element={<TransactionHistory />} />
        <Route path="/HostSelect" element={<HostSelect />} />
        <Route path="/LoginHost" element={<LoginHost />} />
      </Routes>
    </div>
  );
}
export default App;
