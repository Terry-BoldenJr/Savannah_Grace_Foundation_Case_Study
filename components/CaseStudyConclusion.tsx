import { ArrowRight, Mail, Phone, MapPin, Heart } from "lucide-react";
import imgSgfLBrandingLogo23 from "figma:asset/795d653fcb75e3f6103a7162aec31aba0d1f1deb.png";

interface CaseStudyConclusionProps {
  nextSteps?: string[];
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
}

export default function CaseStudyConclusion({
  nextSteps = [
    "Expand programs to reach 3 additional communities",
    "Launch new technology literacy initiative for seniors",
    "Establish scholarship endowment fund for sustainability",
    "Develop partnerships with regional organizations",
  ],
  contactInfo = {
    email: "info@savannahgrace.org",
    phone: "(555) 123-4567",
    address: "123 Community Drive, Savannah, GA 31401"
  }
}: CaseStudyConclusionProps) {
  return (
    <div className="space-y-12 -m-8 p-8 pb-16">
      {/* Key Learnings */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 bg-[#bde9fb]/30 text-[#116dff] rounded-full">
              Key Learnings
            </span>
          </div>
          <h2 className="text-[#116dff]">What We've Discovered</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#116dff]">
            <h4 className="text-[#116dff] mb-4">Community-Centered Approach</h4>
            <p className="text-neutral-700">
              The most successful initiatives are those designed with direct input from 
              community members. Listening and responding to real needs creates lasting impact.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#5e97ff]">
            <h4 className="text-[#116dff] mb-4">Collaboration is Key</h4>
            <p className="text-neutral-700">
              Partnerships with local organizations, businesses, and volunteers multiply 
              our impact and create sustainable support networks.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#5e97ff]">
            <h4 className="text-[#116dff] mb-4">Measure What Matters</h4>
            <p className="text-neutral-700">
              Data-driven approaches help us understand true impact, make improvements, 
              and demonstrate accountability to our community and donors.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#116dff]">
            <h4 className="text-[#116dff] mb-4">Adaptability & Growth</h4>
            <p className="text-neutral-700">
              Remaining flexible and responsive to changing community needs ensures our 
              programs stay relevant and effective over time.
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-[#116dff] mb-4">Looking Forward</h3>
          <p className="lead text-neutral-700 max-w-3xl mx-auto">
            Our commitment to the community continues to evolve and expand. 
            Here's what's on the horizon:
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#116dff]/5 to-[#5e97ff]/5 p-8 rounded-xl border border-[#bde9fb]/50">
          <div className="space-y-4">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-[#116dff] to-[#5e97ff] rounded-full flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <p className="text-neutral-700 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote/Mission */}
      <div className="relative">
        <div className="absolute left-8 top-8 opacity-10">
          <img 
            src={imgSgfLBrandingLogo23} 
            alt="SGF Logo" 
            className="w-32 h-auto mix-blend-luminosity"
          />
        </div>
        <div className="bg-white p-12 rounded-xl shadow-lg border-t-4 border-[#116dff] relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Heart className="w-12 h-12 text-[#116dff] mx-auto" />
            <blockquote className="text-neutral-800 italic">
              "Our mission is simple: to create lasting positive change by supporting our 
              community with compassion, dedication, and sustainable programs. Every person 
              we serve, every family we support, and every life we touch reinforces our 
              commitment to building a stronger, more connected community."
            </blockquote>
            <p className="text-[#116dff]">
              — The Savannah Grace Foundation Team
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-[#116dff] mb-4">Get Involved</h3>
          <p className="lead text-neutral-700 max-w-3xl mx-auto">
            Whether you want to volunteer, donate, or learn more about our programs, 
            we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#116dff] to-[#5e97ff] rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-neutral-600 mb-2">Email</div>
            <a href={`mailto:${contactInfo.email}`} className="text-[#116dff] hover:underline">
              {contactInfo.email}
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#116dff] to-[#5e97ff] rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-neutral-600 mb-2">Phone</div>
            <a href={`tel:${contactInfo.phone}`} className="text-[#116dff] hover:underline">
              {contactInfo.phone}
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#116dff] to-[#5e97ff] rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-neutral-600 mb-2">Address</div>
            <p className="text-[#116dff]">
              {contactInfo.address}
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-[#116dff] to-[#5e97ff] p-12 rounded-xl shadow-xl text-white text-center">
        <h3 className="text-white mb-4">Join Us in Making a Difference</h3>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Every contribution, every volunteer hour, and every act of kindness 
          helps us continue our mission of supporting and uplifting our community.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-[#116dff] rounded-lg hover:bg-neutral-100 transition-colors">
            Volunteer Today
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
            Make a Donation
          </button>
        </div>
      </div>

      {/* Author Credit */}
      <div className="text-center pt-8 border-t border-neutral-200">
        <p className="text-[#116dff]">
          Project By: Terry D Bolden Jr
        </p>
      </div>
    </div>
  );
}