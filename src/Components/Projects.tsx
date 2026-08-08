import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import ipTrakerImage from "../assets/IPTrackerSS.png";
import aiFriendshipAppImage from "../assets/AIChatBotFriendSS.png";
import flavorFindImage from "../assets/RecipeAppSS.png";
import graffitiImage from "../assets/graffitiSS.png";
import auditEngineImage from "../assets/auditEngineImage.png"
export function Projects() {
  const projects = [
    {
      title: "Socio-Linguistic & Subtext Audit Engine",
      description:
        "An asynchronous Responsible AI benchmarking platform that evaluates how generative LLMs decode non-literal pragmatics, dual-meaning innuendos, and subtle conversational subtext across model parameter scales. Features real-time multi-model evaluation and multi-register translation across Corporate, Formal, and Informal communication contexts.",
      image: auditEngineImage,
      technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "AsyncGroq", "Tailwind CSS"],
      liveUrl: "https://cultural-bias-audit-engine.vercel.app",
      githubUrl: "https://github.com/brithecoder/cultural-bias-audit-engine",
    },
     {
      title: "GRAFFITI TREATY - Digital Art Collective",
      description:
        "A real-time collaborative platform for digital street art. I engineered a custom drawing engine using P5.js and integrated Socket.io to enable sub-100ms synchronization between artists. Leveraged Google Gemini to accelerate the development lifecycle and optimize complex coordinate-normalization logic, resulting in a seamless cross-device creative experience.",
      image: graffitiImage,
      technologies: ["React","Node.js","Tailwind CSS", "MongoDB", "Socket.io", "P5.js"],
      liveUrl: "https://graffiti-treaty.netlify.app/",
      githubUrl: "https://github.com/brithecoder/Graffiti-Treaty-Frontend",
    },
    {
      title: "AI-Powered Friendship App",
      description:
        "Pixel is more than just an AI, she is designed to be a warm, supportive digital companion tailored to my unique journey. By blending my experience in enterprise architecture with a heart for user-centered design, I built a secure, modular space where technology feels like a friend. It features a customized interface that prioritizes comfort and accessibility, powered by a sophisticated mix of local and cloud-based intelligence.",
      image: aiFriendshipAppImage,
      technologies: ["React", "Python", "Ollama", "TypeScript", "Groq API"],
      liveUrl: "https://ai-powered-pixel.vercel.app/",
      githubUrl: "https://github.com/brithecoder/AI-Powered-Friend-Frontend",
    },
    {
      title: "IP Address Tracker",
      description:
        "A responsive tool featuring real-time geolocation mapping. This project demonstrates complex API orchestration and state management to provide accurate data visualization across all devices.",
      image: ipTrakerImage,
      technologies: ["React", "TypeScript", "CSS"],
      liveUrl: "https://lighthearted-griffin-77664d.netlify.app/",
      githubUrl:
        "https://github.com/brithecoder/IP-Address-Tracker/tree/main/ip-address-tracker",
    },
    {
      title: "FlavorFind - Recipe Discovery App",
      description:
        "An advanced discovery engine utilizing React Context for global state and a custom masonry grid. Designed to handle complex filtering by ingredients and dietary preferences with a fluid, mobile-first UI.Features custom hooks, TypeScript generics, and seamless client-side routing.",
      image: flavorFindImage,
      technologies: ["React", "TypeScript", "HTML", "CSS", "MealDB API","Framer Motion"],
      liveUrl: "https://myflavorfinder.netlify.app/",
      githubUrl: "https://github.com/brithecoder/SBA-Recipe-Discovery-App/tree/main/recipe-discovery-app",
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
          <h2 className="text-4xl text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my technical skills and
            problem-solving abilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-pink-100">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                  </div>

                  <div className="md:col-span-3 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-900"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        asChild
                        variant="outline"
                        className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
                        disabled={project.liveUrl === "#"}
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) =>
                            project.liveUrl === "#" && e.preventDefault()
                          }
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
