import { ContentSection } from "../components/ContentSection";

export const SkillsPage: React.FC = () => (
  <ContentSection title="The Upskilling Imperative: In-Demand Skills and Certifications">
    <p className="mb-8">
      Continuous upskilling is an active, strategic imperative. The most
      valuable professionals possess a "Pi-shaped" skill set: deep expertise in
      two areas, often combining domain knowledge with a cross-cutting digital
      competency like data analytics or AI.
    </p>

    <div className="space-y-12">
      <div>
        <h4>Information Technology (IT)</h4>
        <ul>
          <li>
            <strong>In-Demand Roles:</strong> AI/ML Engineer, Data Scientist,
            Cloud Solutions Architect, Cybersecurity Analyst, DevOps Engineer.
          </li>
          <li>
            <strong>Key Skills:</strong> Python, Java, Cloud Platforms (AWS,
            Azure), AI/ML frameworks (TensorFlow), Docker, Kubernetes.
          </li>
          <li>
            <strong>Recommended Certifications:</strong> Google Data Analytics,
            IBM Data Science, Advanced Certifications from IITs.
          </li>
        </ul>
      </div>
      <div>
        <h4>Retail</h4>
        <ul>
          <li>
            <strong>In-Demand Roles:</strong> E-commerce Specialist, Supply
            Chain Coordinator, Retail Data Analyst, Omnichannel Marketing
            Specialist.
          </li>
          <li>
            <strong>Key Skills:</strong> Digital Marketing (SEO/SEM), Data
            Analytics (Python, SQL, Tableau), CRM/ERP systems, ESG reporting.
          </li>
          <li>
            <strong>Recommended Certifications:</strong> Google Digital
            Marketing & E-commerce, Tableau/Power BI certifications.
          </li>
        </ul>
      </div>
      <div>
        <h4>Banking, Financial Services, and Insurance (BFSI)</h4>
        <ul>
          <li>
            <strong>In-Demand Roles:</strong> Risk Manager, Financial Analyst,
            Data Scientist, Cybersecurity Analyst, Blockchain Developer.
          </li>
          <li>
            <strong>Key Skills:</strong> Data and Analytics Literacy, Fintech
            platforms, Cybersecurity, Risk Management, Blockchain, ESG
            compliance.
          </li>
          <li>
            <strong>Recommended Certifications:</strong> CFA (Chartered
            Financial Analyst), FRM (Financial Risk Manager).
          </li>
        </ul>
      </div>
      <div>
        <h4>Digital Marketing (Cross-Sector Skill)</h4>
        <ul>
          <li>
            <strong>In-Demand Roles:</strong> Digital Marketing Analyst, SEO/SEM
            Specialist, Social Media Manager, Content Strategist.
          </li>
          <li>
            <strong>Key Skills:</strong> SEO, SEM, Content Marketing, Social
            Media Marketing, Marketing Analytics, AI for marketing.
          </li>
          <li>
            <strong>Recommended Certifications:</strong> Google Digital
            Marketing & E-commerce, HubSpot Academy, Meta certifications.
          </li>
        </ul>
      </div>
    </div>
  </ContentSection>
);
