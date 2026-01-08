import { motion } from "motion/react";
import { Badge } from "./ui/badge";
export function Skills() {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: [
        "React",
        "Angular",
        "TypeScript",
        "JavaScript (ES6+)",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Styled Components"
      ],
      color: "from-pink-400 to-rose-400"
    },
    {
      category: "State Management & Data",
      skills: [
        "Redux",
        "Context API",
        "React Query",
        "Google Cloud",
        "Azure",
        "REST APIs",
        "GraphQL",
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      category: "Tools & Testing",
      skills: [
        "Git & GitHub",
        "Jest",
        "React Testing Library",
        "Webpack",
        "Vite",
        "Figma",
        "Storybook",
        "CI/CD",
        "Jira "
      ],
      color: "from-blue-400 to-purple-400"
    },
    {
      category: "Soft Skills",
      skills: [
        "Technical Leadership",
        "Code Review",
        "Mentoring",
        "Agile/Scrum",
        "Documentation",
        "Problem Solving",
        "Collaboration"
      ],
      color: "from-indigo-400 to-blue-400"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built over years of hands-on experience and
            continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div
                  className={`w-12 h-1 bg-gradient-to-r ${category.color} rounded-full mb-4`}
                ></div>
                <h3 className="text-gray-900">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-900 hover:from-pink-200 hover:to-purple-200 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
