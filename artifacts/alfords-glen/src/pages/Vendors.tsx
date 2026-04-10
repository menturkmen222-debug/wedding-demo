import { motion } from "framer-motion";
import { Link } from "wouter";
import vendorHero from "@assets/1374818350828910_1775787295967.jpg";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Camera, Flower2, Music, Cake, Sparkles } from "lucide-react";

const categories = [
  { icon: UtensilsCrossed, label: "Caterers", desc: "Professional catering services for your reception dinner and cocktail hour." },
  { icon: Camera, label: "Photographers & Videographers", desc: "Experienced wedding photographers and videographers familiar with our venue." },
  { icon: Flower2, label: "Florists", desc: "Local florists who create stunning arrangements to complement our rustic setting." },
  { icon: Music, label: "DJs & Live Music", desc: "DJs and bands experienced with barn wedding acoustics and outdoor events." },
  { icon: Cake, label: "Cake & Desserts", desc: "Local bakeries offering custom wedding cakes and dessert bars." },
  { icon: Sparkles, label: "Hair & Makeup", desc: "On-site bridal hair and makeup artists available for your wedding morning." },
];

export function Vendors() {
  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Hero */}
      <section className="relative pt-32 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={vendorHero} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white mb-4"
        >
          Preferred Vendors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/80 max-w-2xl mx-auto px-4 font-sans"
        >
          We have a curated list of local professionals who know Alford's Glen and share our commitment to making your day special. Contact us to receive our full preferred vendor list.
        </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white rounded-xl p-8 border border-border shadow-sm flex flex-col items-center text-center hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center text-primary mb-5">
                <cat.icon size={28} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{cat.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center bg-accent/20 rounded-2xl p-12 border border-accent">
          <span className="font-script text-4xl text-primary mb-2 block">Get the List</span>
          <h2 className="text-3xl font-serif text-foreground mb-4">Request Our Vendor Recommendations</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 font-sans">
            Reach out and we'll send you our full preferred vendor list with real local businesses we trust and recommend.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-10 py-3 rounded-full text-base shadow">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
