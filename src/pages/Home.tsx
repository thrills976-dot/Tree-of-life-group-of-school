import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Heart, Star, Users } from "lucide-react";
import GrowingTree from "../components/3d/GrowingTree";
import NatureEnvironment from "../components/3d/NatureEnvironment";
import AboutSection from "../components/sections/AboutSection";
import AcademicsSection from "../components/sections/AcademicsSection";
import AdmissionsSection from "../components/sections/AdmissionsSection";
import SchoolLifeSection from "../components/sections/SchoolLifeSection";
import GallerySection from "../components/sections/GallerySection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <div className="bg-warm-cream min-h-screen">
      {/* HERO SECTION */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas shadows camera={{ position: [0, 2, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <Environment preset="sunset" />
            <ScrollControls pages={2} damping={0.1}>
              <NatureEnvironment />
              <GrowingTree />
            </ScrollControls>
          </Canvas>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-nature-green-dark mb-6 leading-tight drop-shadow-sm">
              Where Young Minds Grow Into <span className="text-accent-gold">Strong Futures</span>
            </h1>
            <p className="text-lg md:text-2xl text-earth-brown mb-10 max-w-2xl mx-auto">
              Tree of Life Group of Schools nurtures confident, curious, and capable learners prepared for a bright future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <a
                href="#admissions"
                className="px-8 py-4 bg-nature-green text-warm-cream rounded-full font-semibold text-lg hover:bg-nature-green-light transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Enroll Your Child <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-nature-green-dark rounded-full font-semibold text-lg hover:bg-warm-cream-dark transition-all transform hover:scale-105 shadow-lg border border-nature-green/10"
              >
                Book a School Visit
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY PARENTS CHOOSE US */}
      <section className="py-24 px-6 md:px-12 bg-white relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-nature-green-dark mb-4"
            >
              Why Parents Choose Tree of Life
            </motion.h2>
            <p className="text-earth-brown text-lg max-w-2xl mx-auto">
              We provide a foundation that goes beyond academics, focusing on the holistic development of every child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Academic Excellence",
                desc: "Rigorous curriculum designed to challenge and inspire young minds.",
                icon: <BookOpen size={32} className="text-accent-gold" />
              },
              {
                title: "Nurturing Environment",
                desc: "Safe, supportive spaces where children feel valued and understood.",
                icon: <Heart size={32} className="text-accent-gold" />
              },
              {
                title: "Character Development",
                desc: "Instilling strong moral values, resilience, and integrity.",
                icon: <Star size={32} className="text-accent-gold" />
              },
              {
                title: "Modern Teaching",
                desc: "Innovative methods that foster creativity and critical thinking.",
                icon: <Users size={32} className="text-accent-gold" />
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                style={{ perspective: 1000 }}
                className="bg-warm-cream p-8 rounded-2xl shadow-sm border border-nature-green/5 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-nature-green-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-earth-brown/80 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS OVERVIEW */}
      <section className="py-24 px-6 md:px-12 bg-nature-green-dark text-warm-cream relative z-10 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Educational Programs
              </h2>
              <p className="text-warm-cream/80 text-lg">
                Tailored learning journeys for every stage of your child's development, from early years to junior school.
              </p>
            </div>
            <a href="#academics" className="flex items-center gap-2 text-accent-gold hover:text-white transition-colors font-semibold">
              View All Programs <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Early Childhood", age: "Ages 3-5", img: "https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&q=80&w=800" },
              { title: "Infant School", age: "Grades 1-2", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" },
              { title: "Junior School", age: "Grades 3-7", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" }
            ].map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-nature-green-dark/40 group-hover:bg-nature-green-dark/20 transition-colors z-10" />
                <img 
                  src={program.img} 
                  alt={program.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-nature-green-dark/90 to-transparent">
                  <span className="inline-block px-3 py-1 bg-accent-gold text-nature-green-dark text-xs font-bold rounded-full mb-3">
                    {program.age}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-10 transition-all duration-300">
                    <span className="flex items-center gap-2 text-warm-cream text-sm mt-2">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTIONS */}
      <AboutSection />
      <AcademicsSection />
      <SchoolLifeSection />
      <GallerySection />
      <AdmissionsSection />
      <ContactSection />

      {/* ENROLLMENT CTA */}
      <section className="py-32 px-6 md:px-12 bg-accent-gold relative z-10 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-nature-green-dark mb-8"
          >
            Give Your Child The Best Start In Life
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-10 py-5 bg-nature-green text-white rounded-full font-bold text-xl hover:bg-nature-green-dark transition-all transform hover:scale-105 shadow-xl"
            >
              Apply for Admission <ArrowRight size={24} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
