import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Apex delivered beyond our expectations. The finish is clean and modern. Our new aluminium windows have transformed our home completely.",
    author: "Sarah M.",
    role: "Residential Client",
  },
  {
    quote:
      "Professional team, on time, and great quality work. They installed our commercial shopfront flawlessly. Highly recommended!",
    author: "James K.",
    role: "Commercial Client",
  },
  {
    quote:
      "I highly recommend them for any aluminium and glass work. The glass balustrade they installed is absolutely stunning.",
    author: "David L.",
    role: "Homeowner",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2 tracking-wide">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say about our work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-primary-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-primary-foreground font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-primary-foreground/60 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
