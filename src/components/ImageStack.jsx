import React, { useEffect, useState } from "react";
import assets from "../assets/assets";

const imageData = [
  { src: assets.code, title: "I Code" },
  { src: assets.gym, title: "I Gym" },
  { src: assets.read, title: "I Read" },
  { src: assets.solve, title: "I Solve" }
];

const positions3D = {
  left: {
    left: "5%",
    zIndex: 1,
    transform: "translateX(-50%) perspective(1000px) rotateY(45deg) scale(0.7)",
    filter: "brightness(0.6)"
  },
  center: {
    left: "50%",
    zIndex: 3,
    transform: "translateX(-50%) perspective(1000px) rotateY(0deg) scale(0.85)",
    filter: "brightness(1)"
  },
  right: {
    left: "95%",
    zIndex: 1,
    transform:
      "translateX(-50%) perspective(1000px) rotateY(-45deg) scale(0.7)",
    filter: "brightness(0.6)"
  }
};

export default function ImageStack() {
  const [positionMap, setPositionMap] = useState({
    left: 3,
    center: 0,
    right: 1
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionMap((prev) => {
        return {
          left: prev.center,
          center: prev.right,
          right: (prev.right + 1) % imageData.length
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    { ...imageData[positionMap.left], position: "left" },
    { ...imageData[positionMap.center], position: "center" },
    { ...imageData[positionMap.right], position: "right" }
  ];

  return (
    <div className="relative flex h-[260px] w-full max-w-[150px] flex-col items-center justify-center max-lg:mt-1 lg:h-[320px] lg:max-w-[300px] lg:me-20">
      <div className="relative h-full w-full ">
        {cards.map((card) => {
          const style = positions3D[card.position];
          return (
            <div
              key={card.title}
              className="absolute transition-all duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              style={style}
            >
              <div className="relative aspect-[4/5] w-[150px] lg:w-[200px]">
                <img
                  src={card.src}
                  alt={card.title}
                  className="rounded-3xl object-cover w-full h-full absolute inset-0"
                />
                <h3 className="text-center text-sm font-light mt-0 transition-opacity duration-500">
                  {imageData[positionMap.center].title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center title */}
      <h3 className="text-center text-sm font-light mt-0 transition-opacity duration-500">
        {imageData[positionMap.center].title}
      </h3>
    </div>
  );
}
