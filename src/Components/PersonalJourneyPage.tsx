import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Gamepad2,
  BookMarked,
  Film,
  Sparkles,
  HeartHandshake,
  Compass,
} from "lucide-react";
import { Card } from "../Components/ui/card";
import { Button } from "../Components/ui/button";

interface MediaItem {
  category: "Gaming & Early Computing" | "Theory & Social Inquiry" | "Cinema & Worldbuilding";
  title: string;
  creatorOrPlatform: string;
  year?: string;
  significance: string;
}

const formativeMedia: MediaItem[] = [
  {
    category: "Gaming & Early Computing",
    title: "Stuart Little 2",
    creatorOrPlatform: "PlayStation 1 (SCEE)",
    year: "2002",
    significance:
      "First contact with spatial navigation, digital agency, and 3D world mechanics that initiated my fascination with interactive systems.",
  },
  {
    category: "Gaming & Early Computing",
    title: "Pink Nintendo DS & Early PC Sandbox Games",
    creatorOrPlatform: "Nintendo / Various",
    significance:
      "Formative experiences of tactile computing and custom digital spaces, sparking curiosity in software behavior and player interface design.",
  },
  {
    category: "Theory & Social Inquiry",
    title: "Race After Technology: Abolitionist Tools for the New Jim Code",
    creatorOrPlatform: "Ruha Benjamin",
    year: "2019",
    significance:
      "Foundational text examining how automated systems and predictive algorithms reproduce racial hierarchies under the guise of neutral design.",
  },
  {
    category: "Theory & Social Inquiry",
    title: "Algorithms of Oppression",
    creatorOrPlatform: "Safiya Umoja Noble",
    year: "2018",
    significance:
      "A catalyst for auditing language models, search heuristics, and socio-technical power structures in commercial web platforms.",
  },
  {
    category: "Cinema & Worldbuilding",
    title: "Speculative & Cybernetic Futures",
    creatorOrPlatform: "Selected Films & Literature",
    significance:
      "Inspirations exploring embodied artificial agents, cyborg philosophy, and computational environments that protect human nuance.",
  },
];

export function PersonalJourneyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-slate-50/50 text-slate-800 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            asChild
            variant="ghost"
            className="text-slate-600 hover:text-purple-700 hover:bg-purple-50 -ml-2"
          >
            <Link to="/#about">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to About
            </Link>
          </Button>

          {/* Page Kicker & Title */}
          <div className="space-y-4 border-b border-slate-200 pb-8 mt-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">
              <Compass className="h-3.5 w-3.5 mr-1.5" />
              Origins, Philosophy & Cultural Touchstones
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Personal Trajectory
            </h1>

            <p className="text-lg text-slate-600 font-normal leading-relaxed">
              The lived experiences, cultural environments, and intellectual influences
              shaping my technical craft and research agenda.
            </p>
          </div>
        </motion.div>

        {/* The Personal Narrative */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-slate-700 text-lg leading-relaxed font-light"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-purple-600" />
            <h2 className="text-xs uppercase tracking-widest font-mono font-bold text-purple-900">
              The Path Traveled
            </h2>
          </div>

          <Card className="p-8 border-2 border-purple-100 bg-white shadow-sm space-y-6">
            <p>
              My deep love for technology started when I was very young. I loved playing{" "}
              <strong className="font-semibold text-slate-900">Stuart Little 2</strong> on my
              PlayStation 1, experimenting with PC games, and spending hours on my pink Nintendo DS.
              In fourth grade, I joined the computer club at my elementary school, and I’d still
              come straight home to spend hours on the computer once my homework was finished.
            </p>

            <p>
              But as I grew up and became conscious of my socioeconomic reality, I began talking
              myself out of my own interests. Society suggested that STEM wasn't a realistic path
              for a Black girl from Detroit raised by a single mother—careers like engineering,
              physics, or space exploration felt completely off-limits. Internalizing that doubt,
              I dual-enrolled in cosmetology school, which ended up being the truly unrealistic choice
              since I was never good at beauty services. For years, my natural talents in technology
              and the social sciences went undeveloped and unexercised.
            </p>

            <p>
              Today, I am unapologetically pursuing knowledge in the fields that actually inspire
              me, working to uncover and articulate the deep correlations between them. I bring an
              uncompromising drive to become a better version of myself, learning as much as I can
              during my visit to Earth, with the hope of leaving behind something lasting and
              meaningful for every misunderstood soul out there.
            </p>
          </Card>
        </motion.section>

        {/* Media & Theoretical Influences */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 text-white flex items-center justify-center">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Formative Media & Intellectual Influences
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                Works that ignited my early technical imagination and sharpened my critical lens
              </p>
            </div>
          </div>

          <div className="grid gap-4 pt-2">
            {formativeMedia.map((item, idx) => (
              <Card
                key={idx}
                className="p-6 border border-slate-200/90 bg-white hover:border-purple-300 transition-colors shadow-sm space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    {item.category.includes("Gaming") ? (
                      <Gamepad2 className="h-4 w-4 text-purple-600" />
                    ) : item.category.includes("Theory") ? (
                      <BookMarked className="h-4 w-4 text-pink-600" />
                    ) : (
                      <Film className="h-4 w-4 text-indigo-600" />
                    )}
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500">
                      {item.category}
                    </span>
                  </div>
                  {item.year && (
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {item.year}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-purple-700 font-mono mb-2">{item.creatorOrPlatform}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.significance}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>
      </div>
    </article>
  );
}