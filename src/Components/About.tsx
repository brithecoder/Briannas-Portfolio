import { motion } from "motion/react";
import {
  Sparkles,
  MonitorCog,
  CloudCog,
  GraduationCap,
  Brain,
  Flower2,
} from "lucide-react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function About() {
  const highlights = [
    {
      icon: Sparkles,
      title: "Architectural Empathy",
      description:
        "Refactoring complex legacy systems and untangling dependencies with an emphasis on developer empathy and long-term maintainability.",
    },
    {
      icon: MonitorCog,
      title: "Responsive Architecture",
      description:
        "Crafting adaptive layouts and fluid UI elements that ensure a seamless experience on any device.",
    },
    {
      icon: CloudCog,
      title: "Cloud-Native Solutions",
      description:
        "As a Google Cloud Certified Associate Cloud Engineer, I leverage GCP and Azure to build scalable, secure, and integrated cloud deployments.",
    },
    {
      icon: GraduationCap,
      title: "Academic Rigor",
      description:
        "Graduated Magna Cum Laude from California State University, Los Angeles.",
    },
    {
      icon: Brain,
      title: "Creative Computing",
      description:
        "Exploring real-time web architectures, distributed systems, and collaborative interfaces that challenge conventional digital interaction.",
    },
    {
      icon: Flower2,
      title: "Socio-Technical Inquiry",
      description:
        "Deepening my work at the intersection of critical race theory, natural language processing, and pragmatic bias in generative AI.",
    },
  ];
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/hero-image.jpg"
              alt="Coding setup"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              Bridge-builder. Systems Thinker. Cloud-certified Engineer.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              I am a software engineer and researcher dedicated to building
              high-performance, accessible, and culturally responsive digital
              systems. My technical foundation was forged in enterprise
              engineering: most recently, I spent two years at Morgan Stanley
              (via FDM Group) within Digital Investment Proposals, contributing
              to the large-scale architectural migration of client platforms
              from Angular to React in the wake of the E*TRADE integration.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Navigating complex legacy codebases and refactoring critical
              infrastructure taught me that software architecture is never
              purely abstract—it is a deeply human conduit governed by
              communication, accessibility, and developer empathy.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, I am channeling that engineering background toward graduate
              study at the intersection of the social sciences, moral
              philosophy, and machine learning. I aim to investigate how
              algorithmic systems encode cultural assumptions, evaluate
              generative AI for pragmatic bias, and build computational tools
              that preserve human agency.
            </p>
            <div className="flex justify-center pt-4">
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-sm transition-all"
              >
                <Link to="/trajectory">
                  <Sparkles className="h-4 w-4 mr-2" />
                  The Story Behind My Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid mb-6"
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-pink-100 bg-gradient-to-br from-white to-pink-50/30">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="pt-4"></div>
      </div>
    </section>
  );
}
