import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    image: "SC",
    content: "GM Academy transformed my career. The personalized coaching helped me land my dream job at Google. The mentors truly care about your success.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "DevOps Lead at Amazon",
    image: "MR",
    content: "The cloud & DevOps program was exactly what I needed. Within 3 months of completion, I got promoted to lead my team's infrastructure.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Data Scientist at Meta",
    image: "PS",
    content: "Coming from a non-tech background, I was skeptical. But the structured curriculum and hands-on projects made learning data science intuitive.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Security Analyst at Microsoft",
    image: "JW",
    content: "The cybersecurity program is comprehensive and practical. The mock scenarios prepared me perfectly for real-world challenges.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6">
            Hear from Our
            <span className="text-gradient-accent"> Graduates</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of successful IT professionals who transformed their careers with GM Academy.
          </p>
        </AnimatedSection>

        {/* Testimonials Carousel */}
        <AnimatedSection animation="scale" className="max-w-4xl mx-auto">
          <div className="relative glass rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center opacity-20">
              <Quote className="w-8 h-8 text-primary-foreground" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-accent flex items-center justify-center text-3xl md:text-4xl font-bold font-heading text-accent-foreground shadow-glow-accent transition-transform duration-500 hover:scale-105">
                  {testimonials[currentIndex].image}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <div className="font-bold font-heading text-xl text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Company Logos */}
        <AnimatedSection animation="fade-up" delay={200} className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Our graduates work at top companies</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
            {["Google", "Amazon", "Microsoft", "Meta", "Apple", "Netflix"].map((company, index) => (
              <span 
                key={company} 
                className="text-xl md:text-2xl font-heading font-bold text-muted-foreground hover:text-foreground transition-colors duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {company}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
