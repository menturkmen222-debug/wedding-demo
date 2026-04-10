import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import flower1 from "@assets/1374817537495658_1775749043508.jpg";
import flower2 from "@assets/1374817587495653_1775749043610.jpg";
import flower3 from "@assets/1374818014162277_1775749043655.jpg";
import flower4 from "@assets/1374818370828908_1775749043703.jpg";
import flower5 from "@assets/1374818574162221_1775749043754.jpg";
import flower6 from "@assets/1374818824162196_1775749043810.jpg";
import flower7 from "@assets/1374818854162193_1775749043865.jpg";
import flower8 from "@assets/1374819324162146_1775749043917.jpg";
import flower9 from "@assets/1374819710828774_1775749043970.jpg";
import flower10 from "@assets/1390580469252698_1775749044025.jpg";
import flower11 from "@assets/1390580609252684_1775749044074.jpg";
import flower12 from "@assets/1390580772586001_1775749044136.jpg";

import dessert1 from "@assets/1371201677857244_1775748741293.jpg";
import dessert2 from "@assets/1374817337495678_1775748741422.jpg";
import dessert3 from "@assets/1374818034162275_1775748741471.jpg";
import dessert4 from "@assets/1374818227495589_1775748741571.jpg";
import dessert5 from "@assets/1374818524162226_1775748741637.jpg";
import dessert6 from "@assets/1374818710828874_1775748741693.jpg";
import dessert7 from "@assets/1374818887495523_1775748741756.jpg";
import dessert8 from "@assets/1374819167495495_1775748741806.jpg";
import dessert9 from "@assets/1374819230828822_1775748741937.jpg";
import dessert10 from "@assets/1390580482586030_1775748742011.jpg";
import dessert11 from "@assets/1390580522586026_1775748742064.jpg";
import dessert12 from "@assets/1390580625919349_1775748742114.jpg";
import dessert13 from "@assets/1390580662586012_1775748742170.jpg";
import dessert14 from "@assets/1390580712586007_1775748742225.jpg";
import dessert15 from "@assets/1390580785919333_1775748742276.jpg";
import dessert16 from "@assets/1390580865919325_1775748742327.jpg";
import dessert17 from "@assets/1390580925919319_1775748742386.jpg";

import ceremony1 from "@assets/No_photo_description_available._1_(1)_1775787557638.jpg";
import ceremony2 from "@assets/No_photo_description_available._1_1775787557737.jpg";
import ceremony3 from "@assets/Hitube_DauUKxC3ny_2026_04_09_11_47_11_1775787557776.jpg";
import ceremony4 from "@assets/Hitube_Zzjw4XyyWj_2026_04_09_10_23_16_1775787557816.jpg";
import ceremony5 from "@assets/Hitube_xC44CPSs9t_2026_04_09_10_23_14_1775787557864.jpg";
import ceremony6 from "@assets/Hitube_XCPBvlTQWq_2026_04_09_10_18_59_1775787557912.jpg";
import ceremony7 from "@assets/Hitube_ylwoL9AVpE_2026_04_09_10_17_52_1775787557963.jpg";
import ceremony8 from "@assets/1374819390828806_1775787714269.jpg";
import ceremony9 from "@assets/1374819547495457_1775787714369.jpg";

import decor1 from "@assets/1374817274162351_1775787207482.jpg";
import decor2 from "@assets/1374817280829017_1775787207582.jpg";
import decor3 from "@assets/1374817687495643_1775787207629.jpg";
import decor4 from "@assets/1374817767495635_1775787207669.jpg";
import decor5 from "@assets/1374817787495633_1775787243485.jpg";
import decor6 from "@assets/1374817844162294_1775787243658.jpg";
import decor7 from "@assets/1374818150828930_1775787243852.jpg";
import decor8 from "@assets/1374818300828915_1775787243929.jpg";
import decor9 from "@assets/1374818350828910_1775787295967.jpg";
import decor10 from "@assets/1374818417495570_1775787296173.jpg";
import decor11 from "@assets/1374819610828784_1775787296287.jpg";
import decor12 from "@assets/1390580189252726_1775787296395.jpg";
import decor13 from "@assets/1390580429252702_1775787396562.jpg";
import decor14 from "@assets/1390580575919354_1775787396693.jpg";
import decor15 from "@assets/1390580679252677_1775787396913.jpg";
import decor16 from "@assets/1390580822585996_1775787397008.jpg";
import decor17 from "@assets/1390580945919317_1775787436705.jpg";

