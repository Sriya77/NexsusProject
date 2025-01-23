import { Building2, Facebook, Instagram, Linkedin, Type as Skype } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Building2 className="h-8 w-8" />
            <span className="text-xl font-bold">Nexus Ventures</span>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-300">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-gray-300">
                Contact Support
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Skype className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-blue-800 text-center">
        <p>Copyright © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}