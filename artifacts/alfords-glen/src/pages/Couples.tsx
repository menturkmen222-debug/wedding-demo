import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart } from "lucide-react";

import couple1 from "@assets/1371201744523904_1775788118432.jpg";
import couple2 from "@assets/1371204167856995_1775788118521.jpg";
import couple3 from "@assets/1374817457495666_1775788118568.jpg";
import couple4 from "@assets/1374817817495630_1775788118682.jpg";
import couple5 from "@assets/1374818184162260_1775788249830.jpg";
import couple6 from "@assets/1374818247495587_1775788250072.jpg";
import couple7 from "@assets/1374818650828880_1775788250180.jpg";
import couple8 from "@assets/1374819184162160_1775788250390.jpg";
import couple9 from "@assets/1374819304162148_1775788330212.jpg";
import couple10 from "@assets/1382840930026652_1775788330365.jpg";
import couple11 from "@assets/1382840976693314_1775788407590.jpg";
import couple12 from "@assets/1382841036693308_1775788407828.jpg";
import couple13 from "@assets/1390580155919396_1775788407984.jpg";
import couple14 from "@assets/1390580205919391_1775788408075.jpg";
import couple15 from "@assets/1390580509252694_1775788408118.jpg";

const photos = [
  { src: couple1,  alt: "Wedding party processional along stone path with hydrangeas" },
  { src: couple2,  alt: "Couple embracing in sunlit forest" },
  { src: couple3,  alt: "Bride and groom exchanging vows at outdoor arbor in fall" },
  { src: couple4,  alt: "Bride and groom smiling inside barn with fairy lights" },
  { src: couple5,  alt: "Bride and groom entering barn reception with string lights" },
  { src: couple6,  alt: "Couple forehead to forehead in forest sunlight" },
  { src: couple7,  alt: "Groom helping bride arrange train on mossy rocks in forest" },
  { src: couple8,  alt: "Emotional bride walking down aisle with bouquet" },
  { src: couple9,  alt: "Couple sharing a kiss on rocky ledge in forest" },
  { src: couple10, alt: "Couple smiling by large tree trunk in autumn woods" },
  { src: couple11, alt: "Bride and groom portrait on wooded lane" },
  { src: couple12, alt: "Couple under fall arbor with hydrangeas and stone path" },
  { src: couple13, alt: "Bride with wildflower bouquet outside the barn" },
  { src: couple14, alt: "Couple inside warm barn with barrel tables and fairy lights" },
  { src: couple15, alt: "Sparkler exit kiss at night" },
];

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

      {/* Photo Grid */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart size={22} className="text-primary fill-primary/30" />
            <span className="font-script text-4xl text-primary">Moments We Treasure</span>
            <Heart size={22} className="text-primary fill-primary/30" />
          </div>
          <p className="text-muted-foreground font-sans max-w-lg mx-auto">
            A glimpse into the beautiful weddings that have taken place here at Alford's Glen Wedding Barn.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-md group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
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
