import { Card, CardContent } from "@/components/ui/card";
import {
  LayoutGrid,
  DoorOpen,
  Fence,
  ShowerHead,
  Store,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Aluminium Windows",
    description:
      "Durable, stylish, and energy-efficient window systems designed for modern homes and commercial buildings.",
  },
  {
    icon: DoorOpen,
    title: "Aluminium Doors",
    description:
      "Sliding, folding, and hinged doors built for modern living with premium finishes and smooth operation.",
  },
  {
    icon: Fence,
    title: "Glass Balustrades",
    description:
      "Frameless and semi-frameless designs for balconies, staircases, and pools with crystal clear safety glass.",
  },
  {
    icon: ShowerHead,
    title: "Shower Enclosures",
    description:
      "Custom frameless shower enclosures with premium finishes and hardware for a luxurious bathroom experience.",
  },
  {
    icon: Store,
    title: "Shopfront Systems",
    description:
      "Professional commercial glass solutions for businesses, including storefronts and office partitions.",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description:
      "Reliable repairs and upgrades for existing installations, ensuring longevity and optimal performance.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2 tracking-wide">
            OUR SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From residential upgrades to large commercial installations, we
            deliver precision workmanship and modern designs tailored to each
            project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-shadow border-border bg-background"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
