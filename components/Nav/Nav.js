import React from "react";
import Image from "next/image";

const Nav = () => {
  const sections = ["Home", "About", "Contact"];
  return (
    <>
      <nav id="nav">
        <div id="nav-left-container">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </div>
        <div id="nav-right-container">
          {sections.map((section) => (
            <a
              key={section}
              href={
                section === "Home"
                  ? "#hero"
                  : `#${section[0].toLowerCase() + section.slice(1)}`
              }
            >
              {section}
            </a>
          ))}
        </div>
      </nav>
      <style jsx>{`
        #nav {
          width: 100%;
          height: 75px;
          position: fixed;
          display: flex;
          z-index: 999;
          backdrop-filter: blur(10px);
        }

        #nav-left-container {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #nav-left-container :nth-child(1) {
          max-height: 100%;
          height: 75px;
        }

        #nav-right-container {
          flex: 6;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        #nav-right-container a {
          text-decoration: none;
          color: black;
          font-size: 1.5rem;
          font-weight: bold;
          transition: 0.25s linear;
        }

        #nav-right-container a:hover {
          color: gold;
        }
      `}</style>
    </>
  );
};

export default Nav;
