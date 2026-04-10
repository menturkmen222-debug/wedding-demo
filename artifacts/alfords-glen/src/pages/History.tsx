import { motion } from "framer-motion";
import historyHero from "@assets/1374819547495457_1775787714369.jpg";

const timeline = [
  {
    year: "Before 1811",
    title: "The Original Land Grant",
    desc: "The land that would become Alford's Glen was originally part of the holdings of Caleb Strong through the Ohio Company of Associates — one of the first organized efforts to settle the Northwest Territory."
  },
  {
    year: "1811",
    title: "The First House in Windham Township",
    desc: "In March 1811, the Alford family erected the first house in Windham Township on Lot 84 — a 20-by-15-foot cabin settled by the Beckett Land Company, who had journeyed from Massachusetts to make a new life in northeastern Ohio. That very lot is the land on which Alford's Glen stands today."
  },
  {
    year: "19th Century",
    title: "A Family Takes Root",
    desc: "Over the generations that followed, the Alford family worked and stewarded Lot 84, building a legacy tied to the rhythms of the land — the forests, fields, and seasons of Windham Township."
  },
  {
    year: "20th Century",
    title: "A Working Farm",
    desc: "The property continued as a working farm through much of the 20th century. The barn, which now serves as the heart of the wedding venue, stood as the center of daily life across multiple generations of the Alford family."
  },
  {
    year: "Recent Years",
    title: "A New Vision for the Land",
    desc: "Honoring the history of Lot 84, the Alford family began transforming the property into a wedding venue — preserving the original character of the land and its structures while opening the gates to couples who wanted something real, rooted, and beautiful."
  },
  {
    year: "Today",
    title: "Where Love Stories Begin",
    desc: "Alford's Glen Wedding Barn now welcomes couples to celebrate one of life's most important days on 50 acres of wooded northeastern Ohio — land that has carried the weight of family, history, and belonging since 1811."
  },
];

export function History() {
  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${historyHero}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="block text-4xl text-primary mb-3"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl text-white font-serif"
          >
            The History of Alford's Glen
          </motion.h1>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-20 container mx-auto px-4 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-xl italic text-primary mb-8 leading-relaxed"
        >
          "Every acre of this land carries a name, a story, and a season."
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-muted-foreground leading-loose mb-6"
        >
          Alford's Glen sits on Lot 84 of Windham Township in Portage County, Ohio — the very parcel where the Alford family built the first house in the township back in March 1811. What began as a simple 20-by-15-foot cabin settled by the Beckett Land Company from Massachusetts has grown into something timeless: 50 wooded acres that have witnessed generations of family, seasons of hard work, and now, hundreds of wedding days.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground leading-loose"
        >
          When we decided to open this land to weddings, our goal was simple: share what we have without losing what makes it special. The barn, the firepit, the trees — they are not decorations. They are the inheritance of a family that has belonged to this place for more than two centuries.
        </motion.p>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-foreground">A Timeline of Lot 84</h2>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2" />

          <div className="space-y-14">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`flex flex-col md:flex-row relative ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Dot */}
                  <div className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-2 shadow-[0_0_0_4px_hsl(var(--background))]" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? "md:pl-14" : "md:pr-14 md:text-right"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                      <span className="text-primary font-bold tracking-widest font-sans text-sm mb-2 block uppercase">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="mt-24 py-20 bg-secondary text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-white/70 font-serif text-lg italic max-w-2xl mx-auto">
            Over 200 years after the Alford family first settled Lot 84, this land is still in the family — and still welcoming people home.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
