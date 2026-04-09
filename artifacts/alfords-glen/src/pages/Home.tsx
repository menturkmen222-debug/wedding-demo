import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TreePine, Home as HomeIcon, Heart } from "lucide-react";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-script text-5xl md:text-7xl text-primary mb-4"
          >
            Where Love Stories Begin
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl text-white font-serif mb-6"
          >
            Alford's Glen Wedding Barn
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 font-sans font-light tracking-wide uppercase mb-10 max-w-2xl"
          >
            50 Wooded Acres of Rustic Elegance in Garrettsville, Ohio
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-14">
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-white/10 hover:text-white text-base px-8 h-14">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center text-primary mb-6">
                <TreePine size={32} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-foreground">50 Wooded Acres</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">Surrounded by nature's beauty</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center text-primary mb-6">
                <HomeIcon size={32} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-foreground">Rustic Elegance</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">A unique barn wedding experience</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center text-primary mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-foreground">Family Run</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">Personal, caring service</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="py-0 bg-background overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[500px] lg:h-auto w-full relative">
            <img 
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920" 
              alt="Beautiful wedding setup" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 lg:p-24 bg-card">
            <span className="font-script text-4xl text-primary mb-2">Our Story</span>
            <h2 className="text-4xl lg:text-5xl font-serif mb-8 text-foreground">A Venue Unlike Any Other</h2>
            <ul className="space-y-6 font-sans text-foreground/80">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1 text-xl">❧</span>
                <span>An authentic, lovingly restored timber-frame barn dating back to the late 1800s.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1 text-xl">❧</span>
                <span>Exclusive access to the property for your entire wedding day or weekend.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1 text-xl">❧</span>
                <span>Breathtaking outdoor ceremony spaces nestled among ancient oaks.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1 text-xl">❧</span>
                <span>A fully-equipped catering kitchen and dedicated bridal suite.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1 text-xl">❧</span>
                <span>Warm, personalized service from our family to yours.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="py-24 bg-accent/40 text-center relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-6xl text-primary/30 font-serif absolute top-12 left-1/2 -translate-x-1/2">"</span>
          <p className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed relative z-10 italic mt-8 mb-8">
            "Alford's Glen gave us a wedding day that felt like a dream — intimate, magical, and completely our own. The barn was glowing in the afternoon light."
          </p>
          <div className="font-sans text-foreground/70 font-semibold tracking-wide uppercase text-sm">
            — Sarah & Michael
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-script text-4xl text-primary mb-2 block">Moments</span>
            <h2 className="text-4xl font-serif text-foreground">Captured Memories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
            <div className="lg:col-span-2 lg:row-span-2 relative rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=1280" alt="Couple" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1280" alt="Details" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=1280" alt="Cake" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1280" alt="Reception" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="lg:col-span-2 relative rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1280" alt="Party" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-primary text-lg hover:text-primary/80">
              <Link href="/gallery">View Full Gallery &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-secondary text-secondary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">Your perfect day starts here.</h2>
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 h-14 shadow-lg hover:-translate-y-1 transition-transform">
            <Link href="/contact">Request a Date</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
