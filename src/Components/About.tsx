import { motion } from "motion/react";
import { Code2, Sparkles, Target, MonitorCog, House, CloudCog, GraduationCap,Brain, Flower2} from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code Advocate",
      description: "Passionate about writing maintainable, well-documented code that scales."
    },
    {
      icon: Sparkles,
      title: "UI/UX Enthusiast",
      description: "Dedicated to creating delightful user experiences with attention to detail."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality products that exceed expectations."
    },
    {
      icon: MonitorCog,
      title: "Modernizing Legacy Systems:",
      description: "Focused on delivering high-quality products that exceed expectations."
    },
    {
      icon: House,
      title: "Responsive Architecture",
      description: "Crafting adaptive layouts and fluid UI elements that ensure a seamless experience on any device."
    }, 
    {
      icon: CloudCog,
      title: "Cloud-Native Solutions",
      description: "As a Google Cloud Certified Associate Cloud Engineer, I leverage GCP and Azure to build scalable, secure, and integrated cloud deployments."
    },
     {
      icon:GraduationCap,
      title: "Academic Excellence",
      description: "Graduated Cum Laude from California State University, Los Angeles."
    }, {
      icon: Brain,
      title: "Thought Leadership",
      description: "I share my technical insights and journey through writing on Medium."
    }, {
      icon: Flower2,
      title: "Continuous Learning",
      description: "Currently deepening my Full Stack expertise to stay at the cutting edge of the MERN stack."
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
              src='/hero-image.jpg'
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
                 Bridge-builder. Problem-solver. Cloud-certified Engineer.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              I am a Frontend Software Developer with a passion for creating 
              high-performance, accessible, and user-centric web applications.
              My journey in tech is defined by a commitment to technical excellence 
              and a drive to solve complex architectural challenges.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
             My Professional Story
            Most recently, I spent two years at Morgan Stanley (via FDM Group) 
            within the Digital Investment Proposals space. During my time there,
             I was a key contributor to a massive technical evolution: incrementally
              migrating client-facing platforms from Angular to React following the E*TRADE acquisition. 
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Currently, I'm seeking a senior role where I can take on more
              technical leadership, architect scalable solutions, and help shape
              the development culture of a forward-thinking team.
            </p>
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
      </div>
    </section>
  );
}
