import { motion } from "motion/react";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "October 15, 2026",
    time: "08:00 AM - 02:00 PM",
    location: "Main Sports Field",
    type: "Upcoming",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Open Day for Prospective Parents",
    date: "November 5, 2026",
    time: "09:00 AM - 12:00 PM",
    location: "School Campus",
    type: "Upcoming",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Junior School Science Fair",
    date: "November 20, 2026",
    time: "10:00 AM - 01:00 PM",
    location: "Main Hall",
    type: "Upcoming",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Events() {
  return (
    <div className="bg-warm-cream min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-nature-green-dark mb-6"
          >
            News & Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-earth-brown max-w-2xl mx-auto"
          >
            Stay updated with the latest happenings, announcements, and upcoming events at Tree of Life.
          </motion.p>
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-serif font-bold text-nature-green-dark border-b border-nature-green/20 pb-4">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-nature-green/5 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-accent-gold text-nature-green-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {event.type}
                  </div>
                  <img 
                    src={event.img} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-nature-green-dark mb-4 group-hover:text-accent-gold transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-earth-brown/80">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-nature-green" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-nature-green" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-nature-green" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
