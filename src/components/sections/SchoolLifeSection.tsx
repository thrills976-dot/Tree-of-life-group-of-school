import { motion } from "motion/react";
import { Music, Trophy, Users, Leaf, HeartHandshake } from "lucide-react";

const activities = [
  {
    id: "sports",
    title: "Sports & Athletics",
    icon: <Trophy size={40} />,
    desc: "Our comprehensive sports program promotes physical fitness, teamwork, and healthy competition.",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: "arts",
    title: "Music & Performing Arts",
    icon: <Music size={40} />,
    desc: "Students discover their creative voices through our vibrant music, drama, and visual arts programs.",
    img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1000",
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: "clubs",
    title: "Student Clubs",
    icon: <Users size={40} />,
    desc: "From robotics and chess to debate and environmental clubs, we offer diverse extracurricular activities.",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000",
    color: "bg-amber-50 text-amber-600"
  },
  {
    id: "outdoor",
    title: "Outdoor Learning",
    icon: <Leaf size={40} />,
    desc: "We believe nature is the best classroom. Our outdoor learning programs include gardening and nature walks.",
    img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=1000",
    color: "bg-emerald-50 text-emerald-600"
  }
];

export default function SchoolLifeSection() {
  return (
    <div id="school-life" className="bg-warm-cream py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-nature-green-dark mb-6"
          >
            School Life
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-earth-brown max-w-3xl mx-auto"
          >
            Vibrant, diverse, and enriching opportunities beyond the classroom.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, idx) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-nature-green-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={activity.img} 
                  alt={activity.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${activity.color}`}>
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-nature-green-dark mb-2">
                  {activity.title}
                </h3>
                <p className="text-earth-brown/80 text-sm leading-relaxed">
                  {activity.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
