import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight, Download, Calendar, FileText, Send } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Submit Enquiry",
    icon: <Send size={24} />,
    description: "Start your journey by expressing your interest. Our admissions team will get back to you with detailed information.",
    action: "Submit Enquiry Form",
    extraAction: "Download Prospectus"
  },
  {
    id: 2,
    title: "Schedule Visit",
    icon: <Calendar size={24} />,
    description: "Experience our nurturing environment firsthand. Tour the campus and meet our dedicated educators.",
    action: "Book a Campus Tour"
  },
  {
    id: 3,
    title: "Complete Application",
    icon: <FileText size={24} />,
    description: "Submit the formal application along with required documents (birth certificate, previous school reports).",
    action: "Start Application"
  },
  {
    id: 4,
    title: "Enrollment",
    icon: <CheckCircle2 size={24} />,
    description: "Upon acceptance, complete the enrollment process to secure your child's place at Tree of Life.",
    action: "Confirm Enrollment"
  }
];

export default function AdmissionsSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div id="admissions" className="bg-white py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-nature-green-dark mb-6"
          >
            Admissions Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-earth-brown max-w-2xl mx-auto"
          >
            Follow our simple admissions process to join the Tree of Life family.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Steps Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 ${
                    activeStep === step.id 
                      ? "bg-nature-green text-white shadow-lg transform scale-105" 
                      : "bg-warm-cream text-earth-brown hover:bg-warm-cream-dark"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    activeStep === step.id ? "bg-white/20" : "bg-white"
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wider opacity-80 mb-1">
                      Step {step.id}
                    </div>
                    <div className={`font-serif text-xl font-bold ${activeStep === step.id ? "text-white" : "text-nature-green-dark"}`}>
                      {step.title}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="lg:w-2/3">
            <div className="bg-warm-cream rounded-3xl p-8 md:p-12 shadow-sm min-h-[400px] relative overflow-hidden border border-nature-green/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col justify-center"
                >
                  <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold mb-8">
                    {steps[activeStep - 1].icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-nature-green-dark mb-6">
                    {steps[activeStep - 1].title}
                  </h3>
                  <p className="text-xl text-earth-brown leading-relaxed mb-12">
                    {steps[activeStep - 1].description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <button className="px-8 py-4 bg-nature-green text-white rounded-full font-bold text-lg hover:bg-nature-green-dark transition-all flex items-center justify-center gap-2 shadow-md">
                      {steps[activeStep - 1].action} <ChevronRight size={20} />
                    </button>
                    
                    {steps[activeStep - 1].extraAction && (
                      <button className="px-8 py-4 bg-white text-nature-green-dark rounded-full font-bold text-lg hover:bg-warm-cream-dark transition-all flex items-center justify-center gap-2 border border-nature-green/10">
                        <Download size={20} /> {steps[activeStep - 1].extraAction}
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
