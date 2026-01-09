import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-purple-600"
            >
              Hi there, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl text-gray-900"
            >
              Brianna Gordon
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-700"
            >
              Frontend Developer
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Mid-level developer with 3+ years of experience crafting beautiful,
            accessible, and performant web applications. Currently focused on
            mastering scalable architecture and transitioning into senior-level
            leadership."
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 rounded-full"
            >
              <a
                href="https://github.com/brithecoder/Briannas-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-6 py-6 rounded-full"
            >
              <a
                href="/briannas-portfolio/public/BriannaGordonEngineering 2025 Resume.docx.pdf"
                download
              >
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/brithecoder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/brianna-gordon-swe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:brigordon574@gmail.com"
              target="_blank"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/resumePic.jpg"
              alt="Pic of Brianna Gordon"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
          </div>

          {/* Floating accent elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-60"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-300 rounded-full blur-2xl opacity-60"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
