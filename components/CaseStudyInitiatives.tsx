import { Book, Heart, Users, Utensils, Home, Briefcase, Baby, Gift } from "lucide-react";
import { motion } from "framer-motion";

interface Initiative {
  icon: React.ReactNode;
  title: string;
  description: string;
  outcomes: string[];
  color: string;
}

interface CaseStudyInitiativesProps {
  initiatives?: Initiative[];
}

export default function CaseStudyInitiatives({
  initiatives = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Education & Scholarships",
      description: "Providing educational opportunities and resources to students in need.",
      outcomes: [
        "500+ scholarships awarded",
        "15 tutoring centers established",
        "95% graduation rate among participants"
      ],
      color: "#116dff"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Healthcare Access",
      description: "Connecting community members with essential healthcare services.",
      outcomes: [
        "2,000+ medical screenings conducted",
        "10 health fairs organized annually",
        "Partnership with 5 local clinics"
      ],
      color: "#5e97ff"
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Food Security Program",
      description: "Ensuring no family goes hungry through food distribution and assistance.",
      outcomes: [
        "50,000+ meals served",
        "8 food pantries operating",
        "Weekly fresh produce distribution"
      ],
      color: "#116dff"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Youth Mentorship",
      description: "Pairing young people with positive role models and career guidance.",
      outcomes: [
        "300+ active mentorship pairs",
        "75% college enrollment rate",
        "Career workshops monthly"
      ],
      color: "#5e97ff"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Housing Assistance",
      description: "Supporting families with housing stability and emergency shelter.",
      outcomes: [
        "150 families housed annually",
        "Emergency shelter available 24/7",
        "Rental assistance program active"
      ],
      color: "#116dff"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Job Training & Placement",
      description: "Equipping community members with skills for meaningful employment.",
      outcomes: [
        "400+ participants trained",
        "70% job placement rate",
        "Partnerships with 25+ employers"
      ],
      color: "#5e97ff"
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Early Childhood Development",
      description: "Supporting families with young children through education and resources.",
      outcomes: [
        "6 early learning centers",
        "200+ children enrolled",
        "Parent education workshops"
      ],
      color: "#116dff"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Emergency Relief Fund",
      description: "Providing immediate assistance during times of crisis and unexpected hardship.",
      outcomes: [
        "$500K+ distributed in aid",
        "24-hour response team",
        "Disaster preparedness training"
      ],
      color: "#5e97ff"
    },
  ]
}: CaseStudyInitiativesProps) {
  return (
    <div className="space-y-8 -m-8 p-8 pb-16">
      {/* Initiatives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initiatives.map((initiative, index) => (
          <motion.div 
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all group border-l-4"
            style={{ borderLeftColor: initiative.color }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            <div className="space-y-6">
              {/* Icon & Title */}
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: initiative.color }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {initiative.icon}
                </motion.div>
                <div>
                  <h4 className="text-neutral-900 mb-2">{initiative.title}</h4>
                  <p className="text-neutral-600">{initiative.description}</p>
                </div>
              </div>

              {/* Outcomes */}
              <div className="space-y-3 pl-16">
                <div className="text-neutral-700">Key Outcomes:</div>
                {initiative.outcomes.map((outcome, outcomeIndex) => (
                  <motion.div 
                    key={outcomeIndex} 
                    className="flex items-start gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + outcomeIndex * 0.1 }}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: initiative.color }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + outcomeIndex * 0.1, type: "spring" }}
                    />
                    <p className="text-neutral-600">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}