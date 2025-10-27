import { motion } from "motion/react";
import { Award, TrendingUp, Zap, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const achievements = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Drove significant sales growth through strategic client acquisition and retention initiatives",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Process Efficiency",
    description: "Improved operational efficiency by implementing data-driven inventory optimization strategies",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Award,
    title: "Cost Savings",
    description: "Achieved substantial cost reductions through streamlined supply chain management",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Star,
    title: "Leadership Recognition",
    description: "Recognized for exceptional team leadership and cross-functional collaboration",
    color: "from-orange-500 to-orange-600",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-12 text-center">
            Key Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-slate-300 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${achievement.color} mb-6`}>
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl text-slate-900 mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
