import { Calendar, Users, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface OverviewStat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface CaseStudyOverviewProps {
  projectName?: string;
  description?: string;
  stats?: OverviewStat[];
}

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function CaseStudyOverview({
  projectName = "Community Support Initiative",
  description = "The Savannah Grace Foundation's mission is to create lasting positive change in communities through targeted support programs, educational initiatives, and compassionate outreach.",
  stats = [
    { icon: <Calendar className="w-6 h-6" />, label: "Duration", value: "12 Months" },
    { icon: <Users className="w-6 h-6" />, label: "People Served", value: "5,000+" },
    { icon: <Target className="w-6 h-6" />, label: "Programs", value: "8 Active" },
    { icon: <Heart className="w-6 h-6" />, label: "Volunteers", value: "250+" },
  ]
}: CaseStudyOverviewProps) {
  return (
    <div className="space-y-8 -m-8 p-8">
      {/* Description */}
      <motion.div 
        className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#116dff]"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      >
        <p className="lead text-neutral-700">
          {description}
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow group"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-[#116dff] to-[#5e97ff] rounded-full flex items-center justify-center text-white"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {stat.icon}
              </motion.div>
              <div>
                <div className="text-neutral-600 mb-1">{stat.label}</div>
                <motion.div 
                  className="text-[#116dff]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key Highlights */}
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-[#116dff]">Key Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Community Impact",
              description: "Established comprehensive support networks reaching underserved communities, providing essential resources and long-term assistance."
            },
            {
              title: "Sustainable Programs",
              description: "Developed self-sustaining initiatives that continue to grow and evolve based on community needs and feedback."
            },
            {
              title: "Volunteer Network",
              description: "Built a dedicated team of volunteers committed to making a difference through hands-on community engagement."
            },
            {
              title: "Measurable Results",
              description: "Tracked and documented positive outcomes through data-driven approaches, ensuring accountability and transparency."
            }
          ].map((highlight, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-[#116dff]/5 to-[#5e97ff]/5 p-6 rounded-xl border border-[#bde9fb]/50"
              initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "#5e97ff" }}
            >
              <h4 className="text-[#116dff] mb-3">{highlight.title}</h4>
              <p className="text-neutral-700">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}