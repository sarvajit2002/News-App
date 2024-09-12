import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import necessary components from react-router-dom for navigation
import './Navbar.css'; // Import custom CSS for styling

// NavBar component definition
const NavBar = () => {
    const location = useLocation(); // Get the current route (path) to highlight the active link

    return (
        <div>
            {/* Bootstrap navbar with custom styles */}
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        NewsApp
                    </Link>

                    {/* Navbar toggle button for small screens (mobile view) */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> {/* Bootstrap toggle icon */}
                    </button>

                    {/* Navbar links section, collapsible in small screens */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/business' ? 'active-link' : ''}`} to="/business">
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/entertainment' ? 'active-link' : ''}`} to="/entertainment">
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/general' ? 'active-link' : ''}`} to="/general">
                                    General
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/health' ? 'active-link' : ''}`} to="/health">
                                    Health
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/science' ? 'active-link' : ''}`} to="/science">
                                    Science
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/sports' ? 'active-link' : ''}`} to="/sports">
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/technology' ? 'active-link' : ''}`} to="/technology">
                                    Technology
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
