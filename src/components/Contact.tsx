import { motion } from "motion/react";
import { Mail, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-center text-slate-600 mb-12">
            I'd love to hear from you. Let's connect and explore opportunities together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href="mailto:sarshi280@gmail.com"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-slate-500 text-sm">Email</p>
                <p className="text-slate-900">sarshi280@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/arshiya-s-0b1052359/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-full">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-slate-500 text-sm">LinkedIn</p>
                <p className="text-slate-900">Connect on LinkedIn</p>
              </div>
            </motion.a>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border-2 border-slate-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6"> */}
              {/* <div>
                <Label htmlFor="name" className="text-slate-900 mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl border-slate-300 focus:border-slate-900"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-900 mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl border-slate-300 focus:border-slate-900"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-900 mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="rounded-xl border-slate-300 focus:border-slate-900 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-950 text-white rounded-xl py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form> */}
          {/* {/* </motion.div> */}
        </motion.div> 
      </div>
    </section>
  );
}
