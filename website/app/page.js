"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Terminal, Activity, Network, Calendar, BookOpen, Code2, Users } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-brand-white/90 backdrop-blur-md border-b border-brand-gray/10 text-brand-dark" : "bg-transparent text-brand-white"}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <div className="flex items-center">
          <div className="relative flex items-center">
            <Image 
              src="/transp_logo.png" 
              alt="UPRM FinTech Logo" 
              width={124} 
              height={60} 
              className={`transition-all duration-300 object-contain ${scrolled ? "invert-0" : "invert brightness-0"}`} 
            />
            <div className={`absolute right-0 w-px h-10 transition-colors duration-300 ${scrolled ? "bg-brand-gray/40" : "bg-brand-white/40"}`} />
          </div>
          <div className="flex flex-col justify-center ml-4">
            <span className="font-serif font-bold text-2xl leading-none tracking-tight">UPRM</span>
            <span className="font-sans text-[0.65rem] font-medium leading-none tracking-[0.35em] mt-1">FINTECH</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest absolute left-1/2 -translate-x-1/2">
          <a href="#about" className="hover:text-brand-aqua transition-colors">About</a>
          <a href="#resources" className="hover:text-brand-aqua transition-colors">Resources</a>
          <a href="#events" className="hover:text-brand-aqua transition-colors">Events</a>
          <a href="#team" className="hover:text-brand-aqua transition-colors">Team</a>
          <a href="#partners" className="hover:text-brand-aqua transition-colors">Partners</a>
        </div>
        <button className="bg-brand-green text-brand-white px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-brand-green/90 transition-colors">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[85dvh] bg-brand-dark flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/background.png" 
          alt="UPRM FinTech Background" 
          fill 
          className="object-cover opacity-35 mix-blend-luminosity"
          priority
        />
      </div>
      
      {/* Abstract background grid/surface */}
      <div className="absolute inset-0 opacity-20 z-0" style={{
        backgroundImage: `linear-gradient(to right, #2F2F2F 1px, transparent 1px), linear-gradient(to bottom, #2F2F2F 1px, transparent 1px)`,
        backgroundSize: '4rem 4rem',
        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
      }} />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="hero-text font-sans text-brand-gray-300 text-sm md:text-base tracking-widest uppercase mb-6 text-brand-white/70">
          University of Puerto Rico, Mayagüez
        </p>
        <h1 className="hero-text font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          The forefront of financial technology
        </h1>
        <p className="hero-text font-sans text-lg md:text-xl text-brand-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          A student-led organization dedicated to bridging the gap between finance and technology through quantitative research, software engineering, and industry collaboration.
        </p>
        <div className="hero-text">
          <button className="group relative inline-flex items-center gap-3 bg-brand-aqua text-brand-dark px-8 py-4 rounded-sm font-medium text-lg overflow-hidden transition-transform hover:scale-[1.02]">
            <span className="relative z-10">Join the Network</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </div>
      </div>
    </section>
  );
};

