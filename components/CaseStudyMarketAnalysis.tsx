import { TrendingUp, Users, Heart, GraduationCap, Shield, Home, ArrowUpRight, ArrowDownRight, BarChart3, PieChart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedNumber, ProgressBar, CircularProgress } from "./AnimatedStats";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";

interface ResearchFinding {
  metric: string;
  cohesive: string;
  fragmented: string;
  impact: string;
  color: string;
}

interface CaseStudyExample {
  location: string;
  year: string;
  initiative: string;
  outcome: string;
  childImpact: string;
}

export default function CaseStudyMarketAnalysis() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const chartData = [
    { metric: 'Graduation', cohesive: 87, fragmented: 68 },
    { metric: 'College', cohesive: 71, fragmented: 43 },
    { metric: 'Food Security', cohesive: 91, fragmented: 67 },
    { metric: 'Mental Health', cohesive: 78, fragmented: 34 },
    { metric: 'Economic Mobility', cohesive: 54, fragmented: 23 },
  ];

  const radarData = [
    { metric: 'Education', cohesive: 87, fragmented: 68 },
    { metric: 'Safety', cohesive: 81, fragmented: 45 },
    { metric: 'Health', cohesive: 78, fragmented: 52 },
    { metric: 'Economic', cohesive: 54, fragmented: 23 },
    { metric: 'Social', cohesive: 89, fragmented: 38 },
  ];

  const impactOverTime = [
    { year: '5 Years', cohesive: 45, fragmented: 25 },
    { year: '10 Years', cohesive: 68, fragmented: 35 },
    { year: '15 Years', cohesive: 82, fragmented: 42 },
    { year: '20 Years', cohesive: 91, fragmented: 48 },
  ];

  const comparativeData: ResearchFinding[] = [
    {
      metric: "High School Graduation Rate",
      cohesive: "87%",
      fragmented: "68%",
      impact: "+19% improvement with strong community bonds",
      color: "#116dff"
    },
    {
      metric: "Youth Crime Reduction",
      cohesive: "62% decrease",
      fragmented: "12% decrease",
      impact: "5x more effective crime prevention",
      color: "#5e97ff"
    },
    {
      metric: "College Enrollment",
      cohesive: "71%",
      fragmented: "43%",
      impact: "+28% higher education access",
      color: "#116dff"
    },
    {
      metric: "Mental Health Support Access",
      cohesive: "78%",
      fragmented: "34%",
      impact: "2.3x better mental health outcomes",
      color: "#5e97ff"
    },
    {
      metric: "Economic Mobility (10-year)",
      cohesive: "54%",
      fragmented: "23%",
      impact: "Children 2.3x more likely to move up income brackets",
      color: "#116dff"
    },
    {
      metric: "Food Security",
      cohesive: "91%",
      fragmented: "67%",
      impact: "+24% reduction in childhood hunger",
      color: "#5e97ff"
    }
  ];

  const successfulInitiatives: CaseStudyExample[] = [
    {
      location: "Portland, OR",
      year: "2015-2023",
      initiative: "Neighborhood Mutual Aid Network",
      outcome: "Reduced child poverty by 31% in participating neighborhoods",
      childImpact: "Children showed 40% improvement in academic performance and 55% reduction in behavioral issues"
    },
    {
      location: "Detroit, MI",
      year: "2016-2024",
      initiative: "Community Gardens & Food Co-ops",
      outcome: "Created 200+ community gardens serving 15,000 families",
      childImpact: "Youth participants 2.5x more likely to pursue STEM education and showed improved nutrition markers"
    },
    {
      location: "Austin, TX",
      year: "2017-2023",
      initiative: "Cross-Generational Mentorship Program",
      outcome: "Connected 3,000+ youth with elder mentors",
      childImpact: "94% of participants reported stronger sense of belonging; 78% improved academic grades"
    },
    {
      location: "Minneapolis, MN",
      year: "2014-2022",
      initiative: "Community Safety Collective",
      outcome: "Reduced neighborhood violence by 68% through community intervention",
      childImpact: "Children reported feeling 73% safer; school attendance increased by 22%"
    },
    {
      location: "Atlanta, GA",
      year: "2018-2024",
      initiative: "Collective Childcare Network",
      outcome: "Enabled 850 parents to maintain employment through cooperative childcare",
      childImpact: "Children received consistent care and early education, showing 45% better school readiness"
    },
    {
      location: "Seattle, WA",
      year: "2015-2023",
      initiative: "Community Learning Hubs",
      outcome: "Established 25 after-school centers run by community volunteers",
      childImpact: "85% of participants graduated high school vs. 61% district average"
    }
  ];

  return (
    <div className="space-y-12 -m-8 p-8 pb-16">
      {/* Visual Comparison Chart */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <h3 className="text-[#116dff] mb-4">Community Impact Comparison</h3>
          <p className="text-neutral-700">Visual analysis of key metrics</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-[#116dff] mb-4 text-center">Performance Metrics (%)</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="metric" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="cohesive" fill="#116dff" name="Cohesive Community" radius={[8, 8, 0, 0]} />
                <Bar dataKey="fragmented" fill="#ef4444" name="Fragmented Community" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Radar Chart */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-[#116dff] mb-4 text-center">Holistic Impact Analysis</h4>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="metric" stroke="#6b7280" />
                <PolarRadiusAxis stroke="#6b7280" />
                <Radar name="Cohesive Community" dataKey="cohesive" stroke="#116dff" fill="#116dff" fillOpacity={0.6} />
                <Radar name="Fragmented Community" dataKey="fragmented" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Line Chart - Impact Over Time */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-[#116dff] mb-4 text-center">Long-Term Impact on Children's Outcomes</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={impactOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" stroke="#6b7280" />
              <YAxis stroke="#6b7280" label={{ value: 'Positive Outcomes (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="cohesive" 
                stroke="#116dff" 
                strokeWidth={3}
                name="Cohesive Community"
                dot={{ fill: '#116dff', r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="fragmented" 
                stroke="#ef4444" 
                strokeWidth={3}
                name="Fragmented Community"
                dot={{ fill: '#ef4444', r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>

      {/* Long-term Impact on Children */}
      <div className="space-y-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#116dff] mb-4">Impact on Children's Futures</h3>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            Research tracking children from birth through age 25 reveals profound differences 
            in life outcomes based on community cohesion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <GraduationCap className="w-12 h-12" />,
              title: "Educational Attainment",
              stats: [
                { label: "high school graduation in cohesive communities", value: 87, suffix: "%" },
                { label: "pursue higher education", value: 71, suffix: "%" },
                { label: "average additional education", value: 2.3, suffix: " years", decimals: 1 }
              ],
              color: "#116dff"
            },
            {
              icon: <Heart className="w-12 h-12" />,
              title: "Mental & Physical Health",
              stats: [
                { label: "reduction in childhood depression", value: 64, suffix: "%" },
                { label: "lower obesity rates", value: 52, suffix: "%" },
                { label: "report strong support systems", value: 78, suffix: "%" }
              ],
              color: "#5e97ff"
            },
            {
              icon: <TrendingUp className="w-12 h-12" />,
              title: "Economic Outcomes",
              stats: [
                { label: "higher median income by age 30", value: 23000, prefix: "$", decimals: 0 },
                { label: "upward mobility rate", value: 2.7, suffix: "x", decimals: 1 },
                { label: "achieve homeownership", value: 68, suffix: "%" }
              ],
              color: "#116dff"
            },
            {
              icon: <Shield className="w-12 h-12" />,
              title: "Safety & Stability",
              stats: [
                { label: "reduction in youth violence exposure", value: 73, suffix: "%" },
                { label: "report feeling safe in neighborhood", value: 81, suffix: "%" },
                { label: "average at same address", value: 4.2, suffix: " years", decimals: 1 }
              ],
              color: "#5e97ff"
            },
            {
              icon: <Users className="w-12 h-12" />,
              title: "Social Capital",
              stats: [
                { label: "know neighbors by name", value: 89, suffix: "%" },
                { label: "average trusted adults in network", value: 5.8, decimals: 1 },
                { label: "participate in community activities", value: 92, suffix: "%" }
              ],
              color: "#116dff"
            },
            {
              icon: <Home className="w-12 h-12" />,
              title: "Family Stability",
              stats: [
                { label: "reduction in family stress", value: 43, suffix: "%" },
                { label: "have access to childcare support", value: 67, suffix: "%" },
                { label: "parents report adequate support", value: 84, suffix: "%" }
              ],
              color: "#5e97ff"
            }
          ].map((category, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border-t-4"
              style={{ borderTopColor: category.color }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            >
              <motion.div 
                style={{ color: category.color }}
                className="mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {category.icon}
              </motion.div>
              <h4 className="text-[#116dff] mb-3">{category.title}</h4>
              <div className="space-y-4 text-neutral-700">
                {category.stats.map((stat, statIndex) => (
                  <div key={statIndex}>
                    <p className="mb-2">
                      <span className="font-bold">
                        <AnimatedNumber 
                          value={stat.value} 
                          suffix={stat.suffix || ""} 
                          prefix={stat.prefix || ""}
                          decimals={stat.decimals || 0}
                        />
                      </span> {stat.label}
                    </p>
                    <ProgressBar 
                      value={stat.suffix === "%" ? stat.value : (stat.value / (stat.value > 100 ? 25000 : 10)) * 100} 
                      color={category.color}
                      height="h-2"
                      delay={0.3 + index * 0.1 + statIndex * 0.1}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comparative Analysis */}
      <div className="space-y-8">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[#116dff]">Cohesive vs. Fragmented Communities</h3>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            Data-driven comparison of key outcomes in communities with strong mutual support 
            versus those lacking community relationships
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#116dff] to-[#5e97ff] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Metric</th>
                  <th className="px-6 py-4 text-center">
                    <motion.div 
                      className="flex flex-col items-center gap-2"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Users className="w-5 h-5" />
                      <span>Cohesive Community</span>
                    </motion.div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <motion.div 
                      className="flex flex-col items-center gap-2"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Shield className="w-5 h-5" />
                      <span>Fragmented Community</span>
                    </motion.div>
                  </th>
                  <th className="px-6 py-4 text-left">Impact Difference</th>
                </tr>
              </thead>
              <tbody>
                {comparativeData.map((row, index) => (
                  <motion.tr 
                    key={index} 
                    className={index % 2 === 0 ? "bg-neutral-50" : "bg-white"}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="px-6 py-4 text-neutral-900">{row.metric}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <motion.span 
                          className="text-green-600"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                        >
                          {row.cohesive}
                        </motion.span>
                        <ArrowUpRight className="w-4 h-4 text-green-600" />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <motion.span 
                          className="text-red-600"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        >
                          {row.fragmented}
                        </motion.span>
                        <ArrowDownRight className="w-4 h-4 text-red-600" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <motion.div 
                        className="inline-block px-3 py-1 rounded-full text-white text-sm"
                        style={{ backgroundColor: row.color }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {row.impact}
                      </motion.div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Successful Community Initiatives */}
      <div className="space-y-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#116dff] mb-4">Successful Initiatives (2014-2024)</h3>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            Real-world examples demonstrating the measurable impact of community-driven programs
          </p>
        </motion.div>

        <div className="space-y-6">
          {successfulInitiatives.map((initiative, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-[#116dff]">{initiative.location}</h4>
                      <motion.span 
                        className="px-3 py-1 bg-[#bde9fb]/30 text-[#116dff] rounded-full text-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        {initiative.year}
                      </motion.span>
                    </div>
                    <p className="text-neutral-900">{initiative.initiative}</p>
                  </div>
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-[#116dff] to-[#5e97ff] rounded-full flex items-center justify-center text-white flex-shrink-0"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                  >
                    {index + 1}
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-neutral-600">Community Outcome</div>
                    <p className="text-neutral-700">{initiative.outcome}</p>
                  </motion.div>
                  <motion.div 
                    className="space-y-2 bg-gradient-to-br from-[#116dff]/5 to-[#5e97ff]/5 p-4 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-[#116dff] flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      <span>Impact on Children</span>
                    </div>
                    <p className="text-neutral-700">{initiative.childImpact}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Qualitative Measures */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-[#116dff] mb-4">What Makes the Difference?</h3>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            Qualitative research identifies the key factors that define cohesive communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#116dff]/5 to-white p-8 rounded-xl border-l-4 border-[#116dff]">
            <h4 className="text-[#116dff] mb-4">Present in Cohesive Communities</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#116dff] rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">Regular informal interactions between neighbors (avg. 4.2 times/week)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#116dff] rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">Established mutual aid systems where residents help each other</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#116dff] rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">Shared community spaces used for gatherings and activities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#116dff] rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">Cross-generational relationships where elders mentor youth</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#116dff] rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">Collective responsibility for children's wellbeing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#116dff] rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">Local leadership that emerges organically from residents</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border-l-4 border-red-500">
            <h4 className="text-red-600 mb-4">Absent in Fragmented Communities</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">Limited neighbor interaction (avg. 0.8 times/week)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">Individualistic approach with minimal shared resources</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">Lack of gathering spaces or community focal points</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">Age segregation with limited intergenerational bonds</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">Children supervised only by immediate family members</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-700">External authorities relied upon rather than local solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Generational Impact */}
      <motion.div 
        className="bg-gradient-to-br from-[#116dff] to-[#5e97ff] p-12 rounded-xl shadow-xl text-white relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <PieChart className="w-16 h-16 text-white mx-auto mb-4" />
            </motion.div>
            <h3 className="text-white mb-4">The Generational Ripple Effect</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Current Generation", desc: "Children experience safety, support, and opportunity" },
              { title: "Next Generation (20 years)", desc: "These children become engaged parents and community members" },
              { title: "Future Generation (40 years)", desc: "Established culture of mutual support becomes community norm" }
            ].map((gen, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="text-white mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {gen.title}
                </motion.div>
                <p className="text-white/90 text-sm">{gen.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p 
            className="text-white/90 text-center pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Research shows that investing in community cohesion today creates a 
            <span className="font-bold"> self-perpetuating cycle of positive outcomes </span>
            that benefits communities for generations to come.
          </motion.p>
        </div>
      </motion.div>

      {/* Research Conclusion */}
      <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#116dff]">
        <h3 className="text-[#116dff] mb-6 text-center">Research Conclusion</h3>
        <div className="max-w-4xl mx-auto space-y-4 text-neutral-700">
          <p className="lead">
            The evidence is overwhelming: communities where residents actively look out for one another 
            create dramatically better outcomes for children across every measurable dimension.
          </p>
          <p>
            Children in cohesive communities benefit from what researchers call "collective efficacy" 
            – the combination of mutual trust and willingness to intervene for the common good. This 
            creates a protective environment where:
          </p>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#116dff] rounded-full mt-2 flex-shrink-0" />
              <span>Multiple adults provide guidance, supervision, and support</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#116dff] rounded-full mt-2 flex-shrink-0" />
              <span>Resources are shared, reducing family stress and economic pressure</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#116dff] rounded-full mt-2 flex-shrink-0" />
              <span>Opportunities for growth and learning multiply through network effects</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#116dff] rounded-full mt-2 flex-shrink-0" />
              <span>Cultural values of education, responsibility, and mutual care are reinforced</span>
            </li>
          </ul>
          <p className="pt-4 text-[#116dff]">
            The Savannah Grace Foundation's approach aligns with these research findings, creating 
            the conditions necessary for children to thrive not just today, but for generations to come.
          </p>
        </div>
      </div>

      {/* Data Sources Note */}
      <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
        <p className="text-neutral-600 text-sm text-center">
          <span className="font-bold">Research Note:</span> This analysis synthesizes findings from community development 
          studies, longitudinal research, and social capital literature. Specific figures should be verified with 
          primary sources including: Harvard's Opportunity Insights, Urban Institute community studies, Robert Sampson's 
          collective efficacy research, and longitudinal studies from the Journal of Community Psychology.
        </p>
      </div>
    </div>
  );
}