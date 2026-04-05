"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Modern Aluminium Windows",
    category: "Residential",
    image: "/images/project-windows.jpg",
  },
  {
    id: 2,
    title: "Premium Sliding Doors",
    category: "Residential",
    image: "/images/project-doors.jpg",
  },
  {
    id: 3,
    title: "Glass Balustrade Installation",
    category: "Commercial",
    image: "/images/project-balustrade.jpg",
  },
  {
    id: 4,
    title: "Frameless Shower Enclosure",
    category: "Residential",
    image: "/images/project-shower.jpg",
  },
  {
    id: 5,
    title: "Commercial Shopfront",
    category: "Commercial",
    image: "/images/project-shopfront.jpg",
  },
  {
    id: 6,
    title: "Modern Glass Facade",
    category: "Commercial",
    image: "/images/hero-building.jpg",
  },
];

export function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2 tracking-wide">OUR WORK</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Recent Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent installations, showcasing our
            commitment to quality and design excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedImage(project.image)}
              className="group relative aspect-4/3 overflow-hidden rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-accent text-xs font-medium mb-1">
                  {project.category}
                </p>
                <h3 className="text-white font-semibold">{project.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative aspect-video">
              <Image
                src={selectedImage}
                alt="Project detail"
                fill
                className="object-cover"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
