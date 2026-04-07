import { motion } from "motion/react";
import { Music, Trophy, Users, Leaf, HeartHandshake } from "lucide-react";

const activities = [
  {
    id: "sports",
    title: "Sports & Athletics",
    icon: <Trophy size={40} />,
    desc: "Our comprehensive sports program promotes physical fitness, teamwork, and healthy competition. Facilities include a swimming pool, tennis courts, and multi-purpose sports fields.",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: "arts",
    title: "Music & Performing Arts",
    icon: <Music size={40} />,
    desc: "Students discover their creative voices through our vibrant music, drama, and visual arts programs. Regular performances build confidence and stage presence.",
    img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1000",
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: "clubs",
    title: "Student Clubs",
    icon: <Users size={40} />,
    desc: "From robotics and chess to debate and environmental clubs, we offer diverse extracurricular activities that cater to every student's interests.",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000",
    color: "bg-amber-50 text-amber-600"
  },
  {
    id: "outdoor",
    title: "Outdoor Learning",
    icon: <Leaf size={40} />,
    desc: "We believe nature is the best classroom. Our outdoor learning programs include gardening, nature walks, and environmental conservation projects.",
    img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=1000",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    id: "community",
    title: "Community Service",
    icon: <HeartHandshake size={40} />,
    desc: "Instilling a sense of social responsibility through regular community outreach programs, teaching students the value of giving back.",
    img: "https://images.unsplash.com/photo-1593113580332-828c22626459?auto=format&fit=crop&q=80&w=1000",
    color: "bg-rose-50 text-rose-600"
  }
];

export default function SchoolLife() {
  return (
    <div className="bg-warm-cream min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-nature-green-dark mb-6"
          >
            Beyond the Classroom
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-earth-brown max-w-3xl mx-auto"
          >
            School life at Tree of Life is vibrant, diverse, and enriching. We provide countless opportunities for students to explore their passions, develop new skills, and build lifelong friendships.
          </motion.p>
        </div>

        <div className="space-y-32">
          {activities.map((activity, idx) => (
            <div key={activity.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                  <div className="absolute inset-0 bg-nature-green-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={activity.img} 
                    alt={activity.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-1/2 space-y-6"
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${activity.color}`}>
                  {activity.icon}
                </div>
                <h2 className="text-4xl font-serif font-bold text-nature-green-dark">
                  {activity.title}
                </h2>
                <p className="text-xl text-earth-brown leading-relaxed">
                  {activity.desc}
                </p>
                <button className="text-accent-gold font-bold text-lg hover:text-nature-green transition-colors flex items-center gap-2">
                  Explore {activity.title} &rarr;
                </button>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
