import { TrendingUp, Users, Award, Heart, GraduationCap, Home } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import { AnimatedNumber } from "./AnimatedStats";

interface ImpactMetric {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  color: string;
}

interface CaseStudyImpactProps {
  metrics?: ImpactMetric[];
}

export default function CaseStudyImpact({
  metrics = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "5,000+",
      label: "Lives Touched",
      description: "Community members directly served through our programs",
      color: "#116dff"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      value: "500+",
      label: "Scholarships Awarded",
      description: "Educational opportunities provided to deserving students",
      color: "#5e97ff"
    },
    {
      icon: <Home className="w-8 h-8" />,
      value: "12",
      label: "Community Centers",
      description: "Safe spaces established for community gathering",
      color: "#116dff"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      value: "15,000+",
      label: "Volunteer Hours",
      description: "Dedicated time contributed by passionate volunteers",
      color: "#5e97ff"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "98%",
      label: "Satisfaction Rate",
      description: "Community members reporting positive experience",
      color: "#116dff"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "250%",
      label: "Growth",
      description: "Increase in program participation year-over-year",
      color: "#5e97ff"
    },
  ]
}: CaseStudyImpactProps) {
  return (
    <div className="space-y-12 -m-8 p-8 pb-16">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <motion.div 
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all group border-t-4"
            style={{ borderTopColor: metric.color }}
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="space-y-4">
              <motion.div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: metric.color }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {metric.icon}
              </motion.div>
              <div>
                <motion.div 
                  className="text-[#116dff] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  {metric.value}
                </motion.div>
                <h4 className="text-neutral-900 mb-2">{metric.label}</h4>
                <p className="text-neutral-600">{metric.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Success Stories */}
      <div className="space-y-8">
        <motion.h3 
          className="text-[#116dff] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: <GraduationCap className="w-6 h-6" />,
              title: "Education First Initiative",
              quote: "The scholarship program changed my life. I'm now the first in my family to attend college, and I'm studying to become a teacher so I can give back to my community just like SGF gave to me.",
              author: "— Maria, Scholarship Recipient",
              gradient: "from-[#116dff]/5 to-white"
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "Community Support Network",
              quote: "During our family's difficult time, the foundation provided not just resources, but also emotional support and a community that truly cared. We're forever grateful.",
              author: "— James, Community Member",
              gradient: "from-[#5e97ff]/5 to-white"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Youth Mentorship Program",
              quote: "Being a mentor through SGF has been incredibly rewarding. Watching young people discover their potential and achieve their goals reminds me why community service is so important.",
              author: "— Sarah, Volunteer Mentor",
              gradient: "from-[#bde9fb]/10 to-white"
            },
            {
              icon: <Home className="w-6 h-6" />,
              title: "Community Center Impact",
              quote: "The community center has become a second home for our family. From after-school programs to weekend activities, it's brought our neighborhood together in amazing ways.",
              author: "— David, Parent & Volunteer",
              gradient: "from-[#116dff]/5 to-white"
            }
          ].map((story, index) => (
            <motion.div 
              key={index}
              className={`bg-gradient-to-br ${story.gradient} p-8 rounded-xl border border-[#bde9fb]/50 shadow-md`}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "#5e97ff" }}
            >
              <div className="space-y-4">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-[#116dff] to-[#5e97ff] rounded-full flex items-center justify-center text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {story.icon}
                </motion.div>
                <h4 className="text-[#116dff]">{story.title}</h4>
                <p className="text-neutral-700">{story.quote}</p>
                <p className="text-neutral-500 italic">{story.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="bg-gradient-to-r from-[#116dff] to-[#5e97ff] p-12 rounded-xl shadow-xl text-white text-center relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative z-10">
          <h3 className="text-white mb-4">Be Part of the Impact</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            These results are possible because of our dedicated volunteers, generous donors, 
            and supportive community partners. Together, we can continue to make a difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button 
              className="px-8 py-3 bg-white text-[#116dff] rounded-lg hover:bg-neutral-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.button>
            <motion.button 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}