import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const footerLinks = [
    [
      "Audio Description",
      "Investor Relations",
      "Legal Notices",
    ],
    [
      "Help Centre",
      "Jobs",
      "Cookie Preferences",
    ],
    [
      "Gift Cards",
      "Terms of Use",
      "Corporate Information",
    ],
    [
      "Media Centre",
      "Privacy",
      "Contact Us",
    ],
  ];

  return (
    <footer className="bg-[#141414] text-[#808080]">
      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8 md:py-14 lg:px-0">

        {/* Social Media Icons */}
        <div className="mb-6 flex items-center gap-7 text-white">
          <a
            href="#"
            aria-label="Facebook"
            className="text-lg transition-colors duration-200 hover:text-gray-400"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="text-lg transition-colors duration-200 hover:text-gray-400"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="text-lg transition-colors duration-200 hover:text-gray-400"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="text-lg transition-colors duration-200 hover:text-gray-400"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-4 md:gap-x-10">
          {footerLinks.map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              {column.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs leading-5 transition-colors duration-200 hover:text-white sm:text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-8 text-xs text-[#808080]">
          © 1997-2026 Netflix, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;