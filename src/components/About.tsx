import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section id="about" className="relative py-20 px-4  overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="border-l border-primary h-full"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-orbitron text-4xl md:text-5xl font-black text-gradient-speed mb-6 tracking-wide"
              >
                ABOUT
                
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-muted-foreground font-rajdhani leading-relaxed mb-6"
              >
                Welcome to the ultimate fusion of speed and innovation. HackGenesis is not just another hackathon—it's where coding meets the precision and intensity of Formula 1 racing.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-muted-foreground font-rajdhani leading-relaxed"
              >
                For 24 high-octane hours, teams will race against time to build revolutionary solutions, pushing the boundaries of technology with the same determination that drives F1 champions.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="carbon-texture bg-card border border-primary/30 rounded-lg p-6 text-center">
                <h3 className="font-orbitron text-3xl font-bold text-gradient-speed">24</h3>
                <p className="text-sm text-muted-foreground font-rajdhani uppercase tracking-wider">Hours</p>
              </div>
              <div className="carbon-texture bg-card border border-accent/30 rounded-lg p-6 text-center">
                <h3 className="font-orbitron text-3xl font-bold text-gradient-electric">100+</h3>
                <p className="text-sm text-muted-foreground font-rajdhani uppercase tracking-wider">Participants</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="carbon-texture bg-gradient-carbon border-2 border-primary/50 rounded-xl p-8">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-orbitron text-2xl font-bold text-gradient-chrome mb-6"
              >
                MEET THE TEAM
              </motion.h3>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="font-rajdhani text-xl font-bold text-primary mb-2">HELIX</h4>
                  <p className="text-muted-foreground font-rajdhani">
                    The technical powerhouse of RVSCET Jamshedpur. We're the pit crew behind this high-speed innovation challenge.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-rajdhani text-xl font-bold text-accent mb-2">MISSION</h4>
                  <p className="text-muted-foreground font-rajdhani">
                    To create a platform where brilliant minds converge, compete, and collaborate to engineer the future.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-rajdhani text-xl font-bold text-chrome mb-2">VISION</h4>
                  <p className="text-muted-foreground font-rajdhani">
                    Transforming ideas into reality at breakneck speed, just like an F1 pit stop—precise, efficient, and game-changing.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-2 animate-pulse-racing"></div>
                <p className="text-xs text-primary font-rajdhani font-semibold">INNOVATION</p>
              </div>
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-accent rounded-full mx-auto mb-2 animate-pulse-racing" style={{ animationDelay: '0.5s' }}></div>
                <p className="text-xs text-accent font-rajdhani font-semibold">SPEED</p>
              </div>
              <div className="bg-chrome/10 border border-chrome/30 rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-chrome rounded-full mx-auto mb-2 animate-pulse-racing" style={{ animationDelay: '1s' }}></div>
                <p className="text-xs text-chrome font-rajdhani font-semibold">PRECISION</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;