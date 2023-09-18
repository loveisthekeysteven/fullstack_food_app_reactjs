import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Login, Dashboard } from "./containers";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import { getAllCartItems, validateUserJWTToken } from "./api";

import { motion } from "framer-motion";

// loader

import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./context/actions/userActions";
import { fadeInOut } from "./animations";
import { Alert, CheckOutSuccess, MainLoader, UsersOrder } from "./components";
import { setCartItems } from "./context/actions/cardActions";

const App = () => {
  const firebaseAuth = getAuth(app);
  const [isLoading, setisLoading] = useState(false);

  const alert = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  useEffect(() => {
    setisLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            if (data) {
              getAllCartItems(data.user_id).then((items) => {
                console.log(items);
                dispatch(setCartItems(items));
              });
            }

            dispatch(setUserDetails(data));
          });
        });
      }
      setInterval(() => {
        setisLoading(false);
      }, 3000);
    });
  }, []);

  return (
    <div className="w-screen min-h-screen h-auto flex flex-col item-col items-center justify-center">
      {isLoading && (
        <motion.div
          {...fadeInOut}
          className="fixed z-50  inset-0 bg-cardOverlay backdrop-blur-md flex items-center justify-center w-full"
        >
          <MainLoader />
          {/* isLoading */}
        </motion.div>
      )}

      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/checkout-success" element={<CheckOutSuccess />} />
        <Route path="/user-orders" element={<UsersOrder />} />
      </Routes>
      {alert?.type && <Alert type={alert?.type} message={alert?.message} />}
    </div>
  );
};

export default App;
