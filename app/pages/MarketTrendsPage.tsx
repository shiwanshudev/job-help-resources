import { ContentSection } from "../components/ContentSection";

export const MarketTrendsPage: React.FC = () => (
  <ContentSection title="The Evolving Landscape: India's Job Market in 2025">
    <h3 className="text-2xl my-4">
      The 9% Growth Forecast: A Quantitative and Qualitative Analysis
    </h3>
    <p className="leading-loose">
      India's job market is poised for a significant expansion, with forecasts
      indicating a 9% growth in hiring for 2025. This projection builds upon a
      strong foundation, following a notable 10.05% annual growth in hiring
      witnessed throughout 2024. However, this aggregate growth figure conceals
      a more intricate reality. The expansion is highly concentrated within
      specific, technologically advanced sectors. The very forces driving this
      growth—automation, artificial intelligence, and digitalization—are
      simultaneously rendering certain traditional roles obsolete. The 9%
      growth, therefore, represents not just more jobs, but fundamentally
      different jobs.
    </p>

    <h3 className="text-2xl my-4">Deep Dive into High-Growth Sectors</h3>
    <ul>
      <li>
        <strong>Information Technology (IT):</strong> Projected growth of 15%,
        driven by Global Capability Centers (GCCs), multi-cloud adoption, and
        innovation in edge computing and cybersecurity.
      </li>
      <li>
        <strong>Retail:</strong> 12% growth, reflecting a blend of e-commerce
        expansion, AI-driven analytics, and tech-enabled in-store roles.
      </li>
      <li>
        <strong>BFSI and Finance:</strong> 10% growth in BFSI, focused on
        digital finance tools, regulatory compliance, and ESG expertise.
      </li>
      <li>
        <strong>Manufacturing:</strong> Building on 30% growth in 2024, demand
        continues for engineers and supply chain specialists as the industry
        adopts advanced automation.
      </li>
    </ul>

    <h3 className="text-2xl my-4">The Macro-Transformative Forces</h3>
    <p className="leading-loose">
      Beyond sectoral trends, several powerful macro-forces are fundamentally
      reshaping the contours of the Indian job market.
    </p>
    <ol>
      <li>
        <strong>Artificial Intelligence (AI):</strong> AI, particularly
        generative AI, is automating routine tasks and creating new roles like
        AI Ethics Specialists. AI fluency is rapidly becoming a core competency.
      </li>
      <li>
        <strong>The Green Transition:</strong> Sustainability is a central
        economic priority, fueling demand for "green jobs" like Renewable Energy
        Engineers and ESG Analysts.
      </li>
      <li>
        <strong>Global Economic and Geopolitical Shifts:</strong> Trade
        uncertainties and geoeconomic fragmentation are compelling organizations
        to transform their business models, impacting workforce strategies.
      </li>
    </ol>
  </ContentSection>
);
