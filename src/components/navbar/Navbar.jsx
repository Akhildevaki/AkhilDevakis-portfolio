import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.scss";
import { animate, motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          AKHIL DEVAKI
        </motion.span>
        <div className="socials">
          <a href="https://www.linkedin.com/in/akhil-devaki">
            <img src="../linkedin.png" />
          </a>
          <a href="/">
            <img src="../instagram.png" />
          </a>
          <a href="https://github.com/Akhildevaki">
            <span className="github">
              <img src="../github.png" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
