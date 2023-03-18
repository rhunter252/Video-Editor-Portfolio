import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";
import useBackground from "./context/BackgroundContext";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

function App() {
  const { setBackground } = useBackground();
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageWrapper key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>
    </AnimatePresence>
  );
}

export default App;
