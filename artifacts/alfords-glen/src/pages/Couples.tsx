import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Couples() {
  const couples = [
    { img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800", name: "Jessica & David", date: "October 2024", quote: "The perfect setting for our perfect day." },
    { img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800", name: "Amanda & Robert", date: "June 2024", quote: "Every detail was handled with care." },
    { img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800", name: "Emily & Chris", date: "May 2024", quote: "Our guests couldn't stop talking about the venue." },
    { img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800", name: "Lauren & James", date: "September 2023", quote: "A magical woodland fairytale." },
    { img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800", name: "Ashley & Tom", date: "August 2023", quote: "We wouldn't change a single thing." },
    { img: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800", name: "Rachel & Mark", date: "July 2023", quote: "The Alford family made us feel like their own." },
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white mb-4"
        >
          Alford's Glen Couples
        </motion.h1>
      </section>

      {/* Featured Couple */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border flex flex-col md:flex-row">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=1280" 
              alt="Sarah & Michael Thompson" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-accent/10">
            <h2 className="text-3xl font-serif text-primary mb-2">Sarah & Michael Thompson</h2>
            <div className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-6">September 14, 2024</div>
            <p className="text-foreground/80 leading-relaxed italic text-lg font-serif">
              "From the moment we drove down that winding lane and saw the barn glowing in the afternoon light, we knew this was the place. Alford's Glen gave us a wedding day that felt like a dream — intimate, magical, and completely our own."
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {couples.map((couple, i) => (
            <motion.div key={i} whileHover={{ y: -5 }}>
              <Card className="overflow-hidden h-full border-border bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={couple.img} 
                    alt={couple.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-xl text-foreground mb-1">{couple.name}</h3>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">{couple.date}</div>
                  <p className="text-foreground/70 italic text-sm">"{couple.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-accent/20">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <span className="font-script text-4xl text-primary mb-2 block">Share Your Story</span>
          <h2 className="text-3xl font-serif text-foreground mb-8">Were you an Alford's Glen couple?</h2>
          
          <Card className="bg-white border-none shadow-lg">
            <CardContent className="p-8 text-left">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Names</label>
                    <Input placeholder="e.g. Jane & John" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Wedding Date</label>
                    <Input type="date" className="bg-background" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Story</label>
                  <Textarea placeholder="Share your favorite memory..." className="min-h-[100px] bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Upload a Photo</label>
                  <Input type="file" accept="image/*" className="bg-background cursor-pointer" />
                  <p className="text-xs text-muted-foreground">UI only - upload simulated</p>
                </div>
                <Button type="button" className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                  Submit Story
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
