import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Music,
  Film,
  BookOpen,
  Sparkles,
  Disc3,
  Tv,
  Bookmark,
  Layers,
} from "lucide-react";
import { Card } from "../Components/ui/card";
import { Button } from "../Components/ui/button";

const musicTracklist = [
  {
    title: "Computer Love",
    artist: "Zapp & Roger",
    note: "Talkbox electro-funk pioneering synthetic intimacy.",
  },
  {
    title: "Download",
    artist: "Lil' Kim ft. Charlie Wilson & T-Pain",
    note: "Peak 2000s cyber-r&b connectivity.",
  },
  {
    title: "Atomic Dog",
    artist: "George Clinton / Parliament (Computer Games)",
    note: "P-funk mythologies meet foundational digital synthesis.",
  },
  {
    title: "I Lied to You",
    artist: "Miles Caton (Sinners)",
    note: "See, I'm full of the blues,Holy water too.",
  },
  {
    title: "Cyber Sex",
    artist: "Doja Cat",
    note: "Playful internet-era camp and digital desire.",
  },
  {
    title: "I'm Every Woman",
    artist: "Chaka Khan",
    note: "Pure sovereignty and unapologetic vocal power.",
  },
  {
    title: "Tightrope",
    artist: "Janelle Monáe ft. Big Boi",
    note: "Afrofuturist android allegory on staying centered.",
  },
  {
  title: "Don't Stop Me Now",
  artist: "Queen",
  note: "Pure kinetic momentum, defying gravity at two hundred degrees.",
},
  {
    title: "Closer",
    artist: "Goapele",
    note: "Patience, ambition, and quiet confidence in the journey.",
  },
  {
    title: "Unwritten",
    artist: "Natasha Bedingfield",
    note: "Guilty-pleasure optimism on writing your own script.",
  },
  {
    title: "Super Bad (Pts 1 & 2)",
    artist: "James Brown ft. The J.B.'s",
    note: "Unrelenting rhythm section discipline.",
  },
  {
    title: "Stronger",
    artist: "Kanye West",
    note: "Daft Punk vocoder lines meet raw engineering drive.",
  },
];

const cinematicArchive = [
  {
    title: "Hidden Figures",
    tag: "STEM Sovereignty",
    note: "Black women calculating orbital mechanics that shaped computing history.",
  },
  {
    title: "The Imitation Game",
    tag: "Cryptography & Alan Turing",
    note: "The theoretical birth of computation under extreme historical stakes.",
  },
  {
    title: "Nope",
    tag: "Jordan Peele / Spectacle",
    note: "Interrogating the human impulse to exploit, record, and monetize miracles.",
  },
  {
    title: "The Breadwinner",
    tag: "Storytelling as Resistance",
    note: "Defiant female agency and mythic folklore cutting through structural oppression.",
  },
  {
    title: "Soul",
    tag: "Pixar / Existential Jazz",
    note: "Decoupling creative obsession from human worth to honor the spark of living.",
  },
  {
    title: "Kill Bill: Vol. 1",
    tag: "Cinematic Precision",
    note: "Mastery of visual pacing, choreography, and stylistic tribute.",
  },
  {
    title: "Memoirs of a Geisha",
    tag: "Artistry & Discipline",
    note: "Atmospheric worldbuilding, tradition, and rigorous apprenticeship.",
  },
  {
    title: "Spirited Away",
    tag: "Miyazaki / Animation",
    note: "Surreal labor, resilience, and spiritual transition.",
  },
  {
    title: "Arrival",
    tag: "Linguistic Relativity",
    note: "Nonlinear semiotics, structural decoding, and language as a bridge across consciousness.",
  },
  {
    title: "Shrek 1 & 2",
    tag: "Subversive Animation",
    note: "Early 2000s 3D CGI milestone with unmatched cultural resonance.",
  },
  {
    title: "Death Proof",
    tag: "Tarantino / Practical Stunts",
    note: "Pure visceral rhythm and uncompromising female agency.",
  },
  {
    title: "Everything Everywhere All at Once",
    tag: "Multiversal Maximalism",
    note: "Infinite cognitive noise collapsed into radical empathy and maternal grace.",
  },

];

const literaryShelf = [
  {
    title: "Their Eyes Were Watching God",
    author: "Zora Neale Hurston",
    note: "Vernacular poetry, self-actualization, and Black southern linguistic nuance.",
  },
  {
    title: "Homegoing",
    author: "Yaa Gyasi",
    note: "Generational diaspora, the architectural legacy of captivity, and fractured ancestral memory.",
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    note: "Pre-colonial social architecture unraveling under structural collision.",
  },
  {
    title: "The Skin I'm In",
    author: "Sharon G. Flake",
    note: "Adolescent colorism, systemic shame, and learning to inhabit your own skin.",
  },
  {
    title: "Drama High Series",
    author: "L. Divine",
    note: "Unfiltered young adult urban life, school halls, and cultural familiarity.",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    note: "Social contract fragility and the raw psychology of collective disorder.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    note: "mythmaking, personal legend, and the intuitive alignment of purpose.",
  },
  {
    title: "1984",
    author: "George Orwell",
    note: "Linguistic compression, synthetic reality, and institutional erasure of memory.",
  }
];

