"use client";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import Image from "next/image";

import { parallaxItems } from "@/lib/data";

export const Banner = () => {
  return (
    <section className="pt-40 xl:pt-30 lg:min-h-192 bg-primary bg-pattern">
      <div className="container flex items-center justify-center">
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          resetOnLeave
          className="w-full flex flex-col lg:flex-row items-center justify-between"
        >
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="px-6 flex flex-1 flex-col lg:flex-row items-center text-center lg:text-left text-white">
              <div className="flex-1">
                <p className="mb-4 font-primary text-[32px] uppercase tracking-[0.03em]">
                  🍕 Best pizza in town
                </p>
                <h1 className="text-6xl lg:text-8xl font-primary drop-shadow-md">
                  Pizza perfection <br /> in every bite
                </h1>
              </div>
            </div>
          </MouseParallaxChild>

          <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
            <div className="px-4 flex-1 flex justify-end max-w-sm lg:max-w-max">
              <Image
                src="/pizza-banner.png"
                width={550}
                height={558}
                priority
                alt="Pizza Banner"
              />
            </div>

            {parallaxItems.map((item, i) => (
              <MouseParallaxChild
                key={i}
                factorX={item.factorX}
                factorY={item.factorY}
                className={`absolute hidden xl:flex ${item.className}`}
              >
                <Image
                  width={item.width}
                  height={item.height}
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto"
                />
              </MouseParallaxChild>
            ))}
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};
