import Team from "./Team";
import Contact from "./Contact";
import Home from "./Home";
import Book from "./Book";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <i
              className="fa-solid fa-book fa-2xl"
              style={{ color: "#74C0FC" }}
            ></i>

            <span className="ms-2 fs-4">bookstore</span>
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2">
              Home
            </Link>
          </li>

          <li>
            <Link to="/book" className="nav-link px-2">
              Book
            </Link>
          </li>

          <li>
            <Link to="/team" className="nav-link px-2">
              Team
            </Link>
          </li>

          <li>
            <Link to="/contact" className="nav-link px-2">
              Contact
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>

          <button type="button" className="btn btn-primary">
            Register
          </button>
        </div>
      </header>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/book" className="nav-link px-2 text-body-secondary">
              Book
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/team" className="nav-link px-2 text-body-secondary">
              Team
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link px-2 text-body-secondary">
              Contact
            </Link>
          </li>
        </ul>

        <p className="text-center text-body-secondary">
          © 2026 NF Academy
        </p>
      </footer>
    </div>
  );
}

export default App;