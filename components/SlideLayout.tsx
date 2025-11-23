import { ReactNode } from "react";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "motion/react";
import backgroundImage from "figma:asset/a3d4cb39db56dfc50c178914c64186d87d53b6c5.png";

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface SlideLayoutProps {
  children: ReactNode;
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundOpacity?: number;
  onHomeClick?: () => void;
  pageNumber?: number;
  totalPages?: number;
}

export default function SlideLayout({
  children,
  title,
  breadcrumbs = [],
  backgroundOpacity = 0.15,
  onHomeClick,
  pageNumber,
  totalPages,
}: SlideLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-neutral-100 flex items-center justify-center p-8">
      {/* Slide Frame - 1440 x 1024 */}
      <motion.div
        className="relative w-[1440px] h-[1024px] bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: backgroundOpacity,
          }}
        />

        {/* Header Navigation */}
        <div className="relative z-10 bg-white/95 backdrop-blur-sm border-b border-neutral-200 px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={onHomeClick}
                className="flex items-center gap-1.5 text-[#116dff] hover:text-[#5e97ff] transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>

              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                  {crumb.onClick ? (
                    <button
                      onClick={crumb.onClick}
                      className="text-neutral-600 hover:text-[#116dff] transition-colors"
                    >
                      {crumb.label}
                    </button>
                  ) : (
                    <span className="text-neutral-900">{crumb.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Page Counter */}
            {pageNumber && totalPages && (
              <div className="text-sm text-neutral-500">
                {pageNumber} / {totalPages}
              </div>
            )}
          </div>
        </div>

        {/* Title Banner */}
        {title && (
          <motion.div
            className="relative z-10 bg-gradient-to-r from-[#116dff] to-[#5e97ff] px-8 py-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-white">{title}</h2>
          </motion.div>
        )}

        {/* Content Area */}
        <div className="relative z-10 h-[calc(100%-var(--header-height))] overflow-y-auto">
          <div className="p-8">
            {children}
          </div>
        </div>

        {/* SGF Branding Footer */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm border-t border-neutral-200 px-8 py-3">
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <span>The Savannah Grace Foundation</span>
            <span>Case Study</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
