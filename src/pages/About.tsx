import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion } from "motion/react";
import RootSystem from "../components/3d/RootSystem";

export default function About() {
  return (
    <div className="bg-warm-cream min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-nature-green-dark">
        <div className="absolute inset-0 z-0 opacity-60">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Environment preset="city" />
            <RootSystem />
          </Canvas>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Our Roots
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-warm-cream/90 max-w-2xl mx-auto"
          >
            Building strong foundations for lifelong learning and success.
          </motion.p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-nature-green-dark mb-6 flex items-center gap-4">
                <span className="w-12 h-1 bg-accent-gold inline-block"></span>
                Our Mission
              </h2>
              <p className="text-earth-brown text-lg leading-relaxed">
                To provide a holistic, world-class education that nurtures the intellectual, physical, emotional, and moral development of every child, empowering them to become confident and responsible global citizens.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-nature-green-dark mb-6 flex items-center gap-4">
                <span className="w-12 h-1 bg-accent-gold inline-block"></span>
                Our Vision
              </h2>
              <p className="text-earth-brown text-lg leading-relaxed">
                To be the premier educational institution in Zimbabwe, recognized for academic excellence, innovative teaching, and the cultivation of strong character in a nurturing environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-green-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-earth-brown text-lg max-w-2xl mx-auto">
              These principles guide everything we do, from the classroom to the playground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: "Community", desc: "Fostering a sense of belonging and mutual respect." },
              { title: "Confidence", desc: "Empowering students to believe in their abilities." },
              { title: "Resilience", desc: "Teaching children to overcome challenges with grace." },
              { title: "Integrity", desc: "Upholding honesty and strong moral principles." },
              { title: "Holistic", desc: "Developing the whole child—mind, body, and spirit." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-warm-cream p-8 rounded-2xl text-center hover:shadow-lg transition-all border border-nature-green/5"
              >
                <div className="w-12 h-12 mx-auto bg-accent-gold/20 text-accent-gold rounded-full flex items-center justify-center font-serif font-bold text-xl mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-nature-green-dark mb-3">{value.title}</h3>
                <p className="text-earth-brown/80 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
