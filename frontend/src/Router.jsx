import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/Home";
import Header from "./layout/Header";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Footer from "./layout/Footer";

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter basename="">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header status={"home-page"} />
                <App />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header status={"login-page"} />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/user"
            element={
              <>
                <Header status={"user-page"} />
                <UserProfile />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
export default Router;
