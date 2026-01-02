import { Laptop, Users, Clock, Zap, Shield, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Laptop,
    title: "Live 1-on-1 Sessions",
    description: "Get personalized coaching with industry experts who understand your unique learning needs.",
    gradient: "bg-gradient-primary",
  },
  {
    icon: Users,
    title: "Group Workshops",
    description: "Collaborate with peers in interactive workshops covering real-world IT challenges.",
    gradient: "bg-gradient-accent",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Learn at your own pace with 24/7 access to course materials and recorded sessions.",
    gradient: "bg-gradient-primary",
  },
  {
    icon: Zap,
    title: "Project-Based Learning",
    description: "Build real projects that you can showcase to employers and add to your portfolio.",
    gradient: "bg-gradient-accent",
  },
  {
    icon: Shield,
    title: "Career Support",
    description: "Resume reviews, mock interviews, and job placement assistance to launch your career.",
    gradient: "bg-gradient-primary",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Earn recognized certifications that validate your skills to potential employers.",
    gradient: "bg-gradient-accent",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6">
            Everything You Need to
            <span className="text-gradient-accent"> Excel in IT</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive coaching program combines expert mentorship with hands-on experience
            to prepare you for a successful IT career.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-1 h-full">
                <div className={`w-14 h-14 rounded-xl ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
