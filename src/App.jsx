import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import SolutionPage from "./pages/SolutionPage";

import ContactModal from "./components/contact/ContactModal";

export default function App() {

  const [isContactOpen, setIsContactOpen] =
    useState(false);

  return (

    <BrowserRouter>

      <Navbar
        onContactClick={() =>
          setIsContactOpen(true)
        }
      />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              onContactClick={() =>
                setIsContactOpen(true)
              }
            />
          }
        />

        <Route
          path="/solutions/:slug"
          element={<SolutionPage />}
        />

      </Routes>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() =>
          setIsContactOpen(false)
        }
      />

    </BrowserRouter>

  );
}