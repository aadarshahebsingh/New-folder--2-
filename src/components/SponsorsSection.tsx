import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Handshake, Star, Zap } from "lucide-react";
import { Users, Eye, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

export const SponsorsSection = () => {
  const sponsorTiers = [
    {
      tier: "Diamond Sponsor",
      color: "championship-gold",
      features: [
        "Exclusive brand logo prominently displayed with HackGenesis every time.",
        "Print ads with title on banner and posters.",
        "Deliver a keynote address during  the opening and closing ceremony",
      ],
      investment: "From ₹30,000+",
    },
    {
      tier: "Gold Sponsors",
      color: "racing-red",
      features: [
       "Brand logo prominently displayed on banners.",
       "Print ads on banner",
       "Display your brand logo on all event materials and official communications"
      ],
      investment: "From ₹20,000+",
    },
    {
      tier: "Silver Sponsor",
      color: "pit-yellow",
      features: [
        "Logo placement",
        "Prize sponsorship",
        "Print ads on Posters",
      ],
      investment: "From ₹10,000+",
    },
  ];

  return (
    <section
      id="sponsors"
      className="py-20 relative overflow-hidden bg-transparent px-4"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient-chrome tracking-wider italic">
            Racing <span className="text-gradient-electric">Sponsors</span>
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto mt-4">
            Join our championship team and power the next generation of
            developers
          </p>
        </div>
        <div className="mb-20">
          <h3 className="text-3xl font-orbitron font-bold text-center text-gradient-speed mb-8 italic">
            Sponsorship <span className="text-championship-gold">Perks</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center ">
            {[
              {
                title: "Engagement",
                description:
                  "Interact directly with participants during Q&A sessions, fostering connections and collaborations.",
                icon: <Users className="w-8 h-8 text-primary mb-4" />,
                hoverColor: "hover:border-primary/50",
              },
              {
                title: "Brand Visibility",
                description:
                  "Gain recognition as a key contributor, strengthening your presence within the tech community.",
                icon: <Eye className="w-8 h-8 text-accent mb-4" />,
                hoverColor: "hover:border-accent/50",
              },
              {
                title: "Post-Event Marketing",
                description:
                  "Benefit from extensive outreach through press releases, social media coverage, and content creation.",
                icon: <Megaphone className="w-8 h-8 text-yellow-400 mb-4" />,
                hoverColor: "hover:border-yellow-400",
              },
            ].map((perk, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`bg-muted/10 p-6 rounded-2xl border border-muted ${perk.hoverColor} transition-shadow hover:shadow-xl`}
              >
                <div className="flex justify-center">{perk.icon}</div>
                <h4 className="text-xl font-bold text-foreground mb-2 font-orbitron italic">
                  {perk.title}
                </h4>
                <p className="text-sm text-muted-foreground font-rajdhani">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-orbitron font-bold text-center text-gradient-speed mb-12 italic">
            Sponsorship <span className="text-championship-gold">Packages</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorTiers.map((tier, index) => (
              <Card
                key={tier.tier}
                className="bg-card border border-muted/20 hover:border-primary/50 transition-transform hover:scale-[1.02]"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/10 border border-muted mb-4">
                      {index === 0 && (
                        <Building className="w-8 h-8 text-primary" />
                      )}
                      {index === 1 && <Star className="w-8 h-8 text-accent" />}
                      {index === 2 && (
                        <Handshake className="w-8 h-8 text-yellow-400" />
                      )}
                      {index === 3 && (
                        <Zap className="w-8 h-8 text-orange-400" />
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2 font-orbitron italic">
                      {tier.tier}
                    </h4>
                    <p className="text-2xl font-bold text-muted-foreground">
                      {tier.investment}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span className="text-m text-muted-foreground font-bold text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
