import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface ColorSwatch {
  name: string;
  hex: string;
  variable: string;
  description: string;
}

const colorPalette: { [key: string]: ColorSwatch[] } = {
  primary: [
    { name: "Primary 500", hex: "#116dff", variable: "--color-primary-500", description: "Main brand blue - headlines, CTAs, key elements" },
    { name: "Primary 400", hex: "#3397ff", variable: "--color-primary-400", description: "Interactive elements, hover states" },
    { name: "Primary 600", hex: "#0e57cc", variable: "--color-primary-600", description: "Pressed states, darker accents" },
  ],
  secondary: [
    { name: "Secondary 500", hex: "#5e97ff", variable: "--color-secondary-500", description: "Borders, secondary CTAs, accents" },
    { name: "Secondary 400", hex: "#7facff", variable: "--color-secondary-400", description: "Lighter accents, backgrounds" },
    { name: "Secondary 600", hex: "#4b79cc", variable: "--color-secondary-600", description: "Secondary element pressed states" },
  ],
  tertiary: [
    { name: "Tertiary 500", hex: "#bde9fb", variable: "--color-tertiary-500", description: "Overlays, soft backgrounds, highlights" },
    { name: "Tertiary 400", hex: "#87dfff", variable: "--color-tertiary-400", description: "Light backgrounds, cards" },
    { name: "Tertiary 600", hex: "#97bacc", variable: "--color-tertiary-600", description: "Subtle borders and dividers" },
  ],
};

function ColorCard({ color }: { color: ColorSwatch }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div 
        className="h-32 w-full relative group cursor-pointer"
        style={{ backgroundColor: color.hex }}
        onClick={() => copyToClipboard(color.hex)}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          {copied ? (
            <Check className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
          ) : (
            <Copy className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <p className="text-neutral-900">{color.name}</p>
        </div>
        <div className="space-y-1 text-neutral-600">
          <p className="font-mono">{color.hex}</p>
          <p className="font-mono text-xs">{color.variable}</p>
        </div>
        <p className="text-neutral-500 mt-2">{color.description}</p>
      </div>
    </div>
  );
}

function TypographyExample() {
  return (
    <div className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div>
        <h1 className="text-[#116dff] mb-2">Heading 1</h1>
        <p className="text-neutral-500">3.5rem / 56px - Used for main page titles</p>
      </div>
      <div>
        <h2 className="text-[#116dff] mb-2">Heading 2</h2>
        <p className="text-neutral-500">2.5rem / 40px - Used for section titles</p>
      </div>
      <div>
        <h3 className="text-[#116dff] mb-2">Heading 3</h3>
        <p className="text-neutral-500">2rem / 32px - Used for subsections</p>
      </div>
      <div>
        <h4 className="text-[#116dff] mb-2">Heading 4</h4>
        <p className="text-neutral-500">1.5rem / 24px - Used for card titles</p>
      </div>
      <div>
        <p className="mb-2">Body Text - Regular paragraph text that provides detailed information and content throughout the case study.</p>
        <p className="text-neutral-500">1rem / 16px - Line height 1.6</p>
      </div>
      <div>
        <p className="lead mb-2">Lead Text - Introductory text that draws attention</p>
        <p className="text-neutral-500">1.25rem / 20px - Line height 1.7</p>
      </div>
    </div>
  );
}

function SpacingScale() {
  const spacings = [
    { name: "XS", size: "0.5rem", pixels: "8px" },
    { name: "SM", size: "0.75rem", pixels: "12px" },
    { name: "MD", size: "1rem", pixels: "16px" },
    { name: "LG", size: "1.5rem", pixels: "24px" },
    { name: "XL", size: "2rem", pixels: "32px" },
    { name: "2XL", size: "3rem", pixels: "48px" },
    { name: "3XL", size: "4rem", pixels: "64px" },
    { name: "4XL", size: "6rem", pixels: "96px" },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="space-y-4">
        {spacings.map((spacing) => (
          <div key={spacing.name} className="flex items-center gap-4">
            <div className="w-16 text-neutral-700">{spacing.name}</div>
            <div 
              className="bg-[#116dff] h-8"
              style={{ width: spacing.size }}
            />
            <div className="text-neutral-600 font-mono">{spacing.size} ({spacing.pixels})</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DesignKit() {
  return (
    <div className="space-y-12 -m-8 p-8 pb-16">
      {/* Color Palette */}
      <section className="space-y-6">
        <div>
          <h3 className="text-[#116dff] mb-2">Primary Colors</h3>
          <p className="text-neutral-600 mb-6">
            Bold and trustworthy blues that represent hope, stability, and community support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colorPalette.primary.map((color) => (
            <ColorCard key={color.name} color={color} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h3 className="text-[#116dff] mb-2">Secondary Colors</h3>
          <p className="text-neutral-600 mb-6">
            Supporting colors for interactive elements, borders, and accent features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colorPalette.secondary.map((color) => (
            <ColorCard key={color.name} color={color} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h3 className="text-[#116dff] mb-2">Tertiary Colors</h3>
          <p className="text-neutral-600 mb-6">
            Soft, calming colors for backgrounds, overlays, and highlighting important content.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colorPalette.tertiary.map((color) => (
            <ColorCard key={color.name} color={color} />
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-6">
        <div>
          <h3 className="text-[#116dff] mb-2">Typography</h3>
          <p className="text-neutral-600 mb-6">
            Clear, accessible typography that ensures readability across all content.
          </p>
        </div>
        <TypographyExample />
      </section>

      {/* Spacing */}
      <section className="space-y-6">
        <div>
          <h3 className="text-[#116dff] mb-2">Spacing Scale</h3>
          <p className="text-neutral-600 mb-6">
            Consistent spacing that creates visual harmony and improves content hierarchy.
          </p>
        </div>
        <SpacingScale />
      </section>

      {/* Design Principles */}
      <section className="space-y-6">
        <div>
          <h3 className="text-[#116dff] mb-2">Design Principles</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#116dff]">
            <h4 className="text-[#116dff] mb-3">Accessibility First</h4>
            <p className="text-neutral-700">
              All color combinations meet WCAG AA standards for contrast, 
              ensuring content is readable for everyone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#5e97ff]">
            <h4 className="text-[#5e97ff] mb-3">Clear Hierarchy</h4>
            <p className="text-neutral-700">
              Consistent use of typography and spacing creates clear visual 
              hierarchy that guides users through content.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#bde9fb]">
            <h4 className="text-[#116dff] mb-3">Compassionate Design</h4>
            <p className="text-neutral-700">
              Soft, welcoming colors and generous spacing create a warm, 
              approachable experience for all community members.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#116dff]">
            <h4 className="text-[#116dff] mb-3">Community Focused</h4>
            <p className="text-neutral-700">
              Every design decision centers on supporting community initiatives 
              and highlighting impact stories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}