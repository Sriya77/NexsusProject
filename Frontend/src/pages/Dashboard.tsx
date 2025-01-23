import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  FileText,
  Receipt,
  RefreshCw,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardIcon from "../assets/dashboard.svg";

export function Dashboard() {
  const [referenceLink] = useState("virton.in/#/register/640389ab394ee");
  const navigate = useNavigate();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referenceLink);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-64 bg-blue-900 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-8">virton+</h2>
          <nav className="space-y-1">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 p-3 bg-blue-800 rounded"
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/business-partners"
              className="flex items-center space-x-2 p-3 hover:bg-blue-800 rounded"
            >
              <Users size={20} />
              <span>Business partners</span>
            </Link>
            <Link
              to="/business-promoters"
              className="flex items-center space-x-2 p-3 hover:bg-blue-800 rounded"
            >
              <UserPlus size={20} />
              <span>Business promoters</span>
            </Link>
            <Link
              to="/new-requests"
              className="flex items-center space-x-2 p-3 hover:bg-blue-800 rounded"
            >
              <FileText size={20} />
              <span>New requests</span>
            </Link>
            <Link
              to="/invoice"
              className="flex items-center space-x-2 p-3 hover:bg-blue-800 rounded"
            >
              <Receipt size={20} />
              <span>Invoice</span>
            </Link>
            <Link
              to="/renewal"
              className="flex items-center space-x-2 p-3 hover:bg-blue-800 rounded"
            >
              <RefreshCw size={20} />
              <span>Renewal</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 p-3 hover:bg-blue-800 rounded w-full text-left"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>

      <div className="flex-1 bg-white p-8">
        <div className="max-w-5xl mx-auto">
          <img
            src={DashboardIcon}
            alt="Dashboard Icon"
            className="w-30 h-30 mr-2"
          />
          <p className="text-gray-600 mb-8">01 - 25 March, 2020</p>

          <Card className="p-6 mb-8 bg-gray-50">
            <div className="grid grid-cols-2 gap-y-6">
              <div>
                <p className="text-gray-600 mb-1">Name</p>
                <p className="font-semibold">Nidheesh Aniyaram</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Reference no.</p>
                <p className="font-semibold">640389ab394ee</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Business Promoters</p>
                <p className="font-semibold">201</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Business Income</p>
                <p className="font-semibold">100500</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Business Partners</p>
                <p className="font-semibold">5</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gray-50">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Reference Link</h1>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{referenceLink}</span>
                <Button
                  onClick={copyToClipboard}
                  className="bg-blue-900 hover:bg-blue-800"
                >
                  Copy
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
