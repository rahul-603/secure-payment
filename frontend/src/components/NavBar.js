import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, userName, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear user session
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.leftSection}>
        <h1 style={styles.logo}>Payment App</h1>
        {isLoggedIn && (
          <div style={styles.profile}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png" // Profile icon
              alt="Profile"
              style={styles.profileImage}
            />
            <span style={styles.userName}>{userName}</span> {/* Render userName */}
          </div>
        )}
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/login" style={styles.link}>Login</Link>
            </li>
            <li>
              <Link to="/signup" style={styles.link}>Signup</Link>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#282c34",
    padding: "10px 20px",
    color: "white",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px", // Space between logo and profile
  },
  logo: {
    fontSize: "1.5em",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1em",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  profileImage: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
  userName: {
    fontSize: "1em",
    color: "white",
  },
  logoutButton: {
    background: "none",
    border: "1px solid white",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
  },
};

export default Navbar;