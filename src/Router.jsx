import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Payment from "./pages/Payment/Payment";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function Router() {
  const stripePromise = loadStripe(
    "pk_test_51R1RduKGI1tiCYLFCsFe4zUuRWu2DfZ8qtZWphmVgFferGVwjlY4IuSUrIyORi5VmD0D1EjJRnRzDJMIq7dBQXab00pWWAx9Mw"
  );
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />

      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route
        path="/payment"
        element={
          <Elements stripe={stripePromise}>
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          </Elements>
        }
      />
    </Routes>
  );
}
export default Router;
