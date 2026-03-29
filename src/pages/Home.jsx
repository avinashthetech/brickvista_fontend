import { Helmet } from "react-helmet-async";

import Header from "../components/Header";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Services from "../components/Services";
import HowItWorks from "../HowItWorks";
import Project from "../components/Project";
import Career from "../components/Career";
import Gallery from "../components/Gallary";
import Testimonial from "../components/Testimonial";
import Clients from "../components/Clients";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Brick Vista Construction | Construction Company in India
        </title>

        <meta
          name="description"
          content="Brick Vista Construction Private Limited is a trusted construction and engineering company in India offering civil works, RCC structures, hospital projects, MEP services, high-rise buildings, infrastructure, and turnkey construction solutions."
        />

        <meta
          name="keywords"
          content="construction company in India, civil engineering company, turnkey construction, hospital construction, RCC structures, MEP services, high rise building construction, infrastructure company, Brick Vista Construction"
        />

        <meta name="author" content="Brick Vista Construction Private Limited" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://yourdomain.com/" />

        <meta
          property="og:title"
          content="Brick Vista Construction | Construction Company in India"
        />
        <meta
          property="og:description"
          content="Trusted construction and engineering solutions across India including civil, structural, hospital, commercial, residential, and infrastructure projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:site_name" content="Brick Vista Construction" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brick Vista Construction | Construction Company in India"
        />
        <meta
          name="twitter:description"
          content="Civil engineering, infrastructure, high-rise, hospital, residential, and turnkey construction services across India."
        />
      </Helmet>

      <Header />
      <main>
        <Welcome />
        <About />
        <Services />
        <HowItWorks />
        <Project />
        <Career />
        <Gallery />
        <Testimonial />
        <Clients />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}