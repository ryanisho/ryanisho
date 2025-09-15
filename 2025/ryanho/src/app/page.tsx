"use client";

import { useState } from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Professional from "./components/Professional";
import Gallery from "./components/Gallery";

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return <About />;
      case "Professional":
        return <Professional />;
      case "Gallery":
        return <Gallery />;
      default:
        return <About />;
    }
  };
  return (
    <div className="min-h-screen main-container flex flex-col">
      <div className="sm:flex sm:flex-1">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}
