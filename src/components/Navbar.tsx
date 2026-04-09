import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-5 px-4 bg-background">
      <nav className="flex items-center justify-between w-full max-w-3xl bg-background rounded-2xl px-6 py-3 shadow-sm">
        <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
          LocalCreative
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/work"
            className={`text-sm font-medium transition-colors hover:text-foreground/70 ${
              location.pathname === "/work" ? "text-foreground" : "text-foreground"
            }`}
          >
            Work
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors hover:text-foreground/70 ${
              location.pathname === "/about" ? "text-foreground" : "text-foreground"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
