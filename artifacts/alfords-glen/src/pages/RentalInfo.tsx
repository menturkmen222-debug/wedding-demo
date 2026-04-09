import { motion } from "framer-motion";
import { Check, Users, CalendarDays, Home, Shield, Flame, Utensils, Car, Music, Trees } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const included = [
  { icon: CalendarDays, label: "Early Access Friday", desc: "Decorate & set up Friday, 8 AM – 8 PM" },
  { icon: Home, label: "Day-of Coordination", desc: "Professional day-of wedding coordination" },
  { icon: Shield, label: "Security & Bartenders", desc: "Security guard and 2 licensed bartenders" },
  { icon: Users, label: "Restroom Facilities", desc: "Outdoor restroom rental + one indoor facility" },
  { icon: Home, label: "Bridal Apartment", desc: "Private apartment in the house for getting ready (Saturday)" },
  { icon: Users, label: "Groom's Room", desc: "Dedicated groom's room in the barn" },
  { icon: Flame, label: "Firepit with Firewood", desc: "Use of firepit with firewood provided (weather permitting)" },
  { icon: Trees, label: "On-Site Decor", desc: "Use of all venue-owned on-site decorations" },
  { icon: Utensils, label: "Ceremony Included", desc: "No additional charge for on-site ceremony" },
  { icon: Car, label: "Ample Parking", desc: "Free on-site parking for all guests" },
];

export function RentalInfo() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-script text-4xl md:text-5xl text-primary mb-4 block"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Celebrate With Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl text-white font-serif"
          >
            Rental Information
          </motion.h1>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-foreground mb-4">Rental Fee</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            One transparent price — everything your wedding day needs, included.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-primary/30 shadow-lg overflow-hidden"
        >
          <div className="bg-secondary px-8 py-10 text-center">
            <p className="text-primary font-serif italic text-xl mb-2">Full Day Wedding Rental</p>
            <div className="text-7xl font-serif text-white">$6,500</div>
            <p className="text-white/70 mt-3 text-sm tracking-wide uppercase">Saturday Weddings</p>
          </div>

          <div className="px-8 py-10">
            <h3 className="font-serif text-xl text-foreground mb-6 text-center">Payment Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { step: "1", label: "To Hold Your Date", amount: "$500 deposit" },
                { step: "2", label: "6 Months Before Wedding", amount: "$1,000" },
                { step: "3", label: "2 Months Before Wedding", amount: "Remaining balance" },
              ].map((item) => (
                <div key={item.step} className="bg-accent/20 rounded-xl p-5 text-center border border-accent">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="font-serif text-foreground font-medium">{item.amount}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white px-10 py-3 rounded-full text-base shadow">
                <Link href="/contact">Check Date Availability</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Capacity */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-serif text-foreground mb-4">Capacity</h2>
          <p className="text-muted-foreground mb-10">
            Tables and chairs are provided for up to <strong>160 guests</strong> for indoor use.
            Outdoor ceremony space is available at no extra charge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <Users className="mx-auto mb-3 text-primary h-8 w-8" />
              <p className="font-serif text-2xl text-foreground">Up to 160</p>
              <p className="text-muted-foreground text-sm mt-1">Indoor Guests (tables & chairs included)</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <Trees className="mx-auto mb-3 text-primary h-8 w-8" />
              <p className="font-serif text-2xl text-foreground">Outdoor Ceremony</p>
              <p className="text-muted-foreground text-sm mt-1">No additional charge for on-site ceremony</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif text-foreground mb-4">What's Included</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every rental includes the following — no hidden fees, no surprises.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white rounded-xl p-6 border border-border shadow-sm hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <item.icon className="text-primary h-6 w-6 mb-3" />
              <h4 className="font-serif text-foreground text-lg mb-1">{item.label}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary text-left">
                What does the $500 deposit do?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                The $500 deposit is paid upfront to hold your date. It is applied toward the total rental fee. The remaining balance follows our payment schedule: $1,000 due 6 months before the wedding, and the balance due 2 months before.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary text-left">
                When can we access the venue for setup?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                You have full access to the barn on Friday from 8 AM to 8 PM to decorate and set up, so your wedding day starts relaxed and ready.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary text-left">
                Is catering provided?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                We do not provide in-house catering. You are welcome to hire any professional caterer of your choice. We have a Preferred Vendors list available — contact us to receive it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-border">
              <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary text-left">
                Are bartenders included?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Yes — 2 licensed bartenders are included in your rental. A security guard is also provided on-site throughout your event.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-border">
              <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary text-left">
                Is there a place for the bridal party to get ready?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Yes. The bride and bridal party have access to a private apartment in the main house on Saturday. The groom's party has a dedicated groom's room in the barn.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-border">
              <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary text-left">
                Can we use the firepit?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Absolutely. The firepit is included in your rental with firewood provided, weather permitting. It's a beautiful gathering spot for guests during cocktail hour or after dinner.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-border">
              <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary text-left">
                Do you have restroom facilities?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                There is one indoor restroom facility, plus an outdoor restroom rental is included to comfortably accommodate all your guests.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-4xl text-white mb-4">Ready to Reserve Your Date?</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Reach out and we'll check availability — Alford's Glen fills up fast.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-10 py-3 rounded-full text-base shadow-lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
