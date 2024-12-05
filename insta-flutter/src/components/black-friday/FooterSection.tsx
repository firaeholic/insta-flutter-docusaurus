import React from "react";

interface FooterData {
  style: string;
  links: Array<{
    title: string;
    items: Array<{
      html?: string;
      label?: string;
      to?: string;
      href?: string;
    }>;
  }>;
  company: string;
}

interface FooterProps {
  footerData: FooterData;
}

const FooterSection: React.FC<FooterProps> = ({ footerData }) => {
  return (
    <footer
      className={`${
        footerData.style === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } py-16`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerData.links.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              {section.items.map((item, idx) => (
                <div key={idx}>
                  {item.html ? (
                    <div
                      className="text-gray-300 text-sm"
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  ) : (
                    <a
                      href={item.to || item.href}
                      className="block text-gray-400 hover:text-yellow-400 mb-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} {footerData.company}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
