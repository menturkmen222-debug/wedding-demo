import { motion } from "framer-motion";
import { Check, Users, Clock, Coffee, MapPin, Wine, Shield, XCircle, Dog } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

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

      {/* Pricing Cards */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-foreground mb-4">Investment</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Transparent pricing designed to make your dream wedding a reality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div whileHover={{ y: -5 }} className="h-full">
            <Card className="h-full flex flex-col bg-white border-border shadow-sm">
              <CardHeader className="text-center pb-8 border-b border-border/50">
                <CardTitle className="font-serif text-2xl text-foreground">Weekday Package</CardTitle>
                <div className="mt-4 font-serif text-4xl text-primary">$3,500</div>
              </CardHeader>
              <CardContent className="pt-8 flex-1 flex flex-col">
                <ul className="space-y-4 text-muted-foreground flex-1">
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> Mon-Thurs</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> 8-hour rental</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> Tables & chairs</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> Bridal suite</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> Parking</li>
                </ul>
                <Button asChild className="w-full mt-8 bg-primary/10 text-primary hover:bg-primary hover:text-white" variant="outline">
                  <Link href="/contact">Inquire</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="h-full scale-105 z-10 relative">
            <Card className="h-full flex flex-col bg-white border-primary shadow-lg ring-1 ring-primary/20">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
              <CardHeader className="text-center pb-8 border-b border-border/50">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Most Popular</div>
                <CardTitle className="font-serif text-3xl text-foreground">Weekend Package</CardTitle>
                <div className="mt-4 font-serif text-5xl text-foreground">$5,500</div>
              </CardHeader>
              <CardContent className="pt-8 flex-1 flex flex-col">
                <ul className="space-y-4 text-muted-foreground flex-1">
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> Fri-Sun</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> 12-hour rental</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> All weekday amenities</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> Groom's room</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> String lights</li>
                </ul>
                <Button asChild className="w-full mt-8 bg-primary hover:bg-primary/90 text-white shadow-md">
                  <Link href="/contact">Inquire</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="h-full">
            <Card className="h-full flex flex-col bg-white border-border shadow-sm">
              <CardHeader className="text-center pb-8 border-b border-border/50">
                <CardTitle className="font-serif text-2xl text-foreground">All-Inclusive</CardTitle>
                <div className="mt-4 font-serif text-4xl text-primary">$8,500</div>
              </CardHeader>
              <CardContent className="pt-8 flex-1 flex flex-col">
                <ul className="space-y-4 text-muted-foreground flex-1">
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> Full weekend access</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> All amenities included</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> Catering kitchen</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> Fire pit access</li>
                  <li className="flex items-start"><Check className="text-primary mr-2 h-5 w-5 shrink-0" /> Day-of coordinator</li>
                </ul>
                <Button asChild className="w-full mt-8 bg-primary/10 text-primary hover:bg-primary hover:text-white" variant="outline">
                  <Link href="/contact">Inquire</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Capacity & What's Included */}
      <section className="py-24 bg-accent/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-foreground mb-4">Venue Details</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-2xl font-serif text-primary mb-6">Capacity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg">
                  <span className="font-medium text-foreground">Ceremony</span>
                  <span className="text-muted-foreground">Up to 250 guests</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg">
                  <span className="font-medium text-foreground">Reception</span>
                  <span className="text-muted-foreground">Up to 200 guests</span>
                </div>
                <div className="p-4 bg-secondary/5 text-secondary rounded-lg flex items-center justify-center text-sm font-medium">
                  Outdoor ceremony space available
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-8 text-center md:text-left">What's Included</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Tables & Chairs",
                  "Bridal Suite",
                  "Groom's Room",
                  "Parking",
                  "Catering Kitchen",
                  "Outdoor Ceremony Space",
                  "String Lights",
                  "Fire Pit"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary/60 mr-3" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Policies */}
      <section className="py-24 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-foreground mb-4">Rental Policies & FAQ</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-border">
            <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary">What time does the event end?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Events must conclude by midnight to comply with local noise ordinances. All guests and vendors should be off the property by 1:00 AM.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-border">
            <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary">Is catering provided?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              We provide a fully-equipped catering kitchen, but we do not provide in-house catering. You are free to choose your own professional caterer, though we recommend selecting from our Preferred Vendors list.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-border">
            <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary">Can we bring our own alcohol?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Yes, you may provide your own alcohol. However, it must be served by a licensed bartender, and you must provide a one-day event liability insurance policy.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-border">
            <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary">Is there a security deposit?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Yes, a $500 refundable damage deposit is required 30 days prior to your event. It will be returned within 14 days after the event, provided no damage occurs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-border">
            <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary">What is the cancellation policy?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              We offer a 50% refund of your payments if cancelled 90+ days out from your event date. There are no refunds for cancellations made less than 90 days prior to the event.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-border">
            <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary">Are pets allowed?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Yes! Well-behaved, leashed pets are welcome to participate in outdoor ceremonies and photos. Pets are not permitted inside the reception barn or food service areas.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
