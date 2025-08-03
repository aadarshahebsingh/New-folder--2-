import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Clock, Users } from "lucide-react";

const Venue = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section
      id="venue"
      className="relative py-20 px-4  overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              width: "120%",
              left: "-10%",
              transform: `rotate(${-2 + i * 1}deg)`,
            }}
            animate={{
              x: [-100, window.innerWidth + 100],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-orbitron text-4xl md:text-5xl font-black text-gradient-speed mb-6 tracking-wide"
          >
            RACE
            <span className="text-gradient-electric block">LOCATION</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto"
          >
            The ultimate racing ground for innovation and technology
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="carbon-texture bg-gradient-carbon border-2 border-primary/50 rounded-xl p-8">
              <h3 className="font-orbitron text-2xl font-bold text-gradient-chrome mb-8">
                VENUE DETAILS
              </h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-lg font-bold text-foreground">
                      Location
                    </h4>
                    <p className="text-muted-foreground">RVSCET Jamshedpur</p>
                    <p className="text-sm text-muted-foreground">
                      Jharkhand, India
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-accent/20 border border-accent/50 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-lg font-bold text-foreground">
                      Date
                    </h4>
                    <p className="text-muted-foreground">August 30-31, 2024</p>
                    <p className="text-sm text-muted-foreground">
                      Weekend Challenge
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-chrome/20 border border-chrome/50 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-chrome" />
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-lg font-bold text-foreground">
                      Duration
                    </h4>
                    <p className="text-muted-foreground">24 Hours Non-Stop</p>
                    <p className="text-sm text-muted-foreground">
                      9:00 AM Start
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-neon-green/20 border border-neon-green/50 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-lg font-bold text-foreground">
                      Capacity
                    </h4>
                    <p className="text-muted-foreground">200+ Participants</p>
                    <p className="text-sm text-muted-foreground">
                      Teams of 2-4
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="carbon-texture bg-card border border-accent/30 rounded-xl p-8 relative overflow-hidden">
              <h3 className="font-orbitron text-xl font-bold text-gradient-electric mb-6">
                RVS College of Engineering & Technology, JAMSHEDPUR, Jharkhand, 831012
              </h3>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-primary/30">
                  <div className="space-y-4">
                    {/* TECH HUB Animated Card */}
                    <div className="h-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg border border-accent/20 relative overflow-hidden">
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                      />

                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <h4 className="font-orbitron text-lg font-bold text-gradient-chrome">
                            TECH HUB
                          </h4>
                          <p className="text-sm text-muted-foreground font-rajdhani">
                            Innovation Center
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Map Embed for RVSCET, JSR */}
                    <div className="overflow-hidden rounded-lg border border-primary/30">
                      <iframe
                        title="RVSCET Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.593760142782!2d86.21401131488352!3d23.004436884970875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3f8e23a0831%3A0x7716d8b4977d4c89!2sRVS%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1695132900000!5m2!1sen!2sin"
                        width="100%"
                        height="250"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[250px] border-0"
                      ></iframe>
                    </div>

                    {/* Lab Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-primary/10 border border-primary/30 rounded p-3 text-center">
                        <div className="w-6 h-6 bg-primary rounded mx-auto mb-1"></div>
                        <span className="text-xs text-primary font-rajdhani font-semibold">
                          LAB 1
                        </span>
                      </div>
                      <div className="bg-accent/10 border border-accent/30 rounded p-3 text-center">
                        <div className="w-6 h-6 bg-accent rounded mx-auto mb-1"></div>
                        <span className="text-xs text-accent font-rajdhani font-semibold">
                          LAB 2
                        </span>
                      </div>
                      <div className="bg-chrome/10 border border-chrome/30 rounded p-3 text-center">
                        <div className="w-6 h-6 bg-chrome rounded mx-auto mb-1"></div>
                        <span className="text-xs text-chrome font-rajdhani font-semibold">
                          MAIN
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <p className="text-sm text-muted-foreground mt-4 font-rajdhani leading-relaxed">
                State-of-the-art facilities equipped with high-speed internet,
                modern workstations, and all the tools you need for your 24-hour
                coding marathon.
              </p>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 border-2 border-accent/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-primary/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;