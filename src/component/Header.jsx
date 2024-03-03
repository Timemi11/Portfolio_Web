import { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="Desktop">
        <h1>
          <Link
            to="Hero"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            Portfolio.
          </Link>
        </h1>
        <ul>
          <li>
            <Link
              to="Hero"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="Skill"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="Portfolio"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}>
              Works
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="Moblie">
        <div className="hamberger">
          <img
            onClick={() => {
              setToggle(!toggle);
            }}
            src="src\assets\logos\more.png"
            alt="hamberger_menu"
          />
        </div>
        <h1>
          <Link
            to="Hero"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            Portfolio.
          </Link>
        </h1>
        <ul className={` ${toggle ? "open" : ""}`}>
          <li>
            <Link
              to="Hero"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="Skill"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="Portfolio"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}>
              Works
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
