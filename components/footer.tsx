import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#projects", label: "Our Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Aluminium Windows",
  "Aluminium Doors",
  "Glass Balustrades",
  "Shower Enclosures",
  "Shopfront Systems",
  "Repairs & Maintenance",
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path
                    d="M20 2L4 38h6l10-24 10 24h6L20 2z"
                    fill="currentColor"
                    className="text-primary-foreground"
                  />
                  <rect
                    x="14"
                    y="20"
                    width="12"
                    height="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                  />
                  <line
                    x1="20"
                    y1="20"
                    x2="20"
                    y2="28"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-accent"
                  />
                  <line
                    x1="14"
                    y1="24"
                    x2="26"
                    y2="24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-accent"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary-foreground leading-tight">
                  APEX
                </span>
                <span className="text-[10px] font-medium text-primary-foreground/70 tracking-wider leading-none">
                  ALUMINIUM & GLASS
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium aluminium and glass solutions for residential and
              commercial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a
                  href="tel:+27000000000"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  +27 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a
                  href="mailto:info@apexglass.co.za"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  info@apexglass.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Gauteng, South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Apex Aluminium & Glass. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
