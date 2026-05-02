import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Archive from "./pages/Archive";
import Home from "./pages/Home";
import System from "./pages/System";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="ml-0 flex min-w-0 flex-1 flex-col md:ml-24"
    >
      {children}
      <Footer />
    </motion.div>
  );
};

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/archive"
          element={
            <PageWrapper>
              <Archive />
            </PageWrapper>
          }
        />
        <Route
          path="/system"
          element={
            <PageWrapper>
              <System />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen bg-slate-50">
        <Navigation />
        <AppRoutes />
      </div>
    </HashRouter>
  );
}
