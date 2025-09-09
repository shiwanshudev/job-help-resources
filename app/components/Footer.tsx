// --- Footer Component ---
export const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
      <p className="leading-loose">
        &copy; {new Date().getFullYear()} JobHelp India. All rights reserved.
      </p>
      <p className="text-sm text-gray-400 mt-2">
        Your guide to navigating the future of work in India.
      </p>
    </div>
  </footer>
);
