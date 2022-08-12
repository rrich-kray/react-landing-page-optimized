import React from "react";

const About = () => {
  return (
    <>
      <div id="about">
        <div id="about-content-container">
          <h1>About Us</h1>
          <p>
            Laborum sunt magna et tempor commodo labore consequat voluptate
            dolore ut labore sunt. Irure occaecat cupidatat tempor consectetur
            mollit adipisicing quis dolore et occaecat. Officia eu nulla eu id
            commodo sit eu aliquip. Ex culpa consequat ad dolor est nostrud
            tempor occaecat.
          </p>
        </div>
      </div>
      <style jsx>{`
        #about {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        #about-content-container {
          height: 100%;
          width: 75%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        #about :nth-child(1) {
          font-size: 4rem;
        }

        #about :nth-child(2) {
          font-size: 2rem;
        }
      `}</style>
    </>
  );
};

export default About;
