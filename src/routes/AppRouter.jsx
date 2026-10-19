import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Biography from "../pages/Biography";
import Books from "../pages/Books";
import Articles from "../pages/Articles";
import Gallery from "../pages/Gallery";
import Videos from "../pages/Videos";
import Quotes from "../pages/Quotes";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="biography" element={<Biography />} />
        <Route path="books" element={<Books />} />
        <Route path="articles" element={<Articles />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="videos" element={<Videos />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;