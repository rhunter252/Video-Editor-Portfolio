import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";
import useBackground from "./context/BackgroundContext";

function App() {
  const { setBackground } = useBackground();
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageWrapper key={location.pathname}></PageWrapper>
    </AnimatePresence>
  );
}

export default App;
