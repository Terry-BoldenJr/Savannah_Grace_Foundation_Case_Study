import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface ProblemSolutionProps {
  problem?: {
    title: string;
    description: string;
    challenges: string[];
  };
  solution?: {
    title: string;
    description: string;
    approaches: string[];
  };
}

export default function CaseStudyProblemSolution({
  problem = {
    title: "The Challenge",
    description: "Communities facing limited access to essential resources, support systems, and opportunities for growth.",
    challenges: [
      "Limited access to educational resources and mentorship programs",
      "Insufficient support networks for vulnerable populations",
      "Lack of community gathering spaces and activities",
      "Economic barriers preventing access to essential services",
    ]
  },
  solution = {
    title: "Our Solution",
    description: "A multi-faceted approach combining direct support, community building, and sustainable programs.",
    approaches: [
      "Established community centers providing free resources and programs",
      "Created mentorship networks connecting youth with positive role models",
      "Developed partnerships with local organizations for expanded reach",
      "Implemented scholarship and assistance programs for those in need",
    ]
  }
}: ProblemSolutionProps) {
  return (
    <div className="space-y-12 -m-8 p-8">
      {/* Problem Section */}
      <div className="space-y-8">
        <motion.div 
          className="flex items-center gap-4"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-red-600" />
          </div>
          <h2 className="text-[#116dff]">{problem.title}</h2>
        </motion.div>

        <motion.div 
          className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="lead text-neutral-700 mb-6">
            {problem.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problem.challenges.map((challenge, index) => (
            <motion.div 
              key={index}
              className="bg-red-50/50 p-6 rounded-xl border border-red-100 hover:border-red-200 transition-colors"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-4">
                <motion.div 
                  className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                >
                  <span className="text-red-600">{index + 1}</span>
                </motion.div>
                <p className="text-neutral-700">{challenge}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Transition Arrow */}
      <motion.div 
        className="flex justify-center"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <motion.div 
          className="w-16 h-16 bg-gradient-to-br from-[#116dff] to-[#5e97ff] rounded-full flex items-center justify-center shadow-lg"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowRight className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>

      {/* Solution Section */}
      <div className="space-y-8">
        <motion.div 
          className="flex items-center gap-4"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-[#116dff]">{solution.title}</h2>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-[#116dff]/5 to-[#5e97ff]/5 p-8 rounded-xl shadow-md border-l-4 border-[#116dff]"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="lead text-neutral-700">
            {solution.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solution.approaches.map((approach, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl border border-[#bde9fb] hover:border-[#5e97ff] transition-colors shadow-sm hover:shadow-md group"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-4">
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-br from-[#116dff] to-[#5e97ff] rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </motion.div>
                <p className="text-neutral-700">{approach}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Preview */}
      <motion.div 
        className="bg-gradient-to-r from-[#116dff] to-[#5e97ff] p-8 rounded-xl shadow-lg text-white text-center relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [-100, 100, -100],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative z-10">
          <h3 className="mb-4">Transforming Challenges into Opportunities</h3>
          <p className="text-white/90 max-w-3xl mx-auto">
            Through strategic planning, community collaboration, and compassionate action, 
            we've turned identified challenges into meaningful solutions that create lasting impact.
          </p>
        </div>
      </motion.div>
    </div>
  );
}