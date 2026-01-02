import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground font-medium">
                Limited Time Offer - 30% Off All Programs
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Ready to Transform
              <br />
              <span className="text-gradient">Your IT Career?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of successful IT professionals who started their journey with GM Academy. 
              Your dream career in tech is just one click away.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Get Started for Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Schedule a Call
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade" delay={400}>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • 7-day free trial • Cancel anytime
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTA;
