import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is HackGenesis?",
      answer: "HackGenesis is a 24-hour hackathon that combines the speed and precision of Formula 1 racing with cutting-edge technology development. Teams compete to build innovative solutions within the time limit, racing against the clock just like F1 drivers."
    },
    {
      question: "Who can participate in HackGenesis?",
      answer: "HackGenesis is open to students, professionals, and tech enthusiasts of all skill levels. Teams can have 2-4 members, and we encourage diverse teams with different backgrounds - developers, designers, business minds, and domain experts."
    },
    {
      question: "Do I need to have a team before registering?",
      answer: "Not necessarily! You can register as an individual and we'll help you find teammates during the team formation session. You can also register with a pre-formed team of 2-4 members."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, chargers, any hardware you plan to use, and your enthusiasm! We'll provide meals, snacks, internet, workspace, and basic hardware. Don't forget a comfortable change of clothes for the 24-hour session."
    },
    {
      question: "Are there any costs to participate?",
      answer: "No! HackGenesis is completely free to participate. We provide meals, snacks, workspace, mentorship, and prizes. All you need to bring is your creativity and coding skills."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects will be evaluated based on Innovation & Creativity (30%), Technical Implementation (25%), User Experience & Design (20%), Business Viability (15%), and Presentation Quality (10%). Think like an F1 team - speed, precision, and performance matter!"
    },
    {
      question: "Can I work on a pre-existing project?",
      answer: "No, all projects must be started from scratch during the hackathon. However, you can use existing APIs, frameworks, and open-source libraries. The core development must happen during the 24-hour period."
    },
    {
      question: "What technologies can I use?",
      answer: "You're free to use any programming languages, frameworks, APIs, and tools you're comfortable with. Popular choices include React, Node.js, Python, mobile frameworks, AI/ML libraries, and cloud services."
    },
    {
      question: "Will there be mentors available?",
      answer: "Yes! We'll have industry experts and experienced developers available throughout the event to provide guidance, technical support, and business advice. Think of them as your pit crew!"
    },
    {
      question: "What happens if I can't stay for the full 24 hours?",
      answer: "While we encourage teams to stay for the full experience, we understand if you need breaks. The venue will be open 24/7 with security. However, remember that like F1 racing, every minute counts!"
    },
    {
      question: "How do I submit my project?",
      answer: "Projects must be submitted through our online platform by 10:00 AM on August 31st. You'll need to provide your source code (GitHub repository), a demo video, and a brief presentation. Late submissions won't be accepted - the finish line is final!"
    },
    {
      question: "What prizes can I win?",
      answer: "The total prize pool is over ₹1,00,000! First place gets ₹50,000, second place ₹30,000, and third place ₹20,000. We also have special category awards for Best Innovation, Best UI/UX, and People's Choice, each worth ₹10,000."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 px-4  overflow-hidden">
      {/* Racing Circuit Background */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          <defs>
            <path
              id="circuit"
              d="M100,400 Q300,100 600,400 Q900,700 1100,400 Q900,100 600,400 Q300,700 100,400"
              fill="none"
              stroke="hsl(0, 84%, 55%)"
              strokeWidth="2"
            />
          </defs>
          <use href="#circuit" />
          
          {/* Racing Line Animation */}
          <motion.circle
            r="4"
            fill="hsl(0, 84%, 55%)"
            animate={{
              offsetDistance: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              offsetPath: "path('M100,400 Q300,100 600,400 Q900,700 1100,400 Q900,100 600,400 Q300,700 100,400')",
            }}
          />
        </svg>
      </div>

      <div ref={containerRef} className="max-w-4xl mx-auto relative z-10">
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
            <span className="text-gradient-electric block">BRIEFING</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto"
          >
            Everything you need to know before hitting the track
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="carbon-texture bg-gradient-carbon border border-primary/30 rounded-xl overflow-hidden"
              >
                {/* Question Header */}
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    
                    <h3 className="font-rajdhani text-lg font-bold text-foreground">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 bg-accent/20 border border-accent/50 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-accent" />
                  </motion.div>
                </motion.button>

                {/* Answer Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <div className="pl-14">
                      <p className="text-muted-foreground font-rajdhani leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Racing Stripe */}
                {isOpen && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="carbon-texture bg-card border border-accent/30 rounded-xl p-8">
            <h4 className="font-orbitron text-xl font-bold text-gradient-electric mb-4">
              NEED MORE SUPPORT?
            </h4>
            
            <p className="text-muted-foreground font-rajdhani mb-6">
              Can't find what you're looking for? Our pit crew is here to help!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:helix@rvscet.edu.in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary/20 border border-primary/50 rounded-lg text-primary font-rajdhani font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Email Support
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent/20 border border-accent/50 rounded-lg text-accent font-rajdhani font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Join Discord
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;