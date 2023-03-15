import { Routes, Route, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";
import useBackground from "./context/BackgroundContext";

function App() {
  const { setBackground } = useBackground;
  const { pathname } = useNavigate;

  return (
    <AnimatePresence mode="wait">
      <PageWrapper></PageWrapper>
    </AnimatePresence>
  );
}

export default App;
