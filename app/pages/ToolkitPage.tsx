import { ContentSection } from "../components/ContentSection";

export const ToolkitPage: React.FC = () => (
  <ContentSection title="The Modern Job Seeker's Toolkit">
    <h3 className="text-2xl my-4">
      Mastering the Digital Job Hunt: A Guide to India's Top Job Portals
    </h3>
    <p className="leading-loose">
      A strategic approach is required to navigate India's job portals. Instead
      of a "spray and pray" method, focus your efforts on platforms aligned with
      your goals.
    </p>

    <div className="mt-12 overflow-x-auto bg-white rounded-lg shadow">
      <h3 className="text-xl font-bold p-6">
        Comparative Analysis of Top Indian Job Portals
      </h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Portal Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Strategic Use Case
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 font-medium">Naukri.com</td>
            <td className="px-6 py-4">Generalist</td>
            <td className="px-6 py-4">
              Foundational platform for broad search and visibility.
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium">LinkedIn</td>
            <td className="px-6 py-4">Professional Networking</td>
            <td className="px-6 py-4">
              Building a professional brand, networking for hidden jobs,
              senior-level search.
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium">Indeed</td>
            <td className="px-6 py-4">Aggregator</td>
            <td className="px-6 py-4">
              Comprehensive search across multiple sources with a clean user
              experience.
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium">Hirect / Wellfound</td>
            <td className="px-6 py-4">Startup / Tech</td>
            <td className="px-6 py-4">
              Targeted search for high-growth startup opportunities.
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium">
              Internshala / Freshersworld
            </td>
            <td className="px-6 py-4">Fresher / Intern</td>
            <td className="px-6 py-4">
              Securing first work experience and entry-level positions.
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium">Apna</td>
            <td className="px-6 py-4">Blue-Collar / Gig</td>
            <td className="px-6 py-4">Finding local, non-desk jobs quickly.</td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium">Jobs for Her</td>
            <td className="px-6 py-4">Niche (Women)</td>
            <td className="px-6 py-4">
              Finding opportunities with employers committed to diversity and
              flexibility.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="mt-12">
      Decoding the ATS: Crafting a Machine-Readable Resume for 2025
    </h3>
    <p className="leading-loose">
      Most companies use Applicant Tracking Systems (ATS) to screen resumes. If
      your resume isn't formatted correctly or lacks the right keywords, it will
      be invisible to recruiters.
    </p>
    <h4>ATS-Friendly Formatting:</h4>
    <ul>
      <li>
        <strong>Format:</strong> Use a chronological or hybrid format.
      </li>
      <li>
        <strong>File Type:</strong> Submit as a Word document (.doc, .docx) or a
        text-based PDF.
      </li>
      <li>
        <strong>Layout:</strong> Keep it clean and simple. Avoid tables,
        columns, text boxes, headers, and footers. No images or graphics.
      </li>
      <li>
        <strong>Fonts & Headings:</strong> Use standard fonts (Arial, Calibri)
        and conventional headings ("Work Experience," "Education").
      </li>
    </ul>
    <h4>Keyword Optimization:</h4>
    <ul>
      <li>
        <strong>Analyze Job Description:</strong> Identify key skills,
        qualifications, and responsibilities.
      </li>
      <li>
        <strong>Mirror Language:</strong> Incorporate these exact keywords
        naturally throughout your resume.
      </li>
      <li>
        <strong>Tailor for Each Application:</strong> Create a new, tailored
        version of your resume for each job application.
      </li>
    </ul>

    <h3 className="mt-12">
      The Public Sector Pathway: Navigating Government Job Opportunities
    </h3>
    <p className="leading-loose">
      Government jobs (Sarkari Naukri) remain a stable and sought-after career
      path. Use specialized portals like SarkariNaukri.com and the official
      National Career Service (NCS) portal to find opportunities. Success
      typically involves clearing rigorous competitive exams (UPSC, SSC CGL,
      IBPS PO), for which numerous online coaching platforms and community
      forums are available.
    </p>
  </ContentSection>
);
