import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { UserProvider } from "./context/user.context.jsx";
import { CategoriesProvider } from "./context/categories.context.jsx";
import { CartProvider } from "./context/cart.context.jsx";
import { store } from "./store/store.js";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        {/* <UserProvider> */}
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
