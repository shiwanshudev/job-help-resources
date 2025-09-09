import React, { ReactNode } from "react";
import {
  TrendingUpIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  BuildingIcon,
  WrenchIcon,
  LightbulbIcon,
} from "../assets";

interface HomePageProps {
  setPage: (page: string) => void;
}
interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  pageId: string;
  setPage: (page: string) => void;
}
const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  pageId,
  setPage,
}) => (
  <div
    onClick={() => setPage(pageId)}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
    style={{ cursor: "pointer" }}
  >
    <div className="text-indigo-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-relaxed">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ setPage }) => (
  <main>
    <div className="relative bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-relaxed">
            Navigate the Future of Work in India
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Your definitive guide to the 2025 Indian job market. Discover
            trends, in-demand skills, and strategies to build a future-proof
            career.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => setPage("marketTrends")}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              Explore Market Trends
            </button>
            <button
              onClick={() => setPage("toolkit")}
              className="text-sm font-semibold leading-6 text-gray-900 group cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              Get Your Toolkit{" "}
              <span
                aria-hidden="true"
                className="group-hover:pl-1 transition-all"
              >
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-relaxed">
            Your Career Co-Pilot
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Tailored guidance for every stage of your professional journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            icon={<TrendingUpIcon />}
            title="Market Landscape 2025"
            description="Understand the 9% growth forecast, high-growth sectors, and the macro-forces of AI and sustainability."
            pageId="marketTrends"
            setPage={setPage}
          />
          <Card
            icon={<GraduationCapIcon />}
            title="For Fresh Graduates"
            description="Navigate the end of bulk hiring, embrace the skills-first paradigm, and build your 'Portfolio of Proof'."
            pageId="freshGraduates"
            setPage={setPage}
          />
          <Card
            icon={<BriefcaseIcon />}
            title="For Experienced Pros"
            description="Tackle the mid-career squeeze, master the AI mandate, and explore the gig economy."
            pageId="experiencedPros"
            setPage={setPage}
          />
          <Card
            icon={<BuildingIcon />}
            title="Beyond the Metros"
            description="Discover the hiring boom in Tier-2 & Tier-3 cities like Coimbatore, Jaipur, and Nagpur."
            pageId="cityHubs"
            setPage={setPage}
          />
          <Card
            icon={<WrenchIcon />}
            title="The Job Seeker's Toolkit"
            description="Master digital job portals, craft an ATS-friendly resume, and navigate government jobs."
            pageId="toolkit"
            setPage={setPage}
          />
          <Card
            icon={<LightbulbIcon />}
            title="Upskilling Imperative"
            description="Find in-demand skills and certifications for IT, Retail, BFSI, and Digital Marketing."
            pageId="skills"
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  </main>
);

export default HomePage;
