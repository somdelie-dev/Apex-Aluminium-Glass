import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-accent-foreground mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          Contact us today for a free consultation and quote. Let us help you
          transform your space with premium aluminium and glass solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="#contact">
              Get a Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
            asChild
          >
            <a href="tel:+27000000000">
              <Phone className="w-4 h-4 mr-2" />
              Call +27 XX XXX XXXX
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
