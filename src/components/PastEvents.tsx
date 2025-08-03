import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Code, Calendar, Target, Zap, Award, Clock, Building, Star } from "lucide-react";

const statsData = [
  {
    id: 1,
    number: "500+",
    label: "Hackers",
    icon: Users,
    image: "/ch.jpeg",
    gradient: "from-red-600 to-orange-500",
    size: "large",
    delay: 0.1
  },
  {
    id: 2,
    number: "10+",
    label: "Partners",
    icon: Building,
    image: "dpsmu.jpeg",
    gradient: "from-blue-600 to-cyan-500",
    size: "medium",
    delay: 0.2
  },
  {
    id: 3,
    number: "36+",
    label: "Hack Hours",
    icon: Clock,
    image: "purty_sir.jpeg",
    gradient: "from-purple-600 to-pink-500",
    size: "small",
    delay: 0.3
  },
  {
    id: 4,
    number: "100+",
    label: "Projects",
    icon: Code,
    image: "paper.jpeg",
    gradient: "from-green-600 to-teal-500",
    size: "large",
    delay: 0.4
  },
  {
    id: 5,
    number: "50+",
    label: "Events",
    icon: Calendar,
    image: "hacka3.jpeg",
    gradient: "from-yellow-600 to-orange-500",
    size: "medium",
    delay: 0.5
  },
  {
    id: 6,
    number: "25+",
    label: "Awards",
    icon: Award,
    image: "headphone.jpeg",
    gradient: "from-indigo-600 to-blue-500",
    size: "small",
    delay: 0.6
  },
  {
    id: 7,
    number: "1M+",
    label: "Lines of Code",
    icon: Code,
    image: "robo_race.jpeg",
    gradient: "from-rose-600 to-pink-500",
    size: "large",
    delay: 0.7
  },
  {
    id: 8,
    number: "48",
    label: "Winning Teams",
    icon: Trophy,
    image: "arka2.jpeg",
    gradient: "from-amber-600 to-yellow-500",
    size: "medium",
    delay: 0.8
  },
  {
    id: 9,
    number: "99%",
    label: "Satisfaction Rate",
    icon: Star,
    image: "vlog2.png",
    gradient: "from-emerald-600 to-green-500",
    size: "small",
    delay: 0.9
  },
  {
    id: 10,
    number: "24/7",
    label: "Innovation",
    icon: Zap,
    image: "workshop.jpeg",
    gradient: "from-violet-600 to-purple-500",
    size: "large",
    delay: 1.0
  }
];

const PastEvents = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Mouse parallax effect
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x * 50);
        mouseY.set(y * 50);
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', updateMousePosition);
      return () => section.removeEventListener('mousemove', updateMousePosition);
    }
  }, [mouseX, mouseY]);

  const getCardSize = (size: string) => {
    switch (size) {
      case "large": return "md:col-span-2 md:row-span-2 h-64 md:h-80";
      case "medium": return "md:col-span-2 h-48 md:h-64";
      case "small": return "h-32 md:h-48";
      default: return "h-48 md:h-64";
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated Racing Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY, x: mouseX, rotateX: mouseY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-neon-blue/10" />

        {/* Dynamic Racing Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            style={{
              top: `${10 + i * 12}%`,
              left: `${-20 + i * 5}%`,
              width: "140%",
              transform: `rotate(${-5 + i * 2}deg)`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm"
        >
          <Trophy className="w-5 h-5 text-neon-yellow" />
          <span className="text-sm font-rajdhani font-bold text-primary tracking-wider">
            LEGACY ACHIEVEMENTS
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-orbitron font-black text-foreground mb-4 relative"
        >
          PAST EVENTS{" "}
          <span className="bg-gradient-to-r from-neon-blue via-primary to-neon-green bg-clip-text text-transparent">
            HIGHLIGHTS
          </span>
          {/* Racing Flag Effect */}
          <motion.div
            className="absolute -top-2 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-neon-yellow"
            style={{
              clipPath: "polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0 100%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto"
        >
          Every hackathon tells a story of innovation, collaboration, and
          breakthrough moments.
        </motion.p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className={`${getCardSize(stat.size)} relative`}
                style={{
                  x: useTransform(mouseX, [-50, 50], [-5, 5]),
                  y: useTransform(mouseY, [-50, 50], [-5, 5]),
                }}
              >
                <Card
                  className="h-full relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm group cursor-pointer transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20"
                  onMouseEnter={() => setHoveredCard(stat.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${stat.image})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

                  {/* Racing Stripe Animation */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    animate={
                      hoveredCard === stat.id
                        ? {
                            background: [
                              `linear-gradient(45deg, transparent, transparent)`,
                              `linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)`,
                              `linear-gradient(45deg, transparent, transparent)`,
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      repeat: hoveredCard === stat.id ? Infinity : 0,
                    }}
                  />

                  {/* Speed Lines */}
                  {hoveredCard === stat.id && (
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  )}

                  {/* Content */}
                  <div className="relative h-full p-4 md:p-6 flex flex-col justify-center items-center text-center text-white z-10">
                    {/* Icon */}
                    <motion.div
                      animate={
                        hoveredCard === stat.id
                          ? {
                              scale: 1.2,
                              rotate: 360,
                              y: -5,
                            }
                          : {
                              scale: 1,
                              rotate: 0,
                              y: 0,
                            }
                      }
                      transition={{ duration: 0.5 }}
                      className="mb-2 md:mb-4"
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-neon-yellow drop-shadow-lg" />
                    </motion.div>

                    {/* Number */}
                    <motion.h3
                      animate={
                        hoveredCard === stat.id ? { scale: 1.1 } : { scale: 1 }
                      }
                      className="text-2xl md:text-4xl lg:text-5xl font-orbitron font-black mb-1 md:mb-2 drop-shadow-lg"
                    >
                      {stat.number}
                    </motion.h3>

                    {/* Label */}
                    <motion.p
                      animate={hoveredCard === stat.id ? { y: -2 } : { y: 0 }}
                      className="text-xs md:text-sm lg:text-base font-rajdhani font-bold tracking-wider drop-shadow-lg opacity-90"
                    >
                      {stat.label}
                    </motion.p>

                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow:
                          hoveredCard === stat.id
                            ? `0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)`
                            : "none",
                      }}
                    />
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-2 right-2 w-4 h-4 bg-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                    animate={
                      hoveredCard === stat.id
                        ? {
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1,
                      repeat: hoveredCard === stat.id ? Infinity : 0,
                    }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Bottom Racing Circuit */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none">
        <motion.div
          className="absolute bottom-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/60 to-transparent"
          animate={{
            scaleX: [1, 0.5, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </motion.section>
  );
};

export default PastEvents;