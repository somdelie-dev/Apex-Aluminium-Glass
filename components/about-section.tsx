import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Premium quality materials",
  "Skilled & experienced team",
  "Custom design solutions",
  "On-time project delivery",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-4/3 relative rounded overflow-hidden">
              <Image
                src="/images/project-windows.jpg"
                alt="Apex Aluminium & Glass installation"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded shadow-xl hidden sm:block">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-medium mb-2 tracking-wide">
              ABOUT US
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Trusted Provider of Aluminium & Glass Solutions
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We are a trusted provider of aluminium and glass solutions,
              delivering precision workmanship and modern designs tailored to
              each project. With years of experience in the industry, we focus
              on quality, durability, and customer satisfaction.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether it&apos;s a small residential upgrade or a large
              commercial installation, we bring the same level of
              professionalism and attention to detail. Our mission is simple: to
              provide high-quality installations that enhance both functionality
              and aesthetics.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
