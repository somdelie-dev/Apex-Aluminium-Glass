"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+27 XX XXX XXXX",
    href: "tel:+27000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@apexglass.co.za",
    href: "mailto:info@apexglass.co.za",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gauteng, South Africa",
    href: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Fri: 8AM-5PM | Sat: 8AM-1PM",
    href: null,
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2 tracking-wide">
            CONTACT US
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Contact us for a free consultation and
            quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="name">Full Name</FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+27 XX XXX XXXX"
                        required
                      />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="subject">Subject</FieldLabel>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="e.g., Window Installation Quote"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="message">Message</FieldLabel>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                    />
                  </Field>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded overflow-hidden bg-muted flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Gauteng, South Africa</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Contact us for exact location details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