export function Gallery() {
  const images = [
    { src: ceremony1, category: "Ceremonies & Receptions", alt: "Wedding party family photo outdoors" },
    { src: ceremony2, category: "Ceremonies & Receptions", alt: "Groom and groomsmen inside barn with fairy lights" },
    { src: ceremony3, category: "Ceremonies & Receptions", alt: "Groomsmen playing pool in the loft" },
    { src: ceremony4, category: "Ceremonies & Receptions", alt: "Couple dancing inside barn reception" },
    { src: ceremony5, category: "Ceremonies & Receptions", alt: "Bride and groom sparkler exit kiss" },
    { src: ceremony6, category: "Ceremonies & Receptions", alt: "Wedding party in forest ceremony" },
    { src: ceremony7, category: "Ceremonies & Receptions", alt: "Bride arriving on Kubota UTV" },
    { src: ceremony8, category: "Ceremonies & Receptions", alt: "First dance inside barn with white drapes and string lights" },
    { src: ceremony9, category: "Ceremonies & Receptions", alt: "Outdoor ceremony with arbor in fall foliage" },
    { src: flower1, category: "Flowers", alt: "Orange and peach wildflower bouquet" },
    { src: flower2, category: "Flowers", alt: "Cream dahlia close-up" },
    { src: flower3, category: "Flowers", alt: "Coral dahlia table centerpiece with fairy lights" },
    { src: flower4, category: "Flowers", alt: "Pink and coral dahlia bouquet" },
    { src: flower5, category: "Flowers", alt: "Autumn floral arrangement in vase" },
    { src: flower6, category: "Flowers", alt: "Table centerpiece with sunflowers and ferns" },
    { src: flower7, category: "Flowers", alt: "Peach dahlia close-up" },
    { src: flower8, category: "Flowers", alt: "Rustic boutonniere with feather and ribbon" },
    { src: flower9, category: "Flowers", alt: "Greenery and fern entrance display" },
    { src: flower10, category: "Flowers", alt: "Colorful floral arch with roses and dahlias" },
    { src: flower11, category: "Flowers", alt: "White rose sweetheart table arrangement" },
    { src: flower12, category: "Flowers", alt: "Mixed rose and hydrangea centerpiece" },
    { src: decor1, category: "Decor", alt: "Outdoor wooden arbor with fall foliage" },
    { src: decor2, category: "Decor", alt: "Silver floral vase holder close-up" },
    { src: decor3, category: "Decor", alt: "Reserved sign on outdoor ceremony chair" },
    { src: decor4, category: "Decor", alt: "Table 12 centerpiece with zinnia and fern" },
    { src: decor5, category: "Decor", alt: "Stone aisle pathway leading to arbor" },
    { src: decor6, category: "Decor", alt: "Drinks are on us bar sign with flowers" },
    { src: decor7, category: "Decor", alt: "Rustic lantern with mushroom and pinecone decor" },
    { src: decor8, category: "Decor", alt: "Guest book cooler The Baileys Est. 2025" },
    { src: decor9, category: "Decor", alt: "Reception hall setup with green tablecloths" },
    { src: decor10, category: "Decor", alt: "Seed packet favor with table number" },
    { src: decor11, category: "Decor", alt: "Outdoor ceremony area with hydrangeas" },
    { src: decor12, category: "Decor", alt: "Welcome table with guest book and signs" },
    { src: decor13, category: "Decor", alt: "Engraved cutting board Meiner Josh & Kenzie" },
    { src: decor14, category: "Decor", alt: "Bar setup with lemonade and wedding signs" },
    { src: decor15, category: "Decor", alt: "Floating candle centerpiece with baby's breath" },
    { src: decor16, category: "Decor", alt: "Head table with fairy light backdrop" },
    { src: decor17, category: "Decor", alt: "I do too napkin with dog photo" },
    { src: dessert1, category: "Desserts", alt: "Wedding cake with blue lights" },
    { src: dessert2, category: "Desserts", alt: "Cupcake dessert table display" },
    { src: dessert3, category: "Desserts", alt: "Dessert wagon with naked cake" },
    { src: dessert4, category: "Desserts", alt: "Rustic naked cake Mr & Mrs" },
    { src: dessert5, category: "Desserts", alt: "Cupcake tiered display" },
    { src: dessert6, category: "Desserts", alt: "Cupcake tiers close-up" },
    { src: dessert7, category: "Desserts", alt: "Gluten free cupcakes display" },
    { src: dessert8, category: "Desserts", alt: "Full dessert buffet table" },
    { src: dessert9, category: "Desserts", alt: "Gluten free cupcake tray" },
    { src: dessert10, category: "Desserts", alt: "Dessert wagon with cake pops" },
    { src: dessert11, category: "Desserts", alt: "Cupcakes and cake pops close-up" },
    { src: dessert12, category: "Desserts", alt: "Brownie and cupcake display" },
    { src: dessert13, category: "Desserts", alt: "White wedding cake The Meiners" },
    { src: dessert14, category: "Desserts", alt: "Charcuterie and food table" },
    { src: dessert15, category: "Desserts", alt: "Chocolate cupcakes with candy" },
    { src: dessert16, category: "Desserts", alt: "White wedding cake close-up" },
    { src: dessert17, category: "Desserts", alt: "Cake pops assortment" },
  ];

  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = filter === "All"
    ? images
    : images.filter(img => img.category === filter);

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
      <section className="relative pt-32 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={ceremony3} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Photo Gallery
          </motion.h1>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12">
        <div className="flex justify-center mb-12">
          <Tabs defaultValue="All" onValueChange={setFilter} className="w-full max-w-3xl">
            <TabsList className="flex flex-wrap h-auto justify-center bg-transparent gap-2">
              {["All", "Ceremonies & Receptions", "Decor", "Desserts", "Flowers"].map((cat) => (
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
