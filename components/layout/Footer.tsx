import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <div className="font-semibold">ALXListing</div>
            <div className="mt-2">
              © {new Date().getFullYear()} ALXListing. All rights reserved.
            </div>
          </div>
          <div className="flex gap-6">
            <div>
              <div className="font-semibold">Company</div>
              <div>About</div>
              <div>Careers</div>
            </div>
            <div>
              <div className="font-semibold">Support</div>
              <div>Help</div>
              <div>Contact</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
