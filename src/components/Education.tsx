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
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-12 text-center">
            Education
          </h2>

          <Card className="border-2 border-slate-200 shadow-xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-1">
                    University of Hull
                  </h3>
                  <p className="text-emerald-100">London Campus</p>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl text-slate-900 mb-2">
                    MSc in Business Management
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-4 text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>2024 – 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>London, United Kingdom</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-6 bg-slate-50 rounded-xl">
                  <p className="text-slate-700 leading-relaxed">
                    Advancing strategic leadership capabilities through comprehensive study of business management principles, organizational strategy, and advanced analytics. Focusing on developing skills in strategic decision-making, change management, and global business operations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
