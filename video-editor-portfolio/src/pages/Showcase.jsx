import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "../components/PageLayout";

const Showcase = () => {
  return (
    <div className="text-slate-100">
      <PageLayout smallTitle="PERSONAL SESSION" largeTitle="PURE INNOCENCE">
        Showcase
      </PageLayout>
    </div>
  );
};

export default Showcase;
