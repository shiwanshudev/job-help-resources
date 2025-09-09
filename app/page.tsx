"use client";

import React, { useState, useEffect, ReactNode, MouseEvent } from "react";
import {
  BriefcaseIcon,
  TrendingUpIcon,
  GraduationCapIcon,
  BuildingIcon,
  WrenchIcon,
  LightbulbIcon,
  MenuIcon,
  XIcon,
  GitHubIcon,
} from "./assets";

import { MarketTrendsPage } from "./pages/MarketTrendsPage";
import { FreshGraduatesPage } from "./pages/FreshGraduatesPage";
import { ExperiencedProPage } from "./pages/ExperiencedProPage";
import { CityHubsPage } from "./pages/CityHubsPage";
import { ToolkitPage } from "./pages/ToolkitPage";
import { SkillsPage } from "./pages/SkillsPage";
import HomePage from "./pages/HomePage";

import { Footer } from "./components/Footer";

// --- Header Component ---
interface HeaderProps {
  setPage: (page: string) => void;
  currentPage: string;
}
const Header: React.FC<HeaderProps> = ({ setPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isMenuOpen) return;
    const handler = (e: MouseEvent | MouseEventInit | any) => {
      const menu = document.getElementById("mobile-menu");
      if (menu && !menu.contains(e.target)) setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMenuOpen]);

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "marketTrends", title: "Market Trends" },
    { id: "freshGraduates", title: "For Freshers" },
    { id: "experiencedPros", title: "For Pros" },
    { id: "cityHubs", title: "City Hubs" },
    { id: "toolkit", title: "Job Toolkit" },
    { id: "skills", title: "Top Skills" },
  ];

  interface NavLinkProps {
    id: string;
    title: string;
  }
  const NavLink: React.FC<NavLinkProps> = ({ id, title }) => (
    <button
      type="button"
      aria-current={currentPage === id ? "page" : undefined}
      onClick={() => {
        setPage(id);
        setIsMenuOpen(false);
      }}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
        currentPage === id
          ? "text-white bg-indigo-600"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      {title}
    </button>
  );

  // GitHub repo link (replace with your actual repo URL)
  const githubUrl = "https://github.com/shiwanshudev/job-help-resources";

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              type="button"
              aria-label="Go to home"
              onClick={() => setPage("home")}
              className="flex items-center space-x-2"
            >
              <BriefcaseIcon />
              <span className="text-xl font-bold text-gray-900">
                JobHelp India
              </span>
            </button>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-2">
            {navLinks.map((link) => (
              <NavLink key={link.id} {...link} />
            ))}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              aria-label="Star on GitHub"
            >
              <GitHubIcon />
              <span className="ml-2 hidden sm:inline">Star</span>
            </a>
          </nav>
          <div className="md:hidden flex items-center">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              aria-label="Star on GitHub"
            >
              <GitHubIcon />
            </a>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-black/30"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute top-0 left-0 w-full bg-white shadow-lg animate-slide-down">
            <nav className="flex flex-col items-start p-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink key={link.id} {...link} />
              ))}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                aria-label="Star on GitHub"
              >
                <GitHubIcon />
                <span className="ml-2">Star</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

// --- Main App Component ---
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");

  useEffect(() => {
    // Basic SEO: Update page title on navigation
    const titles: { [key: string]: string } = {
      home: "JobHelp India: Your Guide to the 2025 Indian Job Market",
      marketTrends: "2025 Indian Job Market Trends | JobHelp India",
      freshGraduates: "Career Guide for Fresh Graduates | JobHelp India",
      experiencedPros:
        "Career Guide for Experienced Professionals | JobHelp India",
      cityHubs: "Top Tier-2 & Tier-3 Cities for Jobs in India | JobHelp India",
      toolkit: "Modern Job Seeker Toolkit | JobHelp India",
      skills: "In-Demand Skills & Certifications for 2025 | JobHelp India",
    };
    document.title = titles[currentPage] || "JobHelp India";
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "marketTrends":
        return <MarketTrendsPage />;
      case "freshGraduates":
        return <FreshGraduatesPage />;
      case "experiencedPros":
        return <ExperiencedProPage />;
      case "cityHubs":
        return <CityHubsPage />;
      case "toolkit":
        return <ToolkitPage />;
      case "skills":
        return <SkillsPage />;
      case "home":
      default:
        return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-gray-50 font-sans antialiased">
      <Header setPage={setCurrentPage} currentPage={currentPage} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
