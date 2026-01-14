import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger, ScrollSmoother } from "gsap/all";

import Footer from "../components/Footer";
import "./Home.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, ScrollSmoother);

export default function Home() {
  const container = useRef();
  const [images, setImages] = useState([]);
  const cloudinary_name = "dxrlfbw2k";
  const tag = "display";

  useEffect(() => {
    fetch(
      `https://res.cloudinary.com/${cloudinary_name}/image/list/${tag}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.resources);
      })
      .catch((error) => {
        console.error("Error fetching images from Cloudinary:", error);
      });
  }, [cloudinary_name]);

  const handlePressStart = (e) => {
    const panel = e.currentTarget;
    const otherPanels = document.querySelectorAll(
      "#projects .panel:not(:last-child)"
    );
    const imgWithin = document.querySelectorAll(
      "#projects .panel:not(:last-child) img"
    );
    otherPanels.forEach((p) => p.classList.add("lastpanel-clicked"));
    imgWithin.forEach((p) => p.classList.add("img-lastpanel-clicked"));
    panel.classList.add("active");
  };

  const handlePressEnd = (e) => {
    const panel = e.currentTarget;
    const otherPanels = document.querySelectorAll(
      "#projects .panel:not(:last-child)"
    );
    const imgWithin = document.querySelectorAll(
      "#projects .panel:not(:last-child) img"
    );
    otherPanels.forEach((p) => p.classList.remove("lastpanel-clicked"));
    imgWithin.forEach((p) => p.classList.remove ("img-lastpanel-clicked"));
    panel.classList.remove("active");
  };

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
          end: () => "+=" + (track.scrollWidth - window.innerWidth + 300),
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
            {/* {images.map((img) => (
                <img
                  className="panel"
                  src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v${img.version}/${img.public_id}.${img.format}`}
                  alt={img.public_id}
                />
            ))} */}
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
            <img
              className="panel"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710557/IMG_fig19_00.jpg`}
              alt="mini figure"
            />
            <img
              className="panel"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710557/IMG_fig18_00.jpg`}
              alt="mini figure"
            />
            <img
              className="panel"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710557/IMG_fig17_00.jpg`}
              alt="mini figure"
              onMouseDown={handlePressStart}
              onMouseUp={handlePressEnd}
              onMouseLeave={handlePressEnd}
              onTouchStart={handlePressStart}
              onTouchEnd={handlePressEnd}
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