export function PersonalJourneyPage() {
  const [activeTab, setActiveTab] = useState<
    "all" | "music" | "movies" | "books"
  >("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-gradient-to-b from-white via-pink-50/20 to-purple-50/20 text-slate-800 py-14 px-5 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            asChild
            variant="ghost"
            className="text-slate-600 hover:text-purple-700 hover:bg-purple-50/80 -ml-2"
          >
            <Link to="/#about">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to About
            </Link>
          </Button>
        </motion.div>

        {/* Narrative Section with Childhood Photo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-100 to-purple-100 text-purple-900 border border-purple-200/60 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-pink-500" />
              Origins & Personal Trajectory
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              The Story Behind My Work
            </h1>
            <p className="text-slate-600 text-base sm:text-lg font-normal mt-2">
              Curiosity, early experiments, and reclaiming the path.
            </p>
          </div>

          {/* Narrative Grid: Photo + Story */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Childhood Photo Artifact */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative group rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-pink-200 to-purple-300 p-1.5 w-full max-w-sm">
                <img
                  src="/childhood.jpg"
                  alt="Brianna as a kid"
                  className="rounded-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="text-center mt-3 space-y-1">
                <p className="text-xs font-mono font-medium text-purple-900 tracking-wide">
                  Detroit, MI • PS1 & Pink DS Era
                </p>
                <p className="text-[11px] text-slate-500 italic">
                  Where the obsession with systems and sound began.
                </p>
              </div>
            </div>

            {/* The Essay Text */}
            <div className="md:col-span-7 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              <p>
                My deep love for technology started when I was very young. I
                loved playing Stuart Little 2 on my PlayStation 1, experimenting
                with PC games, and spending hours on my pink Nintendo DS. In
                fourth grade, I joined the computer club at my elementary
                school, and I’d still come straight home to spend hours on the
                computer once my homework was finished.
              </p>

              <p>
                But as I grew up and became conscious of my socioeconomic
                reality, I began talking myself out of my own interests. Society
                suggested that STEM wasn't a realistic path for a Black girl
                from Detroit raised by a single mother—careers like engineering,
                physics, or space exploration felt completely off-limits.
                Internalizing that doubt, I dual-enrolled in cosmetology school,
                which ended up being the truly unrealistic choice since I was
                never good at beauty services. For years, my natural talents in
                technology and the social sciences went undeveloped and
                unexercised.
              </p>

              <p>
                Today, I am unapologetically pursuing knowledge in the fields
                that actually inspire me, working to uncover and articulate the
                deep correlations between them. I bring an uncompromising drive
                to become a better version of myself, learning as much as I can
                during my visit to Earth, with the hope of leaving behind
                something lasting and meaningful for every misunderstood soul
                out there.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Media Archival Section Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 pt-6 border-t border-slate-200/80"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-1">
                <Layers className="h-3.5 w-3.5" />
                Cultural Intake & Formative Signals
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Heavy Rotation, Screens & Bookshelves
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                The sounds, stories, and literature that shaped my ear, eye, and
                philosophy.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                  activeTab === "all"
                    ? "bg-white text-purple-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("music")}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all flex items-center gap-1 ${
                  activeTab === "music"
                    ? "bg-white text-purple-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Music className="h-3 w-3" /> Tracks
              </button>
              <button
                onClick={() => setActiveTab("movies")}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all flex items-center gap-1 ${
                  activeTab === "movies"
                    ? "bg-white text-purple-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Film className="h-3 w-3" /> Cinema
              </button>
              <button
                onClick={() => setActiveTab("books")}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all flex items-center gap-1 ${
                  activeTab === "books"
                    ? "bg-white text-purple-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <BookOpen className="h-3 w-3" /> Literature
              </button>
            </div>
          </div>

          {/* 1. MUSIC ARCHIVE */}
          {(activeTab === "all" || activeTab === "music") && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg">
                <Disc3 className="h-5 w-5 text-purple-600 animate-spin-slow" />
                <h3>Soundtracks & Funk-Tech Foundations</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {musicTracklist.map((track, i) => (
                  <Card
                    key={i}
                    className="p-4 border border-purple-100/90 bg-white/90 hover:border-purple-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 font-mono text-xs font-bold group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        0{i + 1}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 text-sm truncate">
                          {track.title}
                        </p>
                        <p className="text-xs font-medium text-purple-800 mb-1">
                          {track.artist}
                        </p>
                        <p className="text-xs text-slate-500 leading-snug">
                          {track.note}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* 2. CINEMA ARCHIVE */}
          {(activeTab === "all" || activeTab === "movies") && (
            <div className="space-y-3 pt-6">
              <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg">
                <Tv className="h-5 w-5 text-pink-600" />
                <h3>Cinematic Worldbuilding & Spectacle</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {cinematicArchive.map((movie, i) => (
                  <Card
                    key={i}
                    className="p-4 border border-pink-100/90 bg-white/90 hover:border-pink-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-bold text-slate-900 text-sm">
                        {movie.title}
                      </span>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200">
                        {movie.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {movie.note}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* 3. LITERATURE SHELF */}
          {(activeTab === "all" || activeTab === "books") && (
            <div className="space-y-3 pt-6">
              <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg">
                <Bookmark className="h-5 w-5 text-indigo-600" />
                <h3>Literary Anchors & Social Systems</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {literaryShelf.map((book, i) => (
                  <Card
                    key={i}
                    className="p-4 border border-indigo-100/90 bg-white/90 hover:border-indigo-300 hover:shadow-md transition-all"
                  >
                    <div className="mb-1">
                      <p className="font-bold text-slate-900 text-sm">
                        {book.title}
                      </p>
                      <p className="text-xs font-serif italic text-indigo-700">
                        {book.author}
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      {book.note}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </motion.section>

        {/* Closing Thought */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-slate-200 text-xs text-slate-400 font-mono"
        >
          Curated archive • Detroit roots to computational research.
        </motion.div>
      </div>
    </article>
  );
}
