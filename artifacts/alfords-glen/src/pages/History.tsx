import { motion } from "framer-motion";

export function History() {
  const timeline = [
    { year: "1847", title: "The Land is Settled", desc: "The first settlers arrived on this 50-acre parcel of northeastern Ohio wilderness, clearing space for a modest homestead." },
    { year: "1892", title: "The Barn is Built", desc: "Local craftsmen raised the original timber-frame barn using white oak harvested directly from the property. The massive beams were hand-hewn and secured with wooden pegs." },
    { year: "1940s", title: "A Working Farm", desc: "Three generations of the Alford family farmed this land through the mid-20th century, raising dairy cattle and cultivating the rolling fields." },
    { year: "1978", title: "Nature Takes Over", desc: "As agricultural practices shifted, the farm was retired. The wooded acres were allowed to grow back to their natural state, creating the lush forest canopy that exists today." },
    { year: "2012", title: "A New Vision", desc: "The current generation of the Alford family began restoring the historic barn, carefully honoring its heritage while updating it to host celebrations." },
    { year: "2015", title: "First Wedding", desc: "Alford's Glen hosted its very first wedding, setting a new tradition of love, joy, and community gathering on these historic grounds." },
    { year: "Today", title: "A Legacy of Love", desc: "Hundreds of couples have chosen these wooded acres as the backdrop for their forever. The land continues to be stewarded by the Alford family." }
  ];

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white mb-4"
        >
          The History of Alford's Glen
        </motion.h1>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-4xl">
        <div className="prose prose-stone lg:prose-lg mx-auto text-foreground/80 font-sans mb-24 text-center">
          <p className="lead text-xl italic font-serif text-primary">
            Every great venue has a story. Ours is written in hand-hewn oak and rooted in 50 acres of Ohio soil.
          </p>
          <p>
            Long before it was a backdrop for elegant celebrations, Alford's Glen was a working family farm. The massive timber-frame structure that serves as our main reception space was built in the late 19th century by local craftsmen. If you look closely at the beams above the dance floor, you can still see the adze marks from where the wood was shaped by hand, cut from the very forest that surrounds it.
          </p>
          <p>
            When our family decided to open the property to weddings, our primary goal was preservation. We wanted to share the magic of this secluded valley without losing its authentic character. Today, we are proud to steward this land and help couples add their own chapters to its long, rich history.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`flex flex-col md:flex-row relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-1.5 shadow-[0_0_0_4px_hsl(var(--background))]" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border hover:border-primary/50 transition-colors">
                      <span className="text-primary font-bold tracking-widest font-sans text-sm mb-2 block">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
