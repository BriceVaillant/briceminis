import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger, ScrollSmoother } from "gsap/all";

import Footer from "../components/Footer";
import "./Home.css";
import "./Projects.css";
import "./About.css";
import "./Contact.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, ScrollSmoother);

export default function Home() {
  const container = useRef();
  const cloudinary_name = "dxrlfbw2k";
  const clickedScrollPos = useRef(0);

  const handleClicklastImg = (e) => {
    const lastImg = e.currentTarget;
    const container = lastImg.parentElement;
    const otherPanels = document.querySelectorAll(".panel-container:not(:last-child)");
    if (lastImg.classList.contains("lastimgclickedon")) {
      lastImg.classList.remove("lastimgclickedon");
      container.classList.remove("lastimgclickedon");
      otherPanels.forEach((p) => p.classList.remove("lastpanel-clicked"));
      return;
    }

    clickedScrollPos.current = window.scrollY;

    lastImg.classList.add("lastimgclickedon");
    container.classList.add("lastimgclickedon");
    otherPanels.forEach((p) => p.classList.add("lastpanel-clicked"));
  };

  const handleClickImg = (e) => {
    const img = e.currentTarget;
    const container = img.parentElement;
    const allImgs = document.querySelectorAll(".panel");
    const allContainers = document.querySelectorAll(".panel-container");

    if (img.classList.contains("imgclickedon")) {
      img.classList.remove("imgclickedon");
      container.classList.remove("imgclickedon");
      return;
    }

    allContainers.forEach((c) =>
      c.classList.remove(
        "imgclickedon",
        "lastpanel-clicked",
        "lastimgclickedon"
      )
    );
    allImgs.forEach((i) =>
      i.classList.remove(
        "imgclickedon",
        "lastpanel-clicked",
        "lastimgclickedon"
      )
    );

    clickedScrollPos.current = window.scrollY;

    img.classList.add("imgclickedon");
    container.classList.add("imgclickedon");
  };

  const handleScroll = () => {
    if (
      !document.querySelector(".imgclickedon") &&
      !document.querySelector(".lastimgclickedon")
    ) {
      return;
    }

    const allImgs = document.querySelectorAll(".panel");
    const allContainers = document.querySelectorAll(".panel-container");
    allContainers.forEach((c) =>
      c.classList.remove(
        "imgclickedon",
        "lastpanel-clicked",
        "lastimgclickedon"
      )
    );
    allImgs.forEach((i) =>
      i.classList.remove(
        "imgclickedon",
        "lastpanel-clicked",
        "lastimgclickedon"
      )
    );
  };

  //have the image widths augment when clicked and reduce when scroll resumes
  //instead of listening for press events, listen for scroll events and click events
  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.4,
        smoothTouch: 0.1,
        effects: true,
      });

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (
            document.querySelector(".imgclickedon") ||
            document.querySelector(".lastimgclickedon")
          ) {
            const diff = Math.abs(self.scroll() - clickedScrollPos.current);

            if (diff > 50) {
              handleScroll();
            }
          }
        },
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
          <div data-speed="0.90" className="titlecontainer">
            <h1>BRICE VAILLANT</h1>
          </div>
          <div className="imgcontainer">
            <img
              data-speed="1"
              className="home-leftimg homeimg"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_500,c_scale/v1767710569/IMG_fig20_00.jpg`}
            />
            <img
              data-speed="1.1"
              className="home-rightimg homeimg"
              src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_750,c_scale/v1767710569/IMG_fig15_00.jpg`}
            />
          </div>
        </div>
        <div id="about">
          <h2>about Page</h2>
          <p>This is the about page content.</p>
        </div>
        <div id="projects" onScroll={handleScroll}>
          <div id="projects-container">
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig1_00.jpg`}
                onClick={handleClickImg}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig2_00.jpg`}
                onClick={handleClickImg}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig3_00.jpg`}
                onClick={handleClickImg}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig4_00.jpg`}
                onClick={handleClickImg}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig5_00.jpg`}
                onClick={handleClickImg}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig6_00.jpg`}
                onClick={handleClickImg}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig7_00.jpg`}
                onClick={handleClickImg}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig8_00.jpg`}
                onClick={handleClickImg}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710569/IMG_fig9_00.jpg`}
                onClick={handleClickImg}
              />
            </div>
            <div className="panel-container">
              <img
                className="panel lastimg"
                src={`https://res.cloudinary.com/${cloudinary_name}/image/upload/h_1500,c_scale/v1767710566/IMG_fig2_00.jpg`}
                onClick={handleClicklastImg}
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
