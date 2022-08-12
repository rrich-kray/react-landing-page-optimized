import React from "react";

const Hero = () => {
  return (
    <>
      <div id="hero">
        <div id="hero-content-container">
          <h1>We Develop</h1>
          <p>
            Velit magna elit amet aliquip commodo anim labore consequat. Lorem
            do aliquip pariatur pariatur et nostrud nostrud eiusmod minim
            officia ut dolor. Tempor esse id officia sit reprehenderit.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <style jsx>{`
        #hero {
          height: 100vh;
          width: 100vw;
          position: relative;
          background-image: url(/hero-bg.jpg);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        #hero-content-container {
          position: absolute;
          height: 500px;
          width: 500px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          /* border: 1px solid black;? */
          top: 20%;
          left: 15%;
          padding: 20px;
        }
        #hero-content-container h1 {
          font-size: 5rem;
          margin-bottom: 0;
        }

        #hero-content-container p {
          font-size: 1.5rem;
        }

        #hero-content-container button {
          height: 50px;
          width: 150px;
          font-size: 1.25rem;
          background: turquoise;
          color: white;
          border: none;
          margin-top: 25px;
          cursor: pointer;
          transition: 0.25s linear;
        }

        #hero-content-container button:hover {
          background: gold;
        }
      `}</style>
    </>
  );
};

export default Hero;
