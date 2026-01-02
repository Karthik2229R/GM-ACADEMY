import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every lesson, ensuring you receive world-class education.",
  },
  {
    icon: Heart,
    title: "Student-First",
    description: "Your success is our priority. We provide personalized support every step of the way.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We continuously update our curriculum to match the latest industry trends and technologies.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <AnimatedSection animation="fade-right">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6">
              Empowering the Next Generation of
              <span className="text-gradient"> IT Professionals</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2020, GM Academy has grown to become one of the leading online IT coaching 
              platforms. Our mission is simple: make quality tech education accessible to everyone, 
              regardless of their background.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With a team of 50+ industry experts from top tech companies, we've helped over 5,000 
              students launch successful careers in software development, cloud computing, data science, 
              and cybersecurity.
            </p>

            <Button variant="hero" size="lg">
              Join Our Community
              <ArrowRight className="w-5 h-5" />
            </Button>
          </AnimatedSection>

          {/* Right Column - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                animation="fade-left"
                delay={index * 150}
              >
                <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 flex items-start gap-6 hover:-translate-x-1">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Stats Card */}
            <AnimatedSection animation="scale" delay={450}>
              <div className="glass rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold font-heading text-gradient mb-2">50+</div>
                    <div className="text-muted-foreground">Expert Mentors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-heading text-gradient-accent mb-2">15+</div>
                    <div className="text-muted-foreground">Countries Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-heading text-gradient mb-2">100K+</div>
                    <div className="text-muted-foreground">Hours of Content</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-heading text-gradient-accent mb-2">4.9</div>
                    <div className="text-muted-foreground">Average Rating</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
