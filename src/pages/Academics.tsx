import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls } from "@react-three/drei";
import { motion } from "motion/react";
import { Calculator, Book, FlaskConical, Monitor, Palette, Trophy } from "lucide-react";
import Classroom from "../components/3d/Classroom";

export default function Academics() {
  const subjects = [
    { name: "Mathematics", icon: <Calculator size={32} />, color: "bg-blue-50 text-blue-600", desc: "Building strong analytical and problem-solving skills." },
    { name: "English Language", icon: <Book size={32} />, color: "bg-rose-50 text-rose-600", desc: "Fostering effective communication and a love for literature." },
    { name: "Science", icon: <FlaskConical size={32} />, color: "bg-emerald-50 text-emerald-600", desc: "Encouraging curiosity and understanding of the natural world." },
    { name: "ICT", icon: <Monitor size={32} />, color: "bg-purple-50 text-purple-600", desc: "Equipping students with essential digital literacy skills." },
    { name: "Arts & Culture", icon: <Palette size={32} />, color: "bg-orange-50 text-orange-600", desc: "Nurturing creativity and cultural appreciation." },
    { name: "Sports & PE", icon: <Trophy size={32} />, color: "bg-amber-50 text-amber-600", desc: "Promoting physical health, teamwork, and sportsmanship." }
  ];

  return (
    <div className="bg-warm-cream min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-warm-cream-dark">
        <div className="absolute inset-0 z-0">
          <Canvas shadows camera={{ position: [0, 2, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <Environment preset="apartment" />
            <PresentationControls 
              global 
              rotation={[0, 0, 0]} 
              polar={[-0.1, Math.PI / 4]} 
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <Classroom />
            </PresentationControls>
          </Canvas>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold text-nature-green-dark mb-4"
            >
              Academic Excellence
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-earth-brown"
            >
              A dynamic curriculum designed to inspire curiosity and foster a lifelong love of learning.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CURRICULUM OVERVIEW */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-nature-green-dark mb-8">
            Our Curriculum Approach
          </h2>
          <p className="text-xl text-earth-brown leading-relaxed mb-12">
            At Tree of Life Group of Schools, we blend the rigorous national syllabus with international best practices. Our approach is student-centered, ensuring that each child receives personalized attention to reach their full potential.
          </p>
        </div>
      </section>

      {/* SUBJECTS GRID */}
      <section className="py-24 px-6 md:px-12 bg-warm-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-nature-green-dark mb-4">
              Core Subjects
            </h2>
            <p className="text-earth-brown text-lg max-w-2xl mx-auto">
              A comprehensive educational program that balances academics, arts, and physical development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-nature-green/5 group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 ${subject.color}`}>
                  {subject.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-nature-green-dark mb-3 group-hover:text-accent-gold transition-colors">
                  {subject.name}
                </h3>
                <p className="text-earth-brown/80 leading-relaxed">
                  {subject.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
