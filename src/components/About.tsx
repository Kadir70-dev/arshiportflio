import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-8 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              I am a results-driven Business Operations & Inventory Manager with a proven track record of optimizing supply chains, driving revenue growth, and leading high-performing teams. With expertise spanning business development, inventory planning, and data-driven decision-making, I thrive in dynamic environments where strategic thinking meets operational execution.
            </p>

            <p className="text-lg leading-relaxed">
              My passion lies in transforming challenges into opportunities—whether it's streamlining processes to boost efficiency, building lasting client relationships, or leveraging analytics to inform smarter business strategies. I believe in continuous learning and am currently pursuing my MSc in Business Management to further enhance my strategic leadership capabilities.
            </p>

            <div className="mt-10 p-8 bg-gradient-to-r from-emerald-50 to-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-slate-900 mb-2">
                    Completed
                  </h3>
                  <p className="text-slate-700">
                    <span className="font-medium">MSc in Business Management</span>
                  </p>
                  <p className="text-slate-600">
                    University of Hull, London Campus (2024–2025)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
