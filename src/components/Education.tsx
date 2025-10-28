import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-12 text-center font-bold">
            Education
          </h2>

          {/* Reusable Card Style */}
          {[
            {
              university: "University of Hull",
              location: "London, United Kingdom",
              degree: "MSc in Business Management",
              years: "2024 – 2025",
              description:
                "Advancing strategic leadership capabilities through comprehensive study of business management principles, organizational strategy, and advanced analytics. Focusing on developing skills in strategic decision-making, change management, and global business operations.",
            },
            {
              university: "University of Mumbai",
              location: "Mumbai, India",
              degree: "B.E. in Electronics and Communication Engineering",
              years: "2020 – 2023",
              description:
                "Developed a strong foundation in electronic circuit design, communication networks, embedded systems, and signal processing. Gained hands-on experience with microcontrollers, VLSI design, and wireless communication technologies. The program emphasized system analysis, problem-solving, and the application of modern engineering tools in areas such as telecommunications, automation, and electronics manufacturing.",
            },
          ].map((edu, idx) => (
            <Card
              key={idx}
              className="border-2 border-slate-200 shadow-xl rounded-2xl overflow-hidden mb-10"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white font-semibold mb-1">
                      {edu.university}
                    </h3>
                    <p className="text-emerald-100">{edu.location}</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl text-slate-900 mb-2 font-medium">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-4 text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.years}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-6 bg-slate-50 rounded-xl">
                    <p className="text-slate-700 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
