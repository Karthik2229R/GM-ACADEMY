import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, BookOpen, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const programs = [
  {
    title: "Full-Stack Development",
    description: "Master React, Node.js, and modern web development from scratch to advanced concepts.",
    duration: "12 Weeks",
    modules: "48 Modules",
    rating: "4.9",
    price: "$499",
    featured: true,
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    title: "Cloud & DevOps",
    description: "Learn AWS, Docker, Kubernetes, and CI/CD pipelines for modern infrastructure.",
    duration: "10 Weeks",
    modules: "40 Modules",
    rating: "4.8",
    price: "$449",
    featured: false,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    title: "Data Science & AI",
    description: "Explore machine learning, Python, and data analytics for data-driven decisions.",
    duration: "14 Weeks",
    modules: "56 Modules",
    rating: "4.9",
    price: "$599",
    featured: false,
    skills: ["Python", "TensorFlow", "SQL", "Pandas"],
  },
  {
    title: "Cybersecurity",
    description: "Protect systems with ethical hacking, penetration testing, and security protocols.",
    duration: "8 Weeks",
    modules: "32 Modules",
    rating: "4.7",
    price: "$399",
    featured: false,
    skills: ["Ethical Hacking", "Network Security", "SIEM", "Compliance"],
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4 mb-6">
            Career-Focused
            <span className="text-gradient"> Learning Paths</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our industry-aligned programs designed to help you master in-demand skills
            and accelerate your IT career.
          </p>
        </AnimatedSection>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <AnimatedSection
              key={program.title}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={index * 100}
            >
              <div
                className={`relative glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group h-full ${
                  program.featured ? "border-primary/50" : ""
                }`}
              >
                {program.featured && (
                  <div className="absolute -top-3 right-6 px-4 py-1 bg-gradient-primary rounded-full text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}

                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold font-heading text-foreground">
                      {program.title}
                    </h3>
                    <div className="flex items-center gap-1 text-primary">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold">{program.rating}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 flex-grow">
                    {program.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm">{program.modules}</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <span className="text-3xl font-bold font-heading text-foreground">{program.price}</span>
                      <span className="text-muted-foreground text-sm ml-1">/ course</span>
                    </div>
                    <Button variant={program.featured ? "hero" : "heroOutline"}>
                      Enroll Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All CTA */}
        <AnimatedSection animation="fade-up" delay={400} className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Programs;
