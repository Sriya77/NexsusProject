import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LayoutDashboard, Users, FileText, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DashboardIcon from "../assets/dashboard.svg"  


const transactions = [
  {
    order: "75465",
    date: "28-08-24",
    shipped: "Shipped",
    currency: "INR",
    grossAmount: "472",
    paymentFees: "9.54",
    paymentTax: "1.7",
    tds: "0",
    amountPayable: "450",
    customers: "Johnson"
  },
  // Add more transactions as needed
];

export function TransactionList() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (

    
    <div className="flex min-h-screen bg-gray-100">

      <div className="w-64 bg-blue-900 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-8">virton+</h2>
          <nav className="space-y-2">
            <Link to="/user-list" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-800">
              <Users size={20} />
              <span>User List</span>
            </Link>
            <Link to="/transactions" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-800">
              <LayoutDashboard size={20} />
              <span>Transaction List</span>
            </Link>
            <Link to="/video-management" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-800">
              <FileText size={20} />
              <span>Video Management</span>
            </Link>
            <Link to="/top-receivers" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-800">
              <Users size={20} />
              <span>Top Receivers List</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 p-2 rounded hover:bg-blue-800 w-full text-left"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>


      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
          <div>
          <img
            src={DashboardIcon}
            alt="Dashboard Icon"
            className="w-30 h-30 mr-2"
          />
          </div>
          <h1 className="flex-1  py-2 text-3xl font-bold">Transaction List</h1>

          <div className="flex items-center space-x-4">
            <span>Select Month</span>
            <Select defaultValue="november-2024">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="november-2024">November 2024</SelectItem>
                <SelectItem value="december-2024">December 2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
          </div>
          <Button>Download</Button>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Shipped</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead>Gross Amount</TableHead>
                <TableHead>Payment gateway Fees</TableHead>
                <TableHead>Payment gateway Tax</TableHead>
                <TableHead>TDS</TableHead>
                <TableHead>Amount Payable</TableHead>
                <TableHead>Customers</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.order}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.shipped}</TableCell>
                  <TableCell>{transaction.currency}</TableCell>
                  <TableCell>{transaction.grossAmount}</TableCell>
                  <TableCell>{transaction.paymentFees}</TableCell>
                  <TableCell>{transaction.paymentTax}</TableCell>
                  <TableCell>{transaction.tds}</TableCell>
                  <TableCell>{transaction.amountPayable}</TableCell>
                  <TableCell>{transaction.customers}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}