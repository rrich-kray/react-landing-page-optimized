import React from "react";

const Awards = () => {
  return (
    <>
      <div id="awards">
        <div className="award">
          <img src={require("../../assets/images/award1.svg").default} />
          <p className="description"></p>
        </div>
        <div className="award">
          <img src={require("../../assets/images/award2.svg").default} />
          <p className="description"></p>
        </div>
        <div className="award">
          <img src={require("../../assets/images/award3.svg").default} />
          <p className="description"></p>
        </div>
      </div>
      <style jsx>{`
        #awards {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          height: 50vh;
          width: 100vw;
          /* padding: 20px */
        }

        .award {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .award img {
          max-height: 100%;
        }
      `}</style>
    </>
  );
};

export default Awards;
