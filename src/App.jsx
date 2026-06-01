import {

  BrowserRouter,

  Routes,

  Route,

} from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";

import SolutionPage from "./pages/SolutionPage";

export default function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/solutions/:slug"
          element={<SolutionPage />}
        />

      </Routes>

    </BrowserRouter>

  );
}