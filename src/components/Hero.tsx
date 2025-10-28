import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <ImageWithFallback
                src="/images/arshi.jpeg"
                alt="Arshiya Shaikh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl text-slate-900 mb-4 font-bold"
        >
          Arshiya Shaikh
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-xl md:text-2xl text-slate-600 mb-2">
            Business Operations & Inventory Manager
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto italic">
            "Driving growth through data, leadership, and operational excellence."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          {/* ✅ Download Resume Button */}
          <a
            href="/Arshiya%20Shaik%20-%20Business%20Op%20Manager.pdf"
            download="Arshiya Shaik - Business Op Manager.pdf"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-950 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>

          {/* ✅ Contact Me Button */}
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
