import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router-dom";

import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import Reservations from "./pages/Reservations";
import NotFound from "./pages/Notfound";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter basename="/Classic-Quads-Barbers">
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/team/:id" element={<TeamMember />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </HashRouter>
);

reportWebVitals();
