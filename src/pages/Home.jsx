import { useRef } from "react";
// import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger, ScrollSmoother } from "gsap/all";

import Footer from "../components/Footer";
import "./Home.css";
import "./Projects.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, ScrollSmoother);

export default function Home() {
  const container = useRef();
  // const [images, setImages] = useState([]);
  const cloudinary_name = "dxrlfbw2k";
  // const tag = "display";

  // useEffect(() => {
  //   fetch(
  //     `https://res.cloudinary.com/${cloudinary_name}/image/list/${tag}.json`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImages(data.resources);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching images from Cloudinary:", error);
  //     });
  // }, [cloudinary_name]);

  const handlePressStart = () => {
    const otherPanels = document.querySelectorAll(
      ".panel-container:not(:last-child)"
    );

    otherPanels.forEach((p) => p.classList.add("lastpanel-clicked"));
  };

  const handlePressEnd = () => {
    const otherPanels = document.querySelectorAll(
      ".panel-container:not(:last-child)"
    );

    otherPanels.forEach((p) => p.classList.remove("lastpanel-clicked"));
  };

  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        smoothTouch: 0.1,
        effects: true,
      });

      ScrollTrigger.defaults({
        markers: false,
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
        <div className="titlecontainer">
          <h1>BRICE VAILLANT</h1>
          </div>
          <div className="imgcontainer">
            <img
              className="home-leftimg homeimg"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_500,c_scale/v1767710569/IMG_fig20_00.jpg`}
            />
            <img
              className="home-rightimg homeimg"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_750,c_scale/v1767710569/IMG_fig15_00.jpg`}
            />
          </div>
        </div>
        <div id="about">
          <h2>about Page</h2>
          <p>This is the about page content.</p>
        </div>
        <div id="projects">
          <div id="projects-container">
            {/* {images.slice(0, maxImages).map((img, index, arr) => {
              const isLast = index === arr.length - 1;
              return (
                <div className="panel-container">
                <img
                  key={img.public_id}
                  className="{isLast ? lastimg : ""} panel"
                  src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v${img.version}/${img.public_id}.${img.format}`}
                  alt={img.public_id}
                  onMouseDown={isLast ? handlePressStart : undefined}
                  onMouseUp={isLast ? handlePressEnd : undefined}
                  onMouseLeave={isLast ? handlePressEnd : undefined}
                  onTouchStart={isLast ? handlePressStart : undefined}
                  onTouchEnd={isLast ? handlePressEnd : undefined}
                />
                </div>
              );
            })} */}
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig1_00.jpg`}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig2_00.jpg`}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig3_00.jpg`}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig4_00.jpg`}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig5_00.jpg`}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig6_00.jpg`}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig7_00.jpg`}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig8_00.jpg`}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig9_00.jpg`}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel lastimg"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710566/IMG_fig2_00.jpg`}
                onMouseDown={handlePressStart}
                onMouseUp={handlePressEnd}
                onMouseLeave={handlePressEnd}
                onTouchStart={handlePressStart}
                onTouchEnd={handlePressEnd}
              />
            </div>
          </div>
        </div>
        <div id="contact">
          <h2>contact Page</h2>
          <p>This is the contact page content.</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
