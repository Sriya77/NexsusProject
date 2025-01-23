import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/nexsus.svg";


export function Navbar() {
  const location = useLocation();
  const isVideosPage = location.pathname === '/videos';

  return (
    <nav className="bg-blue-900 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
        <img src={Logo} alt="Nexus Ventures Logo" className="h-17" />
        </Link>
        <div className="space-x-4">
          {isVideosPage ? (
            <Button asChild className="bg-blue-900 hover:bg-blue-800">
              <Link to="/dashboard">Virton Plus</Link>
            </Button>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link to="/transactions">Admin Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}