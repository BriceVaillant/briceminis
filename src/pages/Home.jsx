import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger, ScrollSmoother } from "gsap/all";

import Footer from "../components/Footer";
import "./Home.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, ScrollSmoother);

export default function Home() {
  const container = useRef();
  const cloudinary_name = "dxrlfbw2k";

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
        markers: true,
      });

      const track = document.querySelector("#projects-container");

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: "#projects",
          start: "top top",
          pin: true,
          scrub: 1,
          end: () => "+=" + (track.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
        },
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
          <div id="projects-container">
            <img
              className="panel"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710557/IMG_fig3_00.jpg`}
              alt="mini figure"
            />
            <img
              className="panel"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710557/IMG_fig1_00.jpg`}
              alt="mini figure"
            />
            <img
              className="panel"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710557/IMG_fig15_00.jpg`}
              alt="mini figure"
            />
            <img
              className="panel"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710557/IMG_fig2_00.jpg`}
              alt="mini figure"
            />
            <img
              className="panel"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710557/IMG_fig4_00.jpg`}
              alt="mini figure"
            />
            <img
              className="panel"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710557/IMG_fig11_00.jpg`}
              alt="mini figure"
            />
          </div>
        </div>
        <div id="contact-me">
          <h2>contact Page</h2>
          <p>This is the contact page content.</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
