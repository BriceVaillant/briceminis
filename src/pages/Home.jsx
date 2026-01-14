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
  const maxImages = 10;

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
      "#projects .panel-container:not(:last-child)"
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
      "#projects .panel-container:not(:last-child)"
    );
    const imgWithin = document.querySelectorAll(
      "#projects .panel:not(:last-child) img"
    );
    otherPanels.forEach((p) => p.classList.remove("lastpanel-clicked"));
    imgWithin.forEach((p) => p.classList.remove("img-lastpanel-clicked"));
    panel.classList.remove("active");
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
        markers: true,
      });

      const track = document.querySelector("#projects-container");
      const panels = gsap.utils.toArray("#projects .panel");
      const panelsContainer = gsap.utils.toArray("#projects .panel-container");

      // gsap.to(track, {
      //   x: () => -(track.scrollWidth - window.innerWidth),
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: "#projects",
      //     start: "top top",
      //     pin: true,
      //     scrub: 1,
      //     end: () => "+=" + (track.scrollWidth - window.innerWidth + 300),
      //     invalidateOnRefresh: true,
      //   },
      // });
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: "#projects",
          start: "top top",
          pin: true,
          scrub: 1,
          end: () => "+=" + (track.scrollWidth - window.innerWidth + 100),
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const velocity = self.getVelocity();
            const intensity = 35; // higher means mvm lower
            const moveAmount = velocity / intensity;
            const clampedMove = gsap.utils.clamp(-60, 60, moveAmount);

            gsap.to(panelsContainer, {
              x: -clampedMove, //move left
              duration: 0.2,
              ease: "power2.out",
              overwrite: "auto",
            });

            // gsap.to(panelsContainer, {
            //   scaleX: 1.02,
            //   transformOrigin: "50% 50%",
            //   ease: "power4.out",
            //   overwrite: "auto",
            // });

            gsap.to(panels, {
              x: clampedMove, //move right
              duration: 0.2,
              ease: "power2.out",
              overwrite: "auto",
            });
          },
          onScrubComplete: () => {
            gsap.to(panels, {
              x: 0,
              duration: 0.4,
              ease: "power3.out",
            });
            gsap.to(panelsContainer, {
              x: 0,
              duration: 0.4,
              ease: "power3.out",
            });
            // gsap.to(panelsContainer, {
            //   scaleX: 1,
            //   duration: 0.5,
            //   ease: "power4.out",
            // });
          },
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
            {/* {images.slice(0, maxImages).map((img, index, arr) => {
              const isLast = index === arr.length - 1;
              return (
                <div className="panel-container">
                <img
                  key={img.public_id}
                  className="panel"
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
                className="panel"
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
        <div id="contact-me">
          <h2>contact Page</h2>
          <p>This is the contact page content.</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
