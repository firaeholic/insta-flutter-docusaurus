import React from 'react';

interface NavbarProps {
  logoSrc: string;
  logoAlt?: string;
  pricingLink: string;
  backToSiteLink: string;
}

const NavbarSection: React.FC<NavbarProps> = ({
  logoSrc,
  logoAlt = 'Logo',
  pricingLink,
  backToSiteLink,
}) => {
  return (
    <nav className="bg-gray-900 !border-b-2 text-white fixed top-0 left-0 right-0 z-50 shadow-sm shadow-slate-700">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-4 justify-center !hover:no-underline">
          <a href={backToSiteLink}>
            Instflutter
          </a>
        </div>

        {/* Right Side - Links */}
        <div className="flex items-center space-x-4">
          <a
            href={pricingLink}
            className="px-4 py-2 bg-red-500 text-gray-100 hover:text-gray-100 rounded-md font-semibold hover:bg-red-400 transition"
          >
            Get Offer
          </a>
          {/* <a
            href={backToSiteLink}
            target='_blank'
            className="text-gray-300 hover:text-gray-300 transition"
          >
            Back to Site
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
