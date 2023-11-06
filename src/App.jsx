/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";

import Home from "./route/home/Home.component";
import Navigation from "./route/navigation/Navigation.component";
import Authentication from "./route/sign-in/Authentication.component";
import SignUp from "./component/sign-up/SignUpForm.component";
import Shop from "./route/shop/shop.component";
import CheckOut from "./route/checkout/CheckOut.component";
// import { setCurrentUser } from "./store/user/user.action";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
}
