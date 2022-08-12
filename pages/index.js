import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Tiles from "../components/Tiles/Tiles";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="home">
        <Nav />
        <Hero />
        <About />
        <Tiles />
        <Footer />
      </div>
      <style jsx>{`
        .home {
          min-height: 100vh;
          width: 100vw;
          overflow: scroll;
        }
      `}</style>
    </>
  );
}
