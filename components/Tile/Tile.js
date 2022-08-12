import React from "react";

const Tile = ({ background, description }) => {
  return (
    <>
      <div
        className="tile"
        style={{
          backgroundImage: `url('${background}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="tile-silhouette">
          <p className="tile-description">{description}</p>
        </div>
      </div>
      <style jsx>{`
        .tile {
          /* height: 100px;
        width: 100px; */
          /* border: 1px solid black; */
          overflow: hidden;
        }

        .tile-silhouette {
          visibility: hidden;
          background: rgba(25, 23, 23, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          padding: 20px;
          transition: 0.5s linear;
        }

        .tile-silhouette p {
          color: white;
          font-size: 1.5rem;
          width: 75%;
          text-align: center;
        }

        .tile:hover > .tile-silhouette {
          visibility: visible;
        }
      `}</style>
    </>
  );
};

export default Tile;
