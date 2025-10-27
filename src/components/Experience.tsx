import { motion } from "motion/react";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const responsibilities = [
  "Lead business operations and inventory management for a fast-growing organization",
  "Develop and execute sales strategies that consistently exceed revenue targets",
  "Build and nurture client relationships, ensuring long-term partnerships",
  "Optimize inventory processes to reduce costs and improve efficiency",
  "Analyze data to drive strategic decision-making and operational improvements",
  "Mentor and lead cross-functional teams to achieve organizational goals",
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-12 text-center">
            Current Role
          </h2>

          <Card className="border-2 border-slate-200 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">
                    Business Operations & Inventory Manager
                  </CardTitle>
                  <p className="text-slate-200">MKP Pvt Ltd</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <h3 className="text-xl text-slate-900 mb-6">
                Key Responsibilities
              </h3>
              <ul className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
