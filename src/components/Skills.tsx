import { motion } from "motion/react";
import { TrendingUp, Package, BarChart3, Database, Users } from "lucide-react";
import { Badge } from "./ui/badge";

const skills = [
  {
    name: "Business Development & Client Acquisition",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Inventory Planning & Process Optimization",
    icon: Package,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Sales Strategy & Revenue Growth",
    icon: BarChart3,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Data-Driven Decision Making",
    icon: Database,
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Team Leadership & Collaboration",
    icon: Users,
    color: "from-pink-500 to-pink-600",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-12 text-center">
            Key Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4`}>
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-slate-800">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
