import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  BadgeCheck,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f4f8fc] pt-28 sm:pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-building.jpg"
          alt="Modern aluminium and glass building"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/82" />
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/85 to-primary/55" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute inset-y-0 right-0 w-[45%] bg-white/10 blur-3xl" />
      <div className="absolute -left-30 top-30 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-180 items-center gap-14 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          {/* Left Content */}
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center rounded-sm bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground shadow-md">
              Premium Aluminium & Glass Solutions
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              We Install Premium
              <span className="block text-accent">Aluminium, Glass, Doors</span>
              and Modern Balustrades
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              We design, supply, and install high-quality aluminium windows,
              folding doors, sliding doors, frameless glass systems, shower
              enclosures, balustrades, and custom glazing solutions for homes,
              offices, and commercial spaces.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="h-12 rounded-sm bg-accent px-7 text-accent-foreground hover:bg-accent/90"
              >
                <Link href="#contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 rounded-sm border-white/30 bg-white/10 px-7 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              >
                <a href="tel:+27000000000">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </div>

            {/* Feature bullets */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-sm border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-white">
                  Quality Materials
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-sm border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <BadgeCheck className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-white">
                  Trusted Workmanship
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-sm border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <Building2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-white">
                  Residential & Commercial
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Hero Card/Image */}
          <div className="relative hidden lg:block">
            <div className="relative ml-auto max-w-140">
              {/* Back card */}
              <div className="absolute -left-6 top-8 h-full w-full rounded-sm bg-accent/90" />

              {/* Front image card */}
              <div className="relative overflow-hidden rounded-sm border border-white/20 bg-white shadow-2xl">
                <div className="relative h-145">
                  <Image
                    src="/images/hero-worker.jpg"
                    alt="Professional aluminium and glass installer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating info card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white p-5 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-extrabold text-primary">
                        10+
                      </div>
                      <div className="mt-1 text-xs font-medium text-muted-foreground">
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-primary">
                        500+
                      </div>
                      <div className="mt-1 text-xs font-medium text-muted-foreground">
                        Projects Done
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-primary">
                        100%
                      </div>
                      <div className="mt-1 text-xs font-medium text-muted-foreground">
                        Client Focus
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small badge card */}
              <div className="absolute -right-6 top-10 w-52 border border-border bg-white p-4 shadow-xl">
                <div className="mb-1 text-sm font-bold text-primary">
                  Licensed & Insured
                </div>
                <p className="text-xs leading-5 text-muted-foreground">
                  Professional aluminium and glass installations with reliable
                  support and clean finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats strip for mobile/tablet and continuation effect */}
      <div className="relative z-10 border-t border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 py-6 md:grid-cols-4 md:gap-8">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-primary sm:text-3xl">
                10+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-primary sm:text-3xl">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-primary sm:text-3xl">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-primary sm:text-3xl">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
