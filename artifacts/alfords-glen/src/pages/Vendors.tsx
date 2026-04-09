import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Globe } from "lucide-react";

export function Vendors() {
  const vendorData = {
    caterers: [
      { name: "Harvest Table Catering", desc: "Farm-to-table cuisine with seasonal menus", phone: "(330) 555-0101", web: "harvesttable.com" },
      { name: "Countryside Kitchen", desc: "Comfort food with elegant presentation", phone: "(330) 555-0102", web: "countrysidekitchen.com" },
      { name: "The Rustic Fork", desc: "BBQ & buffet specialists", phone: "(330) 555-0103", web: "therusticfork.com" }
    ],
    photographers: [
      { name: "Golden Hour Studios", desc: "Cinematic wedding photography", phone: "(330) 555-0201", web: "goldenhourstudios.com" },
      { name: "Woodland Imagery", desc: "Nature-inspired wedding photos", phone: "(330) 555-0202", web: "woodlandimagery.com" },
      { name: "Luminous Lens", desc: "Fine art wedding photography", phone: "(330) 555-0203", web: "luminouslens.com" }
    ],
    florists: [
      { name: "Wildflower Workshop", desc: "Organic, garden-style arrangements", phone: "(330) 555-0301", web: "wildflowerworkshop.com" },
      { name: "Petal & Vine", desc: "Romantic floral designs", phone: "(330) 555-0302", web: "petalandvine.com" },
      { name: "Bloom Studio", desc: "Minimalist and lush florals", phone: "(330) 555-0303", web: "bloomstudio.com" }
    ],
    music: [
      { name: "Summit Sound DJ", desc: "Professional MC and DJ services", phone: "(330) 555-0401", web: "summitsound.com" },
      { name: "The Acoustic Trio", desc: "Live acoustic wedding music", phone: "(330) 555-0402", web: "acoustictrio.com" },
      { name: "Heartstrings Band", desc: "8-piece wedding band", phone: "(330) 555-0403", web: "heartstringsband.com" }
    ],
    desserts: [
      { name: "Sugar & Lace Bakery", desc: "Custom wedding cakes", phone: "(330) 555-0501", web: "sugarandlace.com" },
      { name: "The Sweet Barn", desc: "Rustic dessert bars", phone: "(330) 555-0502", web: "thesweetbarn.com" },
      { name: "Whisk & Wonder", desc: "Artisan pastries", phone: "(330) 555-0503", web: "whiskandwonder.com" }
    ],
    beauty: [
      { name: "Bridal Glow Studio", desc: "On-site bridal hair & makeup", phone: "(330) 555-0601", web: "bridalglow.com" },
      { name: "Radiant Beauty Co", desc: "Airbrush makeup specialists", phone: "(330) 555-0602", web: "radiantbeauty.com" },
      { name: "The Glam Collective", desc: "Full bridal party services", phone: "(330) 555-0603", web: "glamcollective.com" }
    ]
  };

  const renderVendorGrid = (vendors: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {vendors.map((v, i) => (
        <motion.div key={i} whileHover={{ y: -5 }}>
          <Card className="h-full bg-white border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-primary">{v.name}</CardTitle>
              <CardDescription className="text-muted-foreground">{v.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 text-sm text-foreground/80">
                <a href={`tel:${v.phone.replace(/\D/g,'')}`} className="flex items-center hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mr-2 text-muted-foreground" /> {v.phone}
                </a>
                <a href={`https://${v.web}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  <Globe className="w-4 h-4 mr-2 text-muted-foreground" /> {v.web}
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white mb-4"
        >
          Our Preferred Vendors
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/80 max-w-2xl mx-auto px-4 font-sans"
        >
          We've partnered with the best local professionals who share our commitment to excellence and know our venue perfectly.
        </motion.p>
      </section>

      <div className="container mx-auto px-4 mt-12 max-w-6xl">
        <Tabs defaultValue="caterers" className="w-full">
          <TabsList className="flex flex-wrap h-auto justify-center bg-transparent gap-2 mb-8">
            <TabsTrigger value="caterers" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6 py-2">Caterers</TabsTrigger>
            <TabsTrigger value="photographers" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6 py-2">Photographers</TabsTrigger>
            <TabsTrigger value="florists" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6 py-2">Florists</TabsTrigger>
            <TabsTrigger value="music" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6 py-2">DJs & Bands</TabsTrigger>
            <TabsTrigger value="desserts" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6 py-2">Cake & Desserts</TabsTrigger>
            <TabsTrigger value="beauty" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6 py-2">Hair & Makeup</TabsTrigger>
          </TabsList>
          
          <TabsContent value="caterers" className="mt-0">
            {renderVendorGrid(vendorData.caterers)}
          </TabsContent>
          <TabsContent value="photographers" className="mt-0">
            {renderVendorGrid(vendorData.photographers)}
          </TabsContent>
          <TabsContent value="florists" className="mt-0">
            {renderVendorGrid(vendorData.florists)}
          </TabsContent>
          <TabsContent value="music" className="mt-0">
            {renderVendorGrid(vendorData.music)}
          </TabsContent>
          <TabsContent value="desserts" className="mt-0">
            {renderVendorGrid(vendorData.desserts)}
          </TabsContent>
          <TabsContent value="beauty" className="mt-0">
            {renderVendorGrid(vendorData.beauty)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
