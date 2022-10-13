import React from "react";
import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";
import Route from "./Route";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Route />
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
