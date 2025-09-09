import { ReactNode } from "react";
// --- Content Section Wrapper ---
interface ContentSectionProps {
  title: string;
  children: ReactNode;
}
export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
}) => (
  <section className="py-12 md:py-16">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
      {title}
    </h2>
    <div className="prose prose-lg max-w-none text-gray-600">{children}</div>
  </section>
);