const AboutPillars = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pillar-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-brand-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <h2 className="font-mono text-sm tracking-widest uppercase text-brand-gray mb-4">01 // Our Mission</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">Bridging theory and application.</h3>
          <p className="font-sans text-lg text-brand-gray/80 leading-relaxed">
            We bring together students, academia, and industry to cultivate learning experiences in the technological foundations of finance. We encourage hands-on growth in mathematics, engineering, and computer science, ensuring that each member gains genuine, applicable skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Data Stream */}
          <div className="pillar-card bg-brand-white border border-brand-gray/10 rounded-md p-8 shadow-sm relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <Terminal className="w-8 h-8 text-brand-green mb-6" />
            <h4 className="font-sans font-bold text-xl mb-3">Quantitative Modeling & Data Science</h4>
            <p className="font-sans text-brand-gray/80 text-sm leading-relaxed mb-6">
              Developing predictive financial models and conducting risk assessments through applied mathematics and computational finance.
            </p>
            <div className="mt-auto bg-brand-dark text-brand-aqua font-mono text-xs p-4 rounded-sm">
              <span className="text-brand-white/50">{">"}</span> init_model(data)
              <span className="animate-pulse">_</span>
            </div>
          </div>

          {/* Card 2: The Grid */}
          <div className="pillar-card bg-brand-white border border-brand-gray/10 rounded-md p-8 shadow-sm relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <Network className="w-8 h-8 text-brand-green mb-6" />
            <h4 className="font-sans font-bold text-xl mb-3">Software Engineering & Blockchain Systems</h4>
            <p className="font-sans text-brand-gray/80 text-sm leading-relaxed mb-6">
              Building secure, scalable financial platforms and decentralized networks using modern engineering principles.
            </p>
            <div className="mt-auto h-16 relative border border-brand-gray/10 rounded-sm overflow-hidden bg-brand-dark/5">
              <div className="absolute inset-0 flex flex-wrap gap-1 p-1">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-sm ${i % 7 === 0 ? 'bg-brand-green animate-pulse' : 'bg-brand-gray/20'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Market Ticker */}
          <div className="pillar-card bg-brand-white border border-brand-gray/10 rounded-md p-8 shadow-sm relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <Activity className="w-8 h-8 text-brand-green mb-6" />
            <h4 className="font-sans font-bold text-xl mb-3">Industry Integration & Economic Resilience</h4>
            <p className="font-sans text-brand-gray/80 text-sm leading-relaxed mb-6">
              Fostering lasting relationships between academia and industry to build a robust, trustworthy financial ecosystem.
            </p>
            <div className="mt-auto overflow-hidden bg-brand-dark text-brand-white py-3 rounded-sm flex whitespace-nowrap relative">
              <div className="animate-marquee font-mono text-xs flex gap-4 px-4">
                <span>BPOP</span>
                <span className="text-brand-green">+0.78%</span>
                <span>EVTC</span>
                <span className="text-brand-green">+0.44%</span>
                <span>FBP</span>
                <span className="text-brand-green">+1.87%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, bannerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={bannerRef} className="bg-brand-dark border-y border-brand-white/10 py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-brand-white/10">
          <div className="stat-item flex flex-col items-center justify-center">
            <span className="font-serif text-4xl md:text-5xl font-bold text-brand-white mb-2">10+</span>
            <span className="font-mono text-xs text-brand-aqua uppercase tracking-widest">Active Members</span>
          </div>
          <div className="stat-item flex flex-col items-center justify-center">
            <span className="font-serif text-4xl md:text-5xl font-bold text-brand-white mb-2">3</span>
            <span className="font-mono text-xs text-brand-aqua uppercase tracking-widest">Industry Partners</span>
          </div>
          <div className="stat-item flex flex-col items-center justify-center">
            <span className="font-serif text-4xl md:text-5xl font-bold text-brand-white mb-2">2</span>
            <span className="font-mono text-xs text-brand-aqua uppercase tracking-widest">Open Projects</span>
          </div>
          <div className="stat-item flex flex-col items-center justify-center">
            <span className="font-serif text-4xl md:text-5xl font-bold text-brand-white mb-2">10+</span>
            <span className="font-mono text-xs text-brand-aqua uppercase tracking-widest">technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyJoin = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-tag", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        stagger: 0.03,
        ease: "back.out(1.5)"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const skills = [
    "Python", "C++", "Rust", "TypeScript", "React", 
    "Machine Learning", "Data Science", "Quantitative Analysis", 
    "Algorithmic Trading", "Blockchain", "Smart Contracts", "Low-Latency Systems",
    "Financial Modeling", "Risk Management"
  ];

  return (
    <section id="why-join" ref={sectionRef} className="py-32 bg-brand-dark text-brand-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 80% 20%, #0BDBD8 0%, transparent 40%)`
      }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-mono text-sm tracking-widest uppercase text-brand-white/50 mb-4">Why Join Us</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">Develop the skills that define the future.</h3>
            <p className="font-sans text-lg text-brand-white/70 leading-relaxed mb-8">
              We don't just discuss financial concepts; we build the systems that power them. By joining UPRM FinTech, you'll gain hands-on experience with the tools and technologies used by top quantitative hedge funds, investment banks, and tech companies.
            </p>
            <ul className="space-y-4 font-sans text-brand-white/80">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
                <span>Collaborate on real-world projects and open-source financial tools.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
                <span>Network with industry professionals and alumni.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
                <span>Participate in exclusive workshops, hackathons, and trading competitions.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <div key={i} className="skill-tag px-4 py-2 rounded-sm border border-brand-white/10 bg-brand-white/5 font-mono text-sm hover:border-brand-aqua hover:text-brand-aqua transition-colors cursor-default">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ResourcesEvents = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".resource-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="resources" ref={sectionRef} className="py-32 bg-brand-white text-brand-dark border-t border-brand-gray/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Resources Pane */}
          <div>
            <h2 className="font-mono text-sm tracking-widest uppercase text-brand-gray mb-4">02 // Member Resources</h2>
            <h3 className="font-serif text-4xl font-bold mb-10">What we build together.</h3>
            
            <div className="space-y-8">
              <div className="resource-item flex gap-6">
                <div className="w-12 h-12 rounded-sm bg-brand-dark/5 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg mb-2">Curated Learning Paths</h4>
                  <p className="font-sans text-brand-gray/80 text-sm leading-relaxed">
                    Structured tracks in Quantitative Development, AI/ML, and Software Engineering designed to take you from fundamentals to advanced implementation.
                  </p>
                </div>
              </div>
              
              <div className="resource-item flex gap-6">
                <div className="w-12 h-12 rounded-sm bg-brand-dark/5 flex items-center justify-center shrink-0">
                  <Code2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg mb-2">Hands-on Workshops</h4>
                  <p className="font-sans text-brand-gray/80 text-sm leading-relaxed">
                    Technical deep-dives into algorithmic design, blockchain architecture, and data engineering led by peers and industry professionals.
                  </p>
                </div>
              </div>
              
              <div className="resource-item flex gap-6">
                <div className="w-12 h-12 rounded-sm bg-brand-dark/5 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg mb-2">Project Hub</h4>
                  <p className="font-sans text-brand-gray/80 text-sm leading-relaxed">
                    Collaborative environment to build open-source financial tools, participate in hackathons, and conduct quantitative research.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Events Pane */}
          <div id="events" className="bg-brand-dark text-brand-white rounded-md p-8 md:p-10 shadow-lg">
            <h2 className="font-mono text-sm tracking-widest uppercase text-brand-white/50 mb-4">03 // Upcoming Events</h2>
            <h3 className="font-serif text-3xl font-bold mb-8">The Calendar</h3>
            
            <div className="space-y-6">
              {[
                { date: "2026-03-15", title: "Create Puerto Rico STX Dataset", type: "Workshop" },
                { date: "2026-03-28", title: "DeFi Architecture Deep Dive", type: "Seminar" },
                { date: "2026-04-10", title: "Spring FinTech Hackathon", type: "Hackathon" },
                { date: "2026-04-22", title: "Industry Panel: Future of Finance", type: "Jerome Powell" },
              ].map((event, i) => (
                <div key={i} className="resource-item group flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-brand-white/10 hover:border-brand-aqua transition-colors">
                  <div className="flex items-center gap-4 mb-2 sm:mb-0">
                    <Calendar className="w-4 h-4 text-brand-aqua" />
                    <span className="font-mono text-sm text-brand-white/70">{event.date}</span>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <span className="font-sans font-bold text-lg group-hover:text-brand-aqua transition-colors">{event.title}</span>
                    <span className="font-mono text-xs text-brand-green uppercase tracking-widest">{event.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const LeadershipTeam = () => {
  const team = [
    { name: "Fernando Flores", role: "PRESIDENT" },
    { name: "Alejandro Lopez", role: "VICE PRESIDENT" },
    { name: "Edwin Almodovar", role: "HEAD OF GROWTH" },
    { name: "Steven Lopez", role: "HEAD OF OPERATIONS" },
    { name: "Favian Marrero", role: "HEAD OF PRODUCT" },
  ];

  return (
    <section id="team" className="py-32 bg-brand-dark text-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-sm tracking-widest uppercase text-brand-white/50 mb-4">04 // Leadership</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold">The Directive</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <div key={i} className="group relative bg-brand-white/5 border border-brand-white/10 rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-aqua/50">
              <div className="aspect-square w-full bg-brand-dark border border-brand-white/10 rounded-sm mb-6 overflow-hidden relative">
                {/* Minimal placeholder image */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-white/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                  <Users className="w-12 h-12" />
                </div>
              </div>
              <h4 className="font-sans font-bold text-lg mb-1">{member.name}</h4>
              <p className="font-mono text-xs text-brand-aqua tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-brand-white text-brand-dark border-b border-brand-gray/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="font-mono text-sm tracking-widest uppercase text-brand-gray">05 // Network</h2>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="font-serif text-3xl md:text-4xl font-bold text-brand-gray/30 hover:text-brand-green transition-colors cursor-default">Industry Mentors</span>
              <span className="w-2 h-2 rounded-full bg-brand-gray/20" />
              <span className="font-serif text-3xl md:text-4xl font-bold text-brand-gray/30 hover:text-brand-green transition-colors cursor-default">Fintech Startups</span>
              <span className="w-2 h-2 rounded-full bg-brand-gray/20" />
              <span className="font-serif text-3xl md:text-4xl font-bold text-brand-gray/30 hover:text-brand-green transition-colors cursor-default">Corporate Sponsors</span>
              <span className="w-2 h-2 rounded-full bg-brand-gray/20" />
              <span className="font-serif text-3xl md:text-4xl font-bold text-brand-gray/30 hover:text-brand-green transition-colors cursor-default">University Collaborators</span>
              <span className="w-2 h-2 rounded-full bg-brand-gray/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-40 bg-brand-dark text-brand-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at center, #0BDBD8 0%, transparent 70%)`
      }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-5xl md:text-7xl font-bold mb-12">
          Ready to build the future of finance?
        </h2>
        <a href="mailto:contact@uprmfintech.org" className="group relative inline-flex items-center justify-center bg-brand-white text-brand-dark px-12 py-6 rounded-sm font-bold text-xl overflow-hidden transition-transform hover:scale-[1.02] duration-50">
          <span className="absolute inset-0 w-full h-full bg-brand-green transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          <span className="relative z-10 group-hover:text-brand-white transition-colors duration-300">Join the Network</span>
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-white text-brand-dark border-t-4 border-brand-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif font-bold text-2xl tracking-tight mb-4">UPRM FINTECH</div>
            <p className="font-sans text-brand-gray/70 max-w-sm text-sm">
              Bridging the gap between academia and industry through quantitative modeling, software engineering, and applied mathematics.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-gray mb-6">Navigation</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li><a href="#about" className="hover:text-brand-green transition-colors">About</a></li>
              <li><a href="#resources" className="hover:text-brand-green transition-colors">Resources</a></li>
              <li><a href="#events" className="hover:text-brand-green transition-colors">Events</a></li>
              <li><a href="#team" className="hover:text-brand-green transition-colors">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-gray mb-6">Connect</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li><a href="#" className="hover:text-brand-green transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">GitHub</a></li>
              <li><a href="mailto:contact@uprmfintech.org" className="hover:text-brand-green transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-gray/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-brand-gray/60">
            © 2026 UPRM FinTech Club. All rights reserved.
          </div>
          <div className="flex items-center gap-3 font-mono text-xs bg-brand-dark/5 px-4 py-2 rounded-sm">
            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            SYSTEMS OPERATIONAL // UPRM MAYAGÜEZ
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StatsBanner />
      <AboutPillars />
      <WhyJoin />
      <ResourcesEvents />
      <LeadershipTeam />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}
