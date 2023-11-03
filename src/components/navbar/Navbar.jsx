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
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          AKHIL DEVAKI
        </motion.span>
        <div className="socials">
          <a href="/">
            <img src="../linkedin.png" />
          </a>
          <a href="/">
            <img src="../instagram.png" />
          </a>
          <a href="/">
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
