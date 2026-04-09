import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1280", category: "Ceremonies", alt: "Wedding ceremony" },
    { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1280", category: "Ceremonies", alt: "Barn exterior" },
    { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1280", category: "Ceremonies", alt: "Outdoor ceremony" },
    { src: "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=1280", category: "Desserts", alt: "Wedding cake" },
    { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1280", category: "Flowers", alt: "Floral decor" },
    { src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=1280", category: "Flowers", alt: "Floral arrangement" },
    { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1280", category: "Receptions", alt: "Reception table setting" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1280", category: "Receptions", alt: "Reception night lights" },
    { src: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?w=1280", category: "Decor", alt: "Rustic decor details" },
    { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1280", category: "Ceremonies", alt: "Outdoor ceremony" },
  ];

  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.category === filter || filter === "All"); // Included 'All' in objects or handle via strict equality

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white mb-4"
        >
          Photo Gallery
        </motion.h1>
      </section>

      <div className="container mx-auto px-4 mt-12">
        <div className="flex justify-center mb-12">
          <Tabs defaultValue="All" onValueChange={setFilter} className="w-full max-w-3xl">
            <TabsList className="flex flex-wrap h-auto justify-center bg-transparent gap-2">
              {["All", "Ceremonies", "Receptions", "Decor", "Desserts", "Flowers"].map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6 py-2 border border-transparent data-[state=active]:border-primary"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]"
        >
          <AnimatePresence>
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt ?? `Gallery image ${i}`} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2"
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 hidden md:block"
            >
              <ChevronLeft size={48} />
            </button>

            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={filteredImages[currentIndex].src}
              alt="Fullscreen view"
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 hidden md:block"
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-sans tracking-widest uppercase">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
