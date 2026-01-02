import { GraduationCap, Mail, Phone, MapPin, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  const footerLinks = {
    programs: [
      { name: "Full-Stack Development", href: "#" },
      { name: "Cloud & DevOps", href: "#" },
      { name: "Data Science & AI", href: "#" },
      { name: "Cybersecurity", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <AnimatedSection animation="fade-up" className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                GM<span className="text-gradient">Academy</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering IT students with world-class coaching and mentorship to build successful tech careers.
            </p>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3 hover:text-foreground transition-colors duration-300">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@gmacademy.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-foreground transition-colors duration-300">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 hover:text-foreground transition-colors duration-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Programs */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h4 className="font-heading font-bold text-foreground mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Company */}
          <AnimatedSection animation="fade-up" delay={200}>
            <h4 className="font-heading font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Support */}
          <AnimatedSection animation="fade-up" delay={300}>
            <h4 className="font-heading font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 GM Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
