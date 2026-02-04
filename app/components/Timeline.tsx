"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";

const milestones = [
  {
    title: "First Date",
    date: "The Beginning",
    description: "Where it all started. I knew there was something special about you.",
    image: "https://res.cloudinary.com/dquzcqxcy/image/upload/v1770198362/xrlx0lts5kjb3tcr40l1.jpg",
  },
  {
    title: "Our First Trip",
    date: "Making Memories",
    description: "Exploring the world with you is my favorite adventure.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2786&auto=format&fit=crop",
  },
  {
    title: "Unforgettable Laughs",
    date: "Joy",
    description: "Your smile lights up my world like nothing else.",
    image: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?q=80&w=2787&auto=format&fit=crop",
  },
  {
    title: "Today",
    date: "Forever?",
    description: "Every moment leads to this one...",
    image: "https://res.cloudinary.com/dquzcqxcy/image/upload/v1770198529/zy7pr9lydpcnpq2f6hsc.jpg",
  },
];

export function Timeline() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl text-center text-primary mb-16 font-script">Our Story</h2>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30 hidden md:block" />

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Card */}
              <div className="flex-1 w-full">
                <Card className="overflow-hidden border-accent/20 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 text-center md:text-left">
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">{milestone.date}</span>
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-script">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-sans">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Center Heart Icon (Desktop) */}
              <div className="hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg z-10">
                <HugeiconsIcon icon={FavouriteIcon} className="w-6 h-6 fill-current" />
              </div>

              {/* Spacer for opposite side */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
