import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import CountdownTimer from "./CountdownTimer";
import SpeedParticles from "./SpeedParticles";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Stars
            radius={300}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Speed Particles */}
      <SpeedParticles />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        {/* HackGenesis Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-['Orbitron'] text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-widest text-slate-100 uppercase italic leading-tight relative group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#999] via-white to-[#999]">
              HACK
            </span>
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#09f]">
              GENESIS
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl font-rajdhani font-medium text-muted-foreground tracking-widest"
          >
            CODE FAST. BUILD SMART. WIN BIG.
          </motion.p>
        </motion.div>

        

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-12"
        >
          <CountdownTimer targetDate="2025-08-30T09:00:00" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 2.5 }}
  className="flex flex-col gap-4" // removed sm:flex-row
>
  <Button
    variant="racing"
    size="xl"
    className="min-w-48 animate-glow-pulse"
  >
    REGISTER NOW
  </Button>
  <Button variant="neon" size="xl" className="min-w-48">
    LEARN MORE
  </Button>
</motion.div>


      </motion.div>

      {/* Racing Grid Overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{
                top: `${i * 5}%`,
                width: "100%",
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;