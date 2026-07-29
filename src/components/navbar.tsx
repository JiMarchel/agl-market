import { Link } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Trading", to: "#" },
  { label: "Platform", to: "/platform" },
  { label: "Education", to: "#" },
  { label: "Company", to: "#" },
  { label: "Contact Us", to: "#" },
];

export function Navbar() {
  return (
    <nav className="bg-muted-3 text-white px-6 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/">
          <img src="/logo.png" alt="AGL Market" className="h-10 w-auto" />
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-2 py-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
              activeProps={{ className: "text-white bg-white/10" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-1 lg:flex">
          <Button variant="ghost" size="lg" className="text-black bg-white">
            Log In
          </Button>
          <Button
            className="bg-primary text-black hover:bg-primary/90"
            size="lg"
          >
            Sign Up
          </Button>
        </div>

        <button className="flex flex-col gap-1 lg:hidden">
          <span className="block h-0.5 w-5 rounded bg-white" />
          <span className="block h-0.5 w-5 rounded bg-white" />
          <span className="block h-0.5 w-5 rounded bg-white" />
        </button>
      </div>
    </nav>
  );
}
