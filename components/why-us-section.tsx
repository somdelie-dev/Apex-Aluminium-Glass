import {
  Shield,
  Users,
  Palette,
  Banknote,
  Clock,
  HeadphonesIcon,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "High-Quality Materials",
    description:
      "We use only premium-grade aluminium and glass for lasting durability.",
  },
  {
    icon: Users,
    title: "Skilled & Experienced Team",
    description:
      "Our craftsmen bring years of expertise to every installation.",
  },
  {
    icon: Palette,
    title: "Custom Design Solutions",
    description:
      "Tailored designs that match your vision and requirements perfectly.",
  },
  {
    icon: Banknote,
    title: "Competitive Pricing",
    description: "Premium quality at fair prices with transparent quotations.",
  },
  {
    icon: Clock,
    title: "Reliable Project Delivery",
    description: "We respect your time and deliver projects on schedule.",
  },
  {
    icon: HeadphonesIcon,
    title: "Excellent Customer Service",
    description:
      "Dedicated support from consultation to completion and beyond.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2 tracking-wide">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Apex Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, quality materials, and exceptional service to
            deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center shrink-0">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
