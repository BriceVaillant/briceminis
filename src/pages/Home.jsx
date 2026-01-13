import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger, ScrollSmoother } from "gsap/all";

import "./Home.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, ScrollSmoother);

export default function Home() {
  const container = useRef();

  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        smoothTouch: 0.1,
        effects: true,
      });

      ScrollTrigger.defaults({
        markers: false,
      });
    },
    { scope: container }
  );

  return (
    <div className="main-container" ref={container} id="smooth-wrapper">
      <div id="smooth-content">
        <div id="home">
          <h2>Home Page</h2>
          <p>This is the Home page content.</p>
        </div>
        <div id="about-me">
          <h2>about Page</h2>
          <p>This is the about page content.</p>
        </div>
        <div id="projects">
          <h2>projects Page</h2>
          <p>This is the Home page content.</p>
        </div>
        <div id="contact-me">
          <h2>contact Page</h2>
          <p>This is the contact page content.</p>
        </div>
      </div>
    </div>
  );
}
