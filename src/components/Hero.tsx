import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code, Users, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection animation="fade-up" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">
                Join 5,000+ IT Students Already Enrolled
              </span>
            </div>
          </AnimatedSection>

          {/* Main Heading */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6">
              Master IT Skills with
              <br />
              <span className="text-gradient">Expert GM Coaching</span>
            </h1>
          </AnimatedSection>

          {/* Subheading */}
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Transform your IT career with personalized coaching from industry experts. 
              Learn cutting-edge technologies, ace interviews, and land your dream job.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Start Learning Today
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold font-heading text-foreground mb-1">5,000+</div>
                <div className="text-muted-foreground">Active Students</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={500}>
              <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold font-heading text-foreground mb-1">50+</div>
                <div className="text-muted-foreground">Expert Courses</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold font-heading text-foreground mb-1">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
