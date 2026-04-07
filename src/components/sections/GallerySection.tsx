import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
];

export default function GallerySection() {
  return (
    <div id="gallery" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-nature-green-dark mb-6"
          >
            Campus Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-earth-brown max-w-2xl mx-auto"
          >
            A glimpse into everyday life and special events at Tree of Life.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-nature-green-dark/0 group-hover:bg-nature-green-dark/20 transition-colors z-10" />
                <img 
                  src={img} 
                  alt={`Gallery image ${idx + 1}`} 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
