import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Digital Investment Proposals - Frontend Software Developer",
      company: "FDM Group / Morgan Stanley",
      period: "2022 - 2024",
      description: [
        "Developed and maintained various components, services, and features for the Morgan Stanley Online client platform in the digital planning space.",
        "Assisted in migrating the application incrementally from Angular 2+ to React after the firm's acquisition of E*TRADE.",
        "Helped develop a more responsive web application, ensuring seamless user experience across various devices and screen sizes through effective design and implementation of adaptive layouts and fluid UI elements.",
        "Facilitated integration of the project into Microsoft Azure, enhancing its versatility and usability for diverse user needs."
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Associate Cloud Engineer",
      company: "Google Cloud Associate Cloud Engineer Certification",
       period: "2024 - Present",
      description: [
        "Achieved Google Cloud Associate Cloud Engineer Certification, demonstrating proficiency in deploying, monitoring, and managing applications on Google Cloud Platform (GCP).",
        "Leveraged expertise in GCP services such as Compute Engine, Kubernetes Engine, and Cloud Storage to design scalable and resilient cloud solutions for diverse business needs.",
        "Implemented best practices in cloud security and compliance, ensuring data protection and regulatory adherence across the GCP environment.",
      ],
      color: "from-pink-400 to-rose-400"
    },
    {
      title: "Student Assistant",
      company: "CSULA Athletics Finance Division",
      period: "2019 - 2020",
      description: [
        "Assisted the CSULA Athletics Finance Division in organizing and maintaining financial records, ensuring accuracy and compliance within university guidelines.",
        "Provided administrative support, including filing documents, scheduling meetings, and responding to inquiries, fostering smooth operations within the Finance Division.",
        "Supported financial analysis by gathering and summarizing data, and generating reports on financial activity for various athletic department logistics contributing to informed decision-making processes within the Athletics department."
      ],
      color: "from-blue-400 to-purple-400"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-300 to-pink-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                <div className="md:w-1/2 md:px-8">
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-pink-100 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3 justify-start md:justify-end">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center`}
                      >
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-gray-900">{exp.title}</h3>
                    </div>

                    <p className="text-purple-700 mb-2">{exp.company}</p>

                    <div className="flex items-center gap-2 text-gray-500 mb-4 justify-start md:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <ul className="space-y-2 text-gray-600 text-left">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1.5 text-xs">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
