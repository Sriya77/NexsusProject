import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Power and{" "}
              <span className="text-yellow-400">Success</span>
              <br />
              <span className="text-yellow-400">Inspired</span> Life
            </h1>
            <p className="text-gray-600 mb-6">
              Knowledge is the greatest wealth. Financial security is the foundation
              of a peaceful life. Along with this, when there is mutual cooperation
              and mutual trust, our life becomes very beautiful.
            </p>
            <p className="text-gray-600 mb-6">
              Thank you for choosing us as your gateway to a secure life.
            </p>
            <p className="text-gray-600 mb-8">
              Let's travel together, have a better tomorrow.
            </p>
            <div className="space-x-4">
              <Button className="bg-blue-900 hover:bg-blue-800">
                Online Courses
              </Button>
              <Button variant="outline" asChild>
                <Link to="/videos">Videos</Link>
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Team working together"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}