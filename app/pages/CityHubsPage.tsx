import { ContentSection } from "../components/ContentSection";

export const CityHubsPage: React.FC = () => (
  <ContentSection title="Opportunities in India's Tier-2 & Tier-3 Cities">
    <h3 className="text-2xl my-4">
      The Great Rebalancing: The Data Behind the Hiring Boom
    </h3>
    <p className="leading-loose">
      A significant trend is the decentralization of economic opportunity. In
      2024, hiring activity surged in Tier-2 cities, outpacing metros. Cities
      like Coimbatore and Jaipur recorded remarkable hiring growth of 27% and
      22%, respectively. This is a deep structural transformation driven by
      improved digital infrastructure, remote work adoption, cost advantages for
      companies, and a growing local talent pool.
    </p>

    <h3 className="text-2xl my-4">Spotlight on Emerging Hubs</h3>
    <p className="leading-loose">
      Different cities are developing unique specializations, creating distinct,
      industry-specific clusters.
    </p>
    <ul>
      <li>
        <strong>Coimbatore:</strong> A manufacturing powerhouse that has pivoted
        to become a major IT and tech hub.
      </li>
      <li>
        <strong>Jaipur:</strong> A rapidly growing center for IT services,
        dominating in both voice and non-voice roles.
      </li>
      <li>
        <strong>Visakhapatnam:</strong> Leveraging its port, it is becoming a
        hub for technology and pharmaceuticals.
      </li>
      <li>
        <strong>Nagpur & Nashik:</strong> Diversifying into IT and data services
        with 20-25% YoY growth in IT hiring.
      </li>
      <li>
        <strong>Bhubaneswar:</strong> Gaining ground in Knowledge Process
        Outsourcing (KPO) and FinTech.
      </li>
      <li>
        <strong>Mysuru:</strong> An emerging frontrunner in new technologies,
        including generative AI.
      </li>
    </ul>

    <div className="mt-12 overflow-x-auto bg-white rounded-lg shadow">
      <h3 className="text-xl font-bold p-6">
        Key Emerging Tier-2 Job Hubs: A Snapshot
      </h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              City
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Key Industries/Specialization
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Avg. IT Salary (Mid-Level, LPA)
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Avg. Monthly Cost of Living (Single, INR)
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap font-medium">
              Coimbatore
            </td>
            <td className="px-6 py-4">IT, Manufacturing, Textiles</td>
            <td className="px-6 py-4">₹7 - ₹12 Lakhs</td>
            <td className="px-6 py-4">₹20,000 - ₹30,000</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap font-medium">Jaipur</td>
            <td className="px-6 py-4">IT Services, BFSI, Tourism</td>
            <td className="px-6 py-4">₹7 - ₹11 Lakhs</td>
            <td className="px-6 py-4">₹22,000 - ₹35,000</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap font-medium">Nagpur</td>
            <td className="px-6 py-4">IT, Logistics, Manufacturing</td>
            <td className="px-6 py-4">₹6 - ₹13 Lakhs</td>
            <td className="px-6 py-4">₹15,000 - ₹25,000</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap font-medium">
              Visakhapatnam
            </td>
            <td className="px-6 py-4">IT, Pharmaceuticals, Port & Logistics</td>
            <td className="px-6 py-4">₹8 - ₹14 Lakhs</td>
            <td className="px-6 py-4">₹25,000 - ₹40,000</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap font-medium">
              Chandigarh
            </td>
            <td className="px-6 py-4">IT, BPO, Government</td>
            <td className="px-6 py-4">₹6 - ₹13 Lakhs</td>
            <td className="px-6 py-4">₹30,000 - ₹45,000</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap font-medium">
              Bhubaneswar
            </td>
            <td className="px-6 py-4">KPO, FinTech, IT</td>
            <td className="px-6 py-4">₹7 - ₹12 Lakhs</td>
            <td className="px-6 py-4">₹20,000 - ₹30,000</td>
          </tr>
        </tbody>
      </table>
      <p className="p-4 text-sm text-gray-500">
        Note: Figures are estimates and subject to variation.
      </p>
    </div>
  </ContentSection>
);
