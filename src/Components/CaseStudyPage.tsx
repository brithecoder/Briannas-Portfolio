import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { researchArtifacts } from "../data/projectInfo";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  Compass,
  Cpu,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Calendar,
  Layers,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? researchArtifacts[slug] : undefined;

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="min-h-screen bg-slate-50/50 text-slate-800 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation & Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Button
            asChild
            variant="ghost"
            className="text-slate-600 hover:text-purple-700 hover:bg-purple-50 -ml-2"
          >
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Index
            </Link>
          </Button>

          {/* Dossier Meta Header */}
          <div className="space-y-4 border-b border-slate-200 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">
                <Layers className="h-3.5 w-3.5 mr-1.5" />
                {project.labFocus}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-slate-600 bg-white border border-slate-200 shadow-sm">
                <Calendar className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
                {project.timeline}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              {project.subtitle}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap gap-3 pt-4">
              {project.manuscriptUrl && (
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-sm"
                >
                  <a
                    href={project.manuscriptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Read Working Paper
                  </a>
                </Button>
              )}

              <Button
                asChild
                variant="outline"
                className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-pink-200 text-pink-700 hover:bg-pink-50"
              >
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code & Data Repository
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Video / Apparatus Demonstration */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-100/80 shadow-lg bg-black/95">
            <video
              autoPlay
              loop
              key={project.videoSrc}
              src={project.videoSrc}
              muted
              playsInline
              className="w-full h-auto aspect-video object-cover"
            >
              Your browser does not support HTML5 video playback.
            </video>
          </div>
          <p className="text-xs text-slate-500 italic text-center font-mono">
            Figure 1: Live interaction recording showing user input stream, latency parameters, and dynamic UI state.
          </p>
        </motion.section>

        {/* Abstract Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 border-2 border-purple-100 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/30 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
              <h2 className="text-xs uppercase tracking-widest font-mono font-bold text-purple-900">
                Artifact Abstract
              </h2>
            </div>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {project.abstract}
            </p>
          </Card>
        </motion.section>

        {/* Research Inquiry & Hypotheses */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Inquiry & Hypotheses</h2>
              <p className="text-xs text-slate-500 font-mono">Core research directives motivating system construction</p>
            </div>
          </div>

          <div className="grid gap-3 pt-2">
            {project.researchQuestions.map((q, idx) => (
              <Card
                key={idx}
                className="p-5 border border-slate-200/90 bg-white hover:border-purple-300 transition-colors shadow-sm flex items-start gap-4"
              >
                <span className="font-mono text-purple-700 font-bold text-sm bg-purple-50 px-2.5 py-1 rounded border border-purple-100">
                  RQ{idx + 1}
                </span>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-0.5">
                  {q}
                </p>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* System Architecture & Methodology */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">System Architecture & Empirical Setup</h2>
              <p className="text-xs text-slate-500 font-mono">Computational apparatus design and implementation</p>
            </div>
          </div>

          <div className="grid gap-4 pt-2">
            {project.systemDesign.map((sys, idx) => (
              <Card
                key={idx}
                className="p-6 border border-slate-200 bg-white shadow-sm space-y-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{sys.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {sys.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 p-4 rounded-b-lg flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono uppercase font-bold text-purple-800 tracking-wider block">
                      Methodological Framework
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                      {sys.methodology}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Technical & Theoretical Constraints */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Theoretical Hurdles & Debugging</h2>
              <p className="text-xs text-slate-500 font-mono">Navigating computational bottlenecks and model behavior</p>
            </div>
          </div>

          <div className="grid gap-4 pt-2">
            {project.technicalChallenges.map((hurdle, idx) => (
              <Card
                key={idx}
                className="p-6 border border-amber-200/80 bg-gradient-to-br from-white to-amber-50/30 shadow-sm space-y-3"
              >
                <h3 className="text-base font-bold text-amber-900">{hurdle.hurdle}</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="bg-white/80 p-3 rounded-lg border border-amber-100">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wide block mb-0.5">
                      Theoretical/System Obstacle
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {hurdle.theoreticalOrSystemContext}
                    </p>
                  </div>

                  <div className="bg-purple-50/60 p-3 rounded-lg border border-purple-100">
                    <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wide block mb-0.5">
                      Technical Implementation & Resolution
                    </span>
                    <p className="text-slate-800 leading-relaxed font-medium">
                      {hurdle.implementation}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Findings & Future Inquiries */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 border-t border-slate-200 pt-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 text-white flex items-center justify-center">
              <Lightbulb className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Findings & Future Inquiries</h2>
              <p className="text-xs text-slate-500 font-mono">Emergent insights and trajectories for formal lab study</p>
            </div>
          </div>

          <Card className="p-6 border border-slate-200 bg-white shadow-sm">
            <ul className="space-y-3">
              {project.insightsAndFutureWork.map((item, idx) => (
                <li
                  key={idx}
                  className="text-slate-700 text-sm sm:text-base leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.section>
      </div>
    </article>
  );
}