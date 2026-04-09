import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart } from "lucide-react";

export function Couples() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white mb-4"
        >
          Our Couples
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/80 max-w-xl mx-auto px-4 font-sans"
        >
          Every love story celebrated at Alford's Glen is unique. We are honored to be part of your chapter.
        </motion.p>
      </section>

      {/* Coming Soon */}
      <section className="py-32 container mx-auto px-4 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center text-primary mx-auto mb-8">
            <Heart size={36} />
          </div>
          <h2 className="text-3xl font-serif text-foreground mb-4">Couple photos coming soon</h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Were you married at Alford's Glen? We'd love to feature your story and photos here. Use the form below to share your special day with us.
          </p>
        </motion.div>
      </section>

      {/* Share Your Story Form */}
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
                  <Textarea placeholder="Share your favorite memory from your wedding day..." className="min-h-[120px] bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Upload a Photo</label>
                  <Input type="file" accept="image/*" className="bg-background cursor-pointer" />
                </div>
                <Button type="button" className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                  Submit Your Story
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
