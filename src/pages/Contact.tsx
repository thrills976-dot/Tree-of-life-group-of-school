import { motion } from "motion/react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-warm-cream min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-nature-green-dark mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-earth-brown max-w-2xl mx-auto"
          >
            We would love to hear from you. Whether you have a question about admissions, programs, or anything else, our team is ready to answer all your questions.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-nature-green/5"
            >
              <h3 className="text-2xl font-serif font-bold text-nature-green-dark mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-nature-green/10 flex items-center justify-center text-nature-green shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-nature-green-dark">Address</h4>
                    <p className="text-earth-brown/80 text-sm mt-1">123 Education Drive, Borrowdale, Harare, Zimbabwe</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-nature-green/10 flex items-center justify-center text-nature-green shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-nature-green-dark">Phone</h4>
                    <p className="text-earth-brown/80 text-sm mt-1">+263 242 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-nature-green/10 flex items-center justify-center text-nature-green shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-nature-green-dark">Email</h4>
                    <p className="text-earth-brown/80 text-sm mt-1">admissions@treeoflife.ac.zw</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-nature-green/10">
                <a 
                  href="https://wa.me/263770000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-nature-green/5"
            >
              <h3 className="text-3xl font-serif font-bold text-nature-green-dark mb-8">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-nature-green-dark">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-nature-green/20 focus:outline-none focus:ring-2 focus:ring-accent-gold bg-warm-cream/50" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-nature-green-dark">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-nature-green/20 focus:outline-none focus:ring-2 focus:ring-accent-gold bg-warm-cream/50" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-nature-green-dark">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-nature-green/20 focus:outline-none focus:ring-2 focus:ring-accent-gold bg-warm-cream/50" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-nature-green-dark">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-nature-green/20 focus:outline-none focus:ring-2 focus:ring-accent-gold bg-warm-cream/50" placeholder="+263..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-nature-green-dark">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-nature-green/20 focus:outline-none focus:ring-2 focus:ring-accent-gold bg-warm-cream/50">
                    <option>Admissions Enquiry</option>
                    <option>Schedule a Visit</option>
                    <option>General Information</option>
                    <option>Careers</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-nature-green-dark">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-nature-green/20 focus:outline-none focus:ring-2 focus:ring-accent-gold bg-warm-cream/50" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="px-8 py-4 bg-nature-green text-white rounded-full font-bold text-lg hover:bg-nature-green-dark transition-all shadow-md w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
