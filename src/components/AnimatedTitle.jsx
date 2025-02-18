import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx"; // Import clsx for class name handling

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return; // Ensure containerRef is valid

      // GSAP Timeline with ScrollTrigger
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100px bottom", // Adjust start point for better visibility
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      // Animate words
      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.05, // Adjust stagger timing for smoother animation
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-title ${containerClass || ""}`.trim()}
    >
      {title
        .split("<br />")
        .filter(Boolean) // Prevent empty strings
        .map((line, index) => (
          <div
            key={index}
            className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          >
            {line
              .split(" ")
              .filter(Boolean) // Prevent empty strings
              .map((word, idx) => (
                <span
                  key={idx}
                  className="animated-word"
                  style={{
                    opacity: 0, // Initial state for animation
                    transform: "translate3d(0, 30px, 0) rotateY(10deg) rotateX(10deg)",
                  }}
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              ))}
          </div>
        ))}
    </div>
  );
};

export default AnimatedTitle;
